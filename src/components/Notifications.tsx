import { useState } from 'react';
import {
  DownOutlined,
  ArrowRightOutlined,
  VideoCameraOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { Divider, Space } from 'antd';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import laptopImg from '../assets/laptop.webp';
import booksImg from '../assets/books.webp';
import bookImg from '../assets/book.webp';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Notifications = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="  flex lg:flex-col  justify-evenly gap-8 p-4 ">
      <div className=" w-min">
        <div className="  text-purple text-xs mb-2">Premium Access</div>
        <div className="  text-lg font-semibold flex-1">
          Take Back Your Creative Control
        </div>
        <div className="text-grey text-xs mt-6">
          The Professional Platform <DownOutlined className="ml-2" />{' '}
        </div>
        <div className="flex text-purple text-sm mt-6 p-2 px-3 border rounded-lg border-gray-400 border-opacity-30">
          Upgrade Now <ArrowRightOutlined className="ml-auto" />
        </div>
        <Divider />
        <div className=" max-w-[220px]  text-xs mb-6 ">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
      <div>
        <Space direction="horizontal" className="mb-[-4px]">
          <img
            src={laptopImg}
            alt="laptopImage"
            className="w-[45px] bg-lightGrey p-3 rounded-full"
          />
          <Space size={0} direction="vertical">
            <Space className="text-sm font-medium">Meeting with Client</Space>
            <Space className="text-[11px] text-grey">
              <VideoCameraOutlined />
              Google Meet
              <div>
                <ClockCircleOutlined className="mr-1 ml-4" />
                <Space className="text-xs">12 pm</Space>
              </div>
            </Space>
          </Space>
        </Space>
        <Divider />

        <Space direction="horizontal" className="my-[-4px]">
          <img
            src={booksImg}
            alt="laptopImage"
            className="w-[45px] bg-lightGrey p-3 rounded-full"
          />
          <Space size={0} direction="vertical">
            <Space className="text-sm font-medium">Weekly Report</Space>
            <Space className="text-[11px] text-grey">
              <VideoCameraOutlined />
              Google Meet
              <div>
                <ClockCircleOutlined className="mr-1 ml-4" />
                <Space className="text-xs">03 pm</Space>
              </div>
            </Space>
          </Space>
        </Space>

        <Divider />
        <Space direction="horizontal" className="mt-[-4px]">
          <img
            src={bookImg}
            alt="laptopImage"
            className="w-[45px] bg-lightGrey p-3 rounded-full"
          />
          <Space size={0} direction="vertical">
            <Space className="text-sm font-medium">Daily Scrum Meeting</Space>
            <Space className="text-[11px] text-grey">
              <VideoCameraOutlined />
              Google Meet
              <div>
                <ClockCircleOutlined className="mr-1 ml-4" />
                <Space className="text-xs">0 pm</Space>
              </div>
            </Space>
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default Notifications;
