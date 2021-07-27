import React,{Component} from 'react'
import { Layout,Button,Breadcrumb} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PoweroffOutlined
} from '@ant-design/icons';
import {Switch,Route,Redirect,Link} from 'react-router-dom'
import './admin.css'
import logo from '../../assets/666006.jpg'
import Sides from '../../components/side'
import home from '../home/home'
import product from '../product/product'
import category from '../product/category'
import user from '../user/user'
import role from '../role/role'
import barChart from '../charts/barChart'
import circleChart from '../charts/circleChart'
import lineChart from '../charts/lineChart'
const { Header, Sider, Content,Footer } = Layout;
export default class Demo extends Component{
    constructor() {
        super();
        this.state={
            name:'',
            collapsed: false,
            routesList:[]
        }
    }
    layout=true
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
       this.layout=!this.layout
    };
    handleExit=()=>{
        localStorage.removeItem('username')
        sessionStorage.clear()
        this.props.history.push('/login')
    }
    getRoutesList=(selected,openMenu)=> {
        const arr = selected.split('/')
        const obj = {
            title: arr[arr.length - 1],
            path: selected,
            openMenu
        }
        const {routesList} = this.state
        const newRoutesList = routesList.map(item => item.path)
        if(!newRoutesList.includes(selected)){
            this.setState({
                routesList:[...routesList,obj]
            })
        }
    }

    handleNavigator=(index,item)=>{
        return ()=>{
            sessionStorage.setItem('selected',item.path)
            sessionStorage.setItem('openMenu',item.openMenu)
            this.sideComponent.handleSelected()
            let {routesList}=this.state
            routesList=routesList.slice(0,index+1)
            this.setState({
                routesList
            })
            setTimeout(()=>{
                this.props.history.go(0)
            },500)
        }
    }
     render(){
        return <>
            <Layout className='main-container'>
                <Sider className='side-container' trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className='img-container'>
                        <img src={logo} alt=""/>
                    </div>
                    <Sides ref={(e)=>this.sideComponent=e} getRoutesList={this.getRoutesList}/>
                </Sider>
                <Layout className={this.layout?'primary-layout site-layout':'trigger-layout site-layout'} >
                    <Header className="site-layout-background header-container" >
                       <div className="header-header">
                           {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                               className: 'trigger',
                               onClick: this.toggle,
                           })}
                           <div className='header-right'>
                               <span>欢迎</span>
                               <span>{this.state.name}</span>
                               <Button onClick={this.handleExit} type='primary' icon={<PoweroffOutlined />}>退出</Button>
                           </div>
                       </div>
                        <div className="header-bottom">
                            <Breadcrumb>
                                {
                                    this.state.routesList.map((item,index)=>{
                                        return (
                                            <Breadcrumb.Item key={item.path}>
                                                <Link to={item.path} onClick={this.handleNavigator(index,item)}>{item.title}</Link>
                                            </Breadcrumb.Item>
                                        )
                                    })
                                }

                            </Breadcrumb>
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background"
                    >
                             <Switch >
                                 <Route path='/admin/home' component={home}/>
                                 <Route path='/admin/products/product' component={product}/>
                                 <Route path='/admin/products/category' component={category}/>
                                 <Route path='/admin/user' component={user}/>
                                 <Route path='/admin/role' component={role}/>
                                 <Route path='/admin/charts/barChart' component={barChart}/>
                                 <Route path='/admin/charts/lineChart' component={lineChart}/>
                                 <Route path='/admin/charts/circleChart' component={circleChart}/>
                                 <Redirect path='/admin' to='/admin/home' />
                             </Switch>
                    </Content>
                </Layout>
            </Layout>
        </>
     }
     componentDidMount() {
        const name=localStorage.getItem('username')
         if(name){
             console.log(name)
             this.setState({
                 name
             })
         }else{
             this.props.history.push('/login')
         }
     }

}

