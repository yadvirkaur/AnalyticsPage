import { Space } from 'antd';
import profit from '../assets/Profit.jpeg';
import revenue from '../assets/Revenue.png';
import sales from '../assets/Sales.png';

const Banner = () => {
  return (
    <div className=" flex flex-wrap  p-4 px-2 mx-2 md:px-6 mb-7 gap-6 justify-evenly   border rounded-xl bg-purple  text-xs text-lightPurple  ">
      <Space direction="horizontal">
        <img
          src={revenue}
          className="rounded-full w-9  bg-white p-2 "
          alt="revenue image"
        />
        <Space direction="vertical">
          <div>Monthly Revenue</div>
          <Space>
            <div className="text-lightGrey font-medium text-base">$3.500</div>
            <span className="text-purple bg-white text-xxs font-semibold rounded-lg px-1 py-[2px]">
              +2.4%
            </span>
          </Space>
          <div>
            Previous month <span>$1.7k</span>
          </div>
        </Space>
      </Space>

      <Space direction="horizontal">
        <img
          src={sales}
          className="rounded-full w-9 bg-white p-1 "
          alt="sales image"
        />
        <Space direction="vertical">
          <div>Monthly Sales</div>
          <Space>
            <div className="text-lightGrey font-medium text-base">$6.750</div>
            <span className="text-purple bg-white text-xxs font-semibold rounded-lg px-1 py-[2px]">
              +1.4%
            </span>
          </Space>
          <div>
            Previous month <span>$3.1k</span>
          </div>
        </Space>{' '}
      </Space>

      <Space direction="horizontal">
        <img
          src={profit}
          className="rounded-full w-9  bg-white p-2"
          alt="profit image"
        />
        <Space direction="vertical">
          <div>Total Profit</div>
          <Space>
            <div className="text-lightGrey font-medium text-base">$10.900</div>
            <span className="text-purple bg-white text-xxs font-semibold rounded-lg px-1 py-[2px]">
              +4.3%
            </span>
          </Space>
          <div>
            Previous month <span>$8.9k</span>
          </div>
        </Space>{' '}
      </Space>
    </div>
  );
};

export default Banner;
