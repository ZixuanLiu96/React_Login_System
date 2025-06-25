import { Menu } from "antd";
import { getMenu } from "../../api/users";
import { useState, useEffect } from "react";
import icons from "./iconList";

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

interface MenuItemFromData {
  key: string;
  label: string;
  icon: string;
  children?: MenuItemFromData[];
}

/*

const items: MenuItem[] = [
  { key: "1", icon: <PieChartOutlined />, label: "Option 1" },
  { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "11", label: "Option 11" },
          { key: "12", label: "Option 12" },
        ],
      },
    ],
  },
];
*/

function NavLeft() {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);

  // 用useEffect，一刷新页面就获取对应的菜单信息
  useEffect(() => {
    configMenu();
  }, []);

  // 1.1定义一个函数处理菜单数据，因为菜单数据的是JSON的类型，都是字符串，要处理成上面MenuItem中deicon类型一样（标签的形式）
  async function configMenu() {
    const { data } = await getMenu();
    console.log("res", data);
    const mappedMenuItems: MenuItem[] = mapMenuItems(data);
    setMenuData(mappedMenuItems);
  }

  // 1.2 单独定义一个函数，专门对菜单数据进行处理，将返回的菜单数据，转换成我们需要的格式
  function mapMenuItems(items: MenuItemFromData[]): any {
    return items.map((item: MenuItemFromData) => ({
      key: item.key,
      label: item.label,
      children: item.children ? mapMenuItems(item.children) : null, //递归函数，如果有children的话继续按照这个函数处理数据
      icon: icons[item.icon],
    }));
  }

  return (
    <div>
      <Menu
        defaultSelectedKeys={["/dashboard"]} //默认页面一加载就默认高亮的数据的‘key’
        mode="inline"
        theme="dark"
        items={menuData}
      />
    </div>
  );
}

export default NavLeft;
