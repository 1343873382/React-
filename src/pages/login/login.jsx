import React, { Component } from 'react'
import "./login.scss"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default class Login extends Component {
    
    render() {
        
            const onFinish = (values) => {
              console.log('Received values of form: ', values);
            }
        return (
            <div className="login">
                <header className="login-header">React项目：后台管理系统</header>
                <section className="login-content">
                    <div className="login-center">
                        <div className="login-font">用户登录</div>
                        <div className="login-form">
                        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      
      </Form.Item>
    </Form>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
