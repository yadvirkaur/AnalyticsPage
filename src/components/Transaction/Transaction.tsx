import React, { useState } from 'react';
import {
  Select,
  ConfigProvider,
  Space,
  Table,
  Dropdown,
  MenuProps,
  Badge,
  Avatar,
} from 'antd';
import { CalendarOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table/interface';

import { transactionData } from './transactionData';

interface DataType {
  key: string;
  customer: string;
  email: string;
  status: string;
  date: string;
  invoice: string;
  amount: number;
  image: string;
  people: {
    src: string;
    backgroundColor: string;
    border: string;
  }[];
}

const titleStyle = {
  fontSize: '10px',
  fontWeight: '400',
  padding: '0',
  border: 'none',
};

const Poj: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(
    null
  );
  const [selectedMonth, setSelectedMonth] = useState('Nov ');

  const data: DataType[] = transactionData; // Destructure the data

  // Create a unique list of recipients
  const uniqueRecipients = Array.from(
    new Set(data.map((item) => item.customer))
  );

  const recipientMenu: MenuProps['items'] = [
    ...uniqueRecipients.map((recipient) => ({
      label: recipient,
      key: recipient,
    })),
    { label: 'Clear Filter', key: '' },
  ];

  const statusMenu: MenuProps['items'] = [
    { label: 'Success', key: 'Success' },
    { label: 'Pending', key: 'Pending' },
    { label: 'Clear Filter', key: '' },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: <div style={titleStyle}>Customer</div>,
      dataIndex: 'customer',
      key: 'customer',

      render: (text, record) => ({
        children: (
          <div className=" md:flex items-center py-[14px] ">
            <img
              src={record.image}
              className="bg-purpleGray rounded-full w-9 p-[6px]"
              alt="customer image"
            />
            <div className="ml-[8px]">
              <div className="flex flex-wrap text-[12px] font-medium">
                {text}
              </div>
              <div className="text-[10px] text-[#bababa]">{record.email}</div>
            </div>
          </div>
        ),
      }),
    },
    {
      title: <div style={titleStyle}>Status</div>,
      dataIndex: 'status',
      key: 'status',

      render: (text, record) => ({
        children: (
          <div>
            <Space size={6} className="border px-2 rounded-xl">
              <Badge
                color={record.status === 'Success' ? '#61d484' : '#e2aa01'}
              />
              <div style={{ fontSize: '10px', fontWeight: '600' }}>{text}</div>
            </Space>
          </div>
        ),
      }),
    },
    {
      title: <div style={titleStyle}>Date</div>,
      dataIndex: 'date',
      key: 'date',
      render: (text) => (
        <div style={{ fontSize: '10px', fontWeight: '600' }}>{text}</div>
      ),
    },
    {
      title: <div style={titleStyle}>Invoice</div>,
      dataIndex: 'invoice',
      key: 'invoice',
      render: (text) => (
        <div style={{ fontSize: '10px', fontWeight: '600' }}>{text}</div>
      ),
    },
    {
      title: <div style={titleStyle}>People</div>,
      dataIndex: 'people',
      key: 'people',

      render: (
        people: { src: string; backgroundColor: string; border: string }[]
      ) => (
        <Avatar.Group
          maxCount={people.length > 3 ? 2 : undefined}
          size="small"
          maxStyle={{
            color: '#ffffff',
            backgroundColor: '#000000',
            fontSize: '9px',
            display: 'flex',
            alignItems: 'center',
            border: '2px solid white',
          }}
        >
          {people.map((user, index) => (
            <Avatar
              key={index}
              style={{
                backgroundColor: user.backgroundColor,
                padding: '2px',
                border: user.border,
              }}
              src={user.src}
            />
          ))}
        </Avatar.Group>
      ),
    },
  ];

  let filteredData = data;

  if (selectedRecipient) {
    filteredData = filteredData.filter(
      (item) => item.customer === selectedRecipient
    );
  }

  if (statusFilter) {
    filteredData = filteredData.filter((item) => item.status === statusFilter);
  }

  if (selectedMonth) {
    filteredData = filteredData.filter((item) =>
      item.date.includes(selectedMonth)
    );
  }

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData =
    sortOrder === 'asc'
      ? filteredData.slice().sort((a, b) => a.amount - b.amount)
      : sortOrder === 'desc'
      ? filteredData.slice().sort((a, b) => b.amount - a.amount)
      : filteredData;

  const customButtonStyles = {
    borderRadius: '6px',
    background: '#f3f4f8',
    fontWeight: '500',
    fontSize: '12px',
    padding: '16px',
    paddingBlock: '6px',
  };

  return (
    <>
      <div className="md:px-4 px-2  mb-10 mt-[20px]">
        <Space className="flex justify-between mb-[14px] ">
          <div className="text-lg font-semibold  ">Transaction History</div>

          <div className=" border rounded-lg pl-2 p-1">
            <CalendarOutlined className="text-grey " />
            <Select
              size={'small'}
              defaultValue="Nov"
              bordered={false}
              onChange={(value) => setSelectedMonth(value)}
              options={[
                { value: '', label: 'Month' },
                { value: 'Aug', label: 'Aug' },
                { value: 'Sept', label: 'Sept' },
                { value: 'Oct', label: 'Oct' },
                { value: 'Nov', label: 'Nov' },
                { value: 'Dec', label: 'Dec' },
              ]}
            />
          </div>
        </Space>

        <div>
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  headerBg: '#ffffff',
                  headerColor: '#bababa',
                  cellPaddingBlock: 6,
                  cellPaddingInline: 4,
                  cellFontSize: 11,
                  filterDropdownBg: '#65ffdd',
                },
              },
            }}
          >
            <Space style={{ marginBottom: '18px' }}>
              <Dropdown
                menu={{
                  onClick: ({ key }) => setSelectedRecipient(key),
                  items: recipientMenu,
                }}
                trigger={['click']}
              >
                <span style={customButtonStyles}>
                  Recipient {selectedRecipient ? `: ${selectedRecipient}` : ''}
                  <DownOutlined className="pl-2" />
                </span>
              </Dropdown>

              <button onClick={handleSortChange} style={customButtonStyles}>
                Amount
                {sortOrder === 'asc' && (
                  <UpOutlined className="text-xxs pl-2" />
                )}
                {sortOrder === 'desc' && (
                  <DownOutlined className="text-xxs pl-2" />
                )}
                {!sortOrder && <DownOutlined className="text-xxs pl-2" />}
              </button>

              <Dropdown
                menu={{
                  onClick: ({ key }) => setStatusFilter(key),
                  items: statusMenu,
                }}
                trigger={['click']}
              >
                <span style={customButtonStyles}>
                  Status {statusFilter ? `: ${statusFilter}` : ''}{' '}
                  <DownOutlined className="pl-2" />
                </span>
              </Dropdown>
            </Space>

            <Table
              columns={columns}
              dataSource={sortedData}
              style={{}}
              pagination={{ hideOnSinglePage: true }}
              onChange={handleSortChange}
            />
          </ConfigProvider>
        </div>
      </div>
    </>
  );
};

export default Poj;
