import { useNavigate } from 'react-router-dom';
import './index.css'
import HttpClient from '../../utils/HttpClient';
import { FormEvent, useState } from 'react';
import { message } from 'antd';
import { useAppDispatch } from '../../hooks/store';
import { setToken } from '../../store/slice/token';

const Login: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const registerHandler = () => {
        navigate('/register')
    }

    const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { code, data } = await HttpClient.post<string>('/user/login', JSON.stringify({username, password}));
        if (code === 200) {
            message.success('登录成功！');
            dispatch(setToken(data));
            navigate('/');
        } else {
            message.warning('登录失败，请检查用户名或姓名');
        }
    }

    return (
        <div className="overlay">
            <form onSubmit={loginHandler}>
                <div className="con">
                    <header className="head-form">
                        <h2>智慧校园</h2>
                        <p>登录</p>
                    </header>
                    <br />
                    <div className="field-set">
                        <span className="input-item">
                            <i className="fa fa-user-circle"></i>
                        </span>
                        <input 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="form-input" 
                            type="text" 
                            placeholder="用户名" 
                            required 
                            value={username} 
                        />

                        <br />

                        <span className="input-item">
                            <i className="fa fa-key"></i>
                        </span>
                        <input 
                            className="form-input" 
                            type="password" 
                            placeholder="密码" 
                            name="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} 
                            required 
                        />
                        
                        <br />
                        <button className="log-in" type='submit'> 登录 </button>
                    </div>
                    <div className="other">
                        <button className="btn submits frgt-pass" style={{fontSize: '14px'}}>忘记密码</button>
                        <button className="btn submits sign-up" onClick={registerHandler}>注册
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Login;