import {
    AppstoreOutlined,
    PieChartOutlined,
    AliwangwangOutlined,
    BarChartOutlined,
    LineChartOutlined,
    HomeOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from '@ant-design/icons';
export default [
    {
        title:'首页',
        path:'/admin/home',
        icon:<HomeOutlined/>
    },
    {
        title:'商品',
        path:'/admin/products',
        icon:<AppstoreOutlined />,
        children:[
            {
                title:'品类管理',
                path:'/admin/products/category',
                icon:<ShopOutlined />
            },
            {
                title:'商品管理',
                path:'/admin/products/product',
                icon:<ShoppingCartOutlined />
            }
        ]
    },
    {
        title:'用户管理',
        path:'/admin/user',
        icon:<UserOutlined />
    },
    {
        title:'角色管理',
        path:'/admin/role',
        icon:<AliwangwangOutlined />
    },
    {
        title:'图形图表',
        path:'/admin/charts',
        icon:<PieChartOutlined />,
        children:[
            {
                title:'柱形图',
                path:'/admin/charts/barChart',
                icon:<BarChartOutlined />
            },
            {
                title:'折线图',
                path:'/admin/charts/lineChart',
                icon:<LineChartOutlined />
            },
            {
                title:'饼图',
                path:'/admin/charts/circleChart',
                icon:<PieChartOutlined />
            }
        ]
    }

]
