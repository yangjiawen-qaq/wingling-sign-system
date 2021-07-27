import React,{Component} from 'react'
import { Form, Input, Button,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Redirect} from 'react-router-dom'
import './login.css'
import axios from '../../api/axios'
export default class Demo extends Component {
    onFinish=async values=>{
        const {username,password}=values
        try{
            // let {data}=await axios('/login','post',null,{
            //     username,
            //     password
            // })
            // console.log(data)
            // if(data.status===0){
                message.success('登陆成功^_^',1)
                localStorage.setItem('username',username)
                this.props.history.push({
                    pathname:'/admin'
                })
            // }
        }catch(err){
            throw new Error(err)
        }
    }
    render() {
        const name=localStorage.getItem('username')
        if(name){
            return <Redirect to='/admin'/>
        }
        else{
            return <div className='container'>
                <div className='form-container'>
                    <h3 className='title'>后台管理登录</h3>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },{
                                    min:5,
                                    max:12,
                                    message:'the length of your password is incorrect'
                                },
                                {
                                    pattern:/^[a-zA-Z0-9_]+$/,
                                    message:'the password must be consisted of number or character or underline'
                                }
                            ]}
                            validateTrigger='onBlur'
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },{
                                    min:5,
                                    max:12,
                                    message:'the length of your password is incorrect'
                                },{
                                    pattern:/^[a-zA-Z0-9_]+$/,
                                    message:'the password must be consisted of number or character or underline'
                                }
                            ]}
                            validateTrigger='onBlur'
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{width:"100%"}}
                                className="login-form-button"
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        }
    }
}

