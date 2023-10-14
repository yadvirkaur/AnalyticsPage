import {
  Avatar,
  Badge,
  Space,
  Layout,
  Menu,
  ConfigProvider,
  Button,
} from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  MessageOutlined,
  ShoppingOutlined,
  BarChartOutlined,
  CompassOutlined,
  FolderOutlined,
  SearchOutlined,
  BellOutlined,
  DownOutlined,
} from '@ant-design/icons';

const { Sider, Header, Content } = Layout;

import logo from '../assets/logo.webp';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import user from '../assets/user.webp';
import HeaderTag from './HeaderTag';

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 770) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuItemClick = () => {
    if (window.innerWidth < 770) {
      setCollapsed(true);
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyBg: '#ffffff',
            siderBg: '#ffffff',
          },
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header className=" headerSection p-2 md:flex-nowrap flex-wrap inline-flex  items-center  bg-white py-10  ">
          <div className=" headerItem1 flex">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                color: '#6e62e5',
              }}
            />
            <Link to="/" className="flex items-center">
              <Space className="ml-4 ">
                <img src={logo} className="w-7" alt="" />
                <div className="text-base font-bold">Omoi</div>
              </Space>
            </Link>
          </div>

          <div className="hidden md:block headerItem2 ml-12 mt-6">
            <HeaderTag />
          </div>

          <Space className="headerItem3 ml-auto max-w-[260px] md:min-w-[200px] mr-4 flex justify-between">
            <Space>
              <SearchOutlined className="text-base text-grey bg-lightGrey rounded-full p-1" />
              <Badge dot={true}>
                <BellOutlined className="text-base text-grey ml-4" />
              </Badge>
            </Space>

            <Space className=" ml-4 rounded-full  p-1 px-2 shadow">
              <Avatar
                size="small"
                shape="circle"
                style={{
                  backgroundColor: '#ffc6b7',
                  padding: '2px',
                }}
                src={user}
              />
              <Space size={5} className="text-sm  font-semibold ">
                Yadvir <DownOutlined className="text-grey text-xs" />
              </Space>
            </Space>
          </Space>
        </Header>

        <Layout>
          <Sider
            trigger={null}
            className=" siderBar z-10  border border-l-white border-r-gray-400 border-opacity-30    "
            // width={170}

            width={window.innerWidth < 600 ? '100vw' : 170}
            collapsible
            collapsed={collapsed}
            collapsedWidth={0}
          >
            <Menu
              // theme="light"
              mode="inline"
              defaultSelectedKeys={['1']}
              className="text-sm "
              onClick={handleMenuItemClick}
              items={[
                {
                  key: '1',
                  icon: <HomeOutlined />,
                  label: <Link to="/">Home</Link>,
                  style: {
                    height: '32px',
                  },
                },
                {
                  key: '2',
                  icon: <BarChartOutlined />,
                  label: <Link to="/analytic">Analytic</Link>,
                  style: {
                    height: '32px',
                  },
                },
                {
                  key: '3',
                  icon: <CompassOutlined />,
                  label: 'Explore',
                  style: {
                    height: '32px',
                  },
                },
                {
                  key: '4',
                  icon: <ShoppingOutlined />,
                  label: 'Shop',
                  style: {
                    height: '32px',
                  },
                },
                {
                  key: '5',
                  icon: <MessageOutlined />,
                  label: 'Inbox',
                  style: {
                    height: '32px',
                  },
                },

                {
                  key: '6',
                  label: 'Tools',
                  style: {
                    color: '#b3b4b5',
                    fontSize: '10px',
                    height: '32px',
                    marginTop: '12px',
                    backgroundColor: 'white',
                  },
                },
                {
                  key: '7',
                  icon: <SettingOutlined />,
                  label: 'Setting',
                  style: {
                    height: '32px',
                  },
                },
                {
                  key: '8',
                  icon: <QuestionCircleOutlined />,
                  label: 'Help',
                  style: {
                    height: '32px',
                  },
                },

                {
                  key: '9',
                  label: 'Projects',
                  style: {
                    color: '#b3b4b5',
                    fontSize: '10px',
                    height: '32px',
                    marginTop: '12px',
                    backgroundColor: 'white',
                  },
                },
                {
                  key: '10',
                  icon: <FolderOutlined />,
                  label: 'Amazon',
                  style: {
                    height: '32px',
                  },
                },
                {
                  key: '11',
                  icon: <FolderOutlined />,
                  label: 'Invinity HQ',
                  style: {
                    height: '32px',
                  },
                },
              ]}
            />
          </Sider>

          <Content className="mainContent">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default LayoutPage;
