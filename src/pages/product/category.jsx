import React,{Component} from 'react'
import {Button, Card,Table,Tag, Space} from 'antd'
import {PlusOutlined } from '@ant-design/icons'
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        age: Math.floor(Math.random()*101),
        address: `New York No.${i+1} Lake Park`,
        tags: ['nice', 'developer','loser'],
    })
}


export default class Demo extends Component{
    changeTablePage=(page)=>{
        // console.log(page)
    }
    changeSize=(page,pageNumber)=>{
        this.setState({
            currentSize:pageNumber
        })
    }
    state={
        currentSize:10
    }
     render(){
         return <>
            <Card
                size="small"
                title="一级分类"
                extra={<Button type='primary' icon={<PlusOutlined />}>add</Button>}
            >
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{//根据ant中pagination组件可以添加相应的参数,此处只简单进行处理
                        showSizeChanger: true,
                        showQuickJumper: true,
                        pageSize:this.state.currentSize,
                        showTotal: () => <span>共{data.length}条记录</span>,
                        onChange:this.changeTablePage,
                        onShowSizeChange:this.changeSize
                    }}
                />
            </Card>
        </>
     }
}
