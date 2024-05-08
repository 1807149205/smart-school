import MenuItem from "antd/es/menu/MenuItem";
import { UserSwitchOutlined } from '@ant-design/icons';

export const menuItem: MenuItem[] = [
    {
      key: '/userManager',
      label: '用户管理',
      icon: <UserSwitchOutlined />,
    },
  ];