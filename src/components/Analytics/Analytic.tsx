import { useState } from 'react';
import { Space, Dropdown, MenuProps } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import Chart from './charts'; // Import your Chart component
import data from './data'; // Import your data

const Analytic = () => {
  const [selectedMonth, setSelectedMonth] = useState('Aug');

  const handleMonthChange = (e: { key: string }) => {
    setSelectedMonth(e.key);
  };

  const filteredData = data.filter((item) => item.month === selectedMonth);

  const items: MenuProps['items'] = ['Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map(
    (month) => ({
      label: month,
      key: month,
      style: { fontSize: '10px' },
    })
  );

  return (
    <div className=" flex lg:flex-nowrap flex-wrap justify-evenly w-auto py-4 px-2 mx-2 md:p-4  gap-12  border rounded-xl border-gray-400 border-opacity-30">
      <Space direction="vertical">
        <div className="text-base font-bold">Total Sales & Cost</div>
        <div className="text-xs text-grey font-medium">Last 60 days</div>

        <Space direction="horizontal" className="mt-[1em]">
          <div className="text-purple text-2xl font-bold">$956.82K</div>
          <div className="whitespace-nowrap text-green text-xxs font-semibold bg-lightGreen px-1 py-[3px] rounded-lg">
            <CaretUpOutlined />
            +5.4%
          </div>
        </Space>
        <div className="text-grey text-xs font-medium">
          <span className="text-green">+8.20k</span> vs prev. 60 days
        </div>
      </Space>

      <div>
        <div className="flex items-baseline gap-1">
          <div className="ml-4 text-sm font-semibold">Analytic</div>
          <div className="text-green text-xxs font-semibold">+5.4%</div>
          <div className="text-xxs font-medium ml-auto">
            <div className="text-xxs font-medium ml-auto">
              <Dropdown
                menu={{
                  onClick: handleMonthChange,
                  items: items,
                }}
                trigger={['click']}
              >
                <div className="text-xxs font-medium">
                  {selectedMonth} <CaretDownOutlined />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <Chart data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Analytic;
