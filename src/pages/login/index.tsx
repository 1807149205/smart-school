import { useNavigate } from 'react-router-dom';
import './index.css'

const Login: React.FC = () => {

    const navigate = useNavigate();

    const registerHandler = () => {
        navigate('/register')
    }

    return (
        <div className="overlay">
            <form>
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
                        <input className="form-input" type="text" placeholder="用户名" required />

                        <br />

                        <span className="input-item">
                            <i className="fa fa-key"></i>
                        </span>
                        <input className="form-input" type="password" placeholder="密码" name="password" required />
                        
                        <br />
                        <button className="log-in"> 登录 </button>
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