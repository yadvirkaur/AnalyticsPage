import React, { useState } from 'react';
import {
  Select,
  ConfigProvider,
  Button,
  Space,
  Table,
  Menu,
  Dropdown,
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

  const statusMenu = (
    <Menu onClick={({ key }) => setStatusFilter(key)}>
      <Menu.Item key="Success">Success</Menu.Item>
      <Menu.Item key="Pending">Pending</Menu.Item>
      <Menu.Item key="">Clear Filter</Menu.Item>
    </Menu>
  );

  // Create a unique list of recipients
  const uniqueRecipients = Array.from(
    new Set(data.map((item) => item.customer))
  );

  const recipientMenu = (
    <Menu onClick={({ key }) => setSelectedRecipient(key)}>
      {uniqueRecipients.map((recipient) => (
        <Menu.Item key={recipient}>{recipient}</Menu.Item>
      ))}
      <Menu.Item key="">All Recipients</Menu.Item>
    </Menu>
  );

  const columns: ColumnsType<DataType> = [
    {
      title: <div style={titleStyle}>Customer</div>,
      dataIndex: 'customer',
      key: 'customer',

      render: (text, record) => ({
        children: (
          <div
            style={{
              paddingBlock: '14px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={record.image}
              className="bg-purpleGray rounded-full w-9 p-[6px]"
              alt="customer image"
            />
            <div style={{ marginLeft: '8px' }}>
              <div style={{ fontSize: '12px', fontWeight: '600' }}>{text}</div>
              <div style={{ fontSize: '10px', color: '#bababa' }}>
                {record.email}
              </div>
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
    border: 'none',
    borderRadius: '6px',
    background: '#f3f4f8',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '12px',
    padding: '16px',
    paddingBlock: '14px',
  };

  return (
    <>
      <div className="px-4 mb-10 mt-[20px]">
        <Space className="flex justify-between mb-[14px] ">
          <div className="text-lg font-semibold  ">Transaction History</div>

          <div className=" border rounded-lg pl-2 p-1">
            <CalendarOutlined className="text-grey " />
            <Select
              size={'small'}
              defaultValue="Nov"
              bordered={false}
              onChange={(value) => setSelectedMonth(value)}
            >
              <Select.Option value=" ">Month</Select.Option>
              <Select.Option value="Aug">Aug</Select.Option>
              <Select.Option value="Sept">Sept</Select.Option>
              <Select.Option value="Oct">Oct</Select.Option>
              <Select.Option value="Nov">Nov</Select.Option>
              <Select.Option value="Dec">Dec</Select.Option>
            </Select>
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
              <Dropdown overlay={recipientMenu}>
                <Button size="small" style={customButtonStyles}>
                  Recipient {selectedRecipient ? `: ${selectedRecipient}` : ''}
                  <DownOutlined />
                </Button>
              </Dropdown>

              <Button
                size="small"
                onClick={handleSortChange}
                style={customButtonStyles}
              >
                Amount
                {sortOrder === 'asc' && <UpOutlined className="text-xxs" />}
                {sortOrder === 'desc' && <DownOutlined className="text-xxs" />}
                {!sortOrder && <DownOutlined className="text-xxs" />}
              </Button>

              <Dropdown overlay={statusMenu}>
                <Button size="small" style={customButtonStyles}>
                  Status {statusFilter ? `: ${statusFilter}` : ''}{' '}
                  <DownOutlined />
                </Button>
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
