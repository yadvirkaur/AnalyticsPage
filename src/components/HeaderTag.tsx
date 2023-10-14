import { Space } from 'antd';
import { Avatar, Badge } from 'antd';
import user from '../assets/user.webp';

const HeaderTag = () => {
  return (
    <div className=" flex p-4 mb-3 justify-start ">
      <Space direction="horizontal">
        <Badge size="small" count={3} style={{ backgroundColor: '#6e62e5' }}>
          <Avatar
            size={55}
            shape="circle"
            style={{
              backgroundColor: '#ffc6b7',
              padding: '8px',
            }}
            src={user}
          />
        </Badge>

        <Space direction="vertical">
          <div className="text-lg font-semibold">Good Evening Team!</div>

          <div className="text-xs text-grey">
            Have an in-depth look at all the metrics within your dashboard.
          </div>
        </Space>
      </Space>
    </div>
  );
};

export default HeaderTag;
