import './index.css'

const Register: React.FC = () => {

    return (
        <div className="overlay">
            <form>
                <div className="con">
                    <header className="head-form">
                        <h2>智慧校园</h2>
                        <p>注册</p>
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
                        <button className="log-in"> 注册 </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Register;