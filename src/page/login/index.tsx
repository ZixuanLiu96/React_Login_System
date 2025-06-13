import "./index.scss";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.jpg";
import lgbg from "../../assets/lgbg.jpg";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { login } from "../../api/users";

function Login() {
  const [form] = Form.useForm();

  function handleLogin() {
    form
      .validateFields()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // useEffect(() => {
  //   http({
  //     url: "/login",
  //     method: "post",
  //     data: {
  //       username: "dave",
  //       password: 123456,
  //     },
  //   })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // 优化之后，使用封装好的login函数请求数据
  useEffect(() => {
    login({ username: "123", password: "123" });
  });

  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }}>
        <div className="part">
          <div className="title">
            <div className="logo">
              <img src={logo} alt="logo" width={100} />
            </div>
            <h1>朋远智慧园区管理平台</h1>
          </div>
          <Form
            form={form}
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "用户名不能为空" },
                { pattern: /^\w{4,8}$/, message: "用户名不能为空" },
              ]}
            >
              <Input placeholder="请输入您的用户名" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              <Input.Password
                placeholder="请输入您的密码"
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item label={null}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                onClick={handleLogin}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
