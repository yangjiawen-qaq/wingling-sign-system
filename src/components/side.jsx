import React,{Component} from 'react'
import { Menu} from 'antd';
import menuList from "../config/menuconfig";

import {Link}  from 'react-router-dom'
const { SubMenu } = Menu;
export default class Demo extends Component{
    constructor() {
       super();
       this.state={
           defaultSelectedItem:[],
           defaultOpenMenu:[]
       }

   }
   componentWillMount() {
       this.handleSelected()
   }

    handleSelected=()=>{
       const selected=sessionStorage.getItem('selected')
       const openMenu=sessionStorage.getItem('openMenu')
       this.setState({
           defaultSelectedItem:selected?[selected]:['/admin/home'],
           defaultOpenMenu:openMenu?[openMenu]:[]
       })
   }
    getLinkNodes=(list,subMenu=null)=>{
        // eslint-disable-next-line array-callback-return
        return list.map(item=>{
            if(!item.children){
                return (
                    <Menu.Item key={item.path} icon={item.icon}
                    >
                        <Link onClick={this.triggerState(item.path,subMenu)} to={item.path}> {item.title}</Link>
                   </Menu.Item>
                )
            }else{
                return (
                    <SubMenu key={item.path} icon={item.icon} title={item.title}>
                        {
                            this.getLinkNodes(item.children,item.path)
                        }
                    </SubMenu>
                )
            }
        })
    }
    triggerState=(selected,openMenu=null)=>{
          return ()=>{
              this.props.getRoutesList(selected,openMenu)
              sessionStorage.setItem('selected',selected)
              sessionStorage.setItem('openMenu',openMenu)
          }
    }

    render(){
        return  <div style={{ width: '100%' }}>
            <Menu
                defaultSelectedKeys={this.state.defaultSelectedItem}
                defaultOpenKeys={this.state.defaultOpenMenu}
                mode="inline"
                theme="dark"
            >
                {
                    this.getLinkNodes(menuList)
                }
                {/*<Menu.Item key="1" icon={<HomeOutlined /> }>*/}
                {/*   <Link onClick={this.triggerState('1')} to='/admin/home'> 首页</Link>*/}
                {/*</Menu.Item>*/}
                {/*<SubMenu key="sub1" icon={<AppstoreOutlined />} title="商品">*/}
                {/*    <Menu.Item key="2" icon={<ShopOutlined />}>*/}
                {/*      <Link onClick={this.triggerState('2','sub1')} to='/admin/products/category'> 品类管理</Link>*/}
                {/*    </Menu.Item>*/}
                {/*    <Menu.Item key="3" icon={<ShoppingCartOutlined />}>*/}
                {/*     <Link onClick={this.triggerState('3','sub1')} to='/admin/products/product'>商品管理</Link>*/}
                {/*    </Menu.Item>*/}
                {/*</SubMenu>*/}
                {/*<Menu.Item key="4" icon={<UserOutlined />}>*/}
                {/*   <Link onClick={this.triggerState('4')} to='/admin/user'> 用户管理</Link>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="5" icon={<AliwangwangOutlined />}>*/}
                {/*    <Link onClick={this.triggerState('5')} to='/admin/role'>角色管理</Link>*/}
                {/*</Menu.Item>*/}
                {/*<SubMenu key="sub2" icon={<PieChartOutlined />} title="图形图表">*/}
                {/*    <Menu.Item key="6" icon={<BarChartOutlined />}>*/}
                {/*        <Link onClick={this.triggerState('6','sub2')} to='/admin/charts/barChart'>柱形图</Link>*/}
                {/*    </Menu.Item>*/}
                {/*    <Menu.Item key="7" icon={<LineChartOutlined />}>*/}
                {/*        <Link onClick={this.triggerState('7','sub2')} to='/admin/charts/lineChart'>折线图</Link>*/}
                {/*    </Menu.Item>*/}
                {/*    <Menu.Item key="8" icon={<PieChartOutlined />}>*/}
                {/*        <Link onClick={this.triggerState('8','sub2')} to='/admin/charts/circleChart'>饼图</Link>*/}
                {/*    </Menu.Item>*/}
                {/*</SubMenu>*/}
            </Menu>
        </div>
     }
}
