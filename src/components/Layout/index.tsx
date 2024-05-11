import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; 
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import LayoutHeader from './layoutHeader';
import { menuItem } from '../../menu';
import BreadcrumbComponent from './breadcrumbComponent';

const { Content, Sider } = Layout;

const AppLayout: React.FC = () => {

  const navigate = useNavigate();

  const [selectKey, setSelectKey] = useState('');

  useEffect(() => {
    setSelectKey(window.location.pathname);
  }, [])

  const menuItemClickHandler: MenuProps['onClick'] = (e) => {
    setSelectKey(e.key);
    navigate(e.key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height: '100%'}}>
      <LayoutHeader></LayoutHeader>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            selectedKeys={[selectKey]}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItem}
            onClick={menuItemClickHandler}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          
          <BreadcrumbComponent/>

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;