import React, {Component} from 'react'

import AuthenticationJS from '../assets/js/auth'

import '../assets/styles/authentication.css'

import img_logo from '../assets/images/logo.svg'

class Auth extends Component {

    componentDidMount() {
        AuthenticationJS()
    }

    render() { 

        let header;
        if (this.props.match.params.method === 'login') {
            header = (
                <div className="authentication-type">
                    <div className="authentication-login selected-header">
                        <i className="fas fa-sign-in-alt"></i>
                        <p>ورود</p>
                    </div>
                    <div className="authentication-register">
                        <i className="fas fa-user"></i>
                        <p>ثبت نام</p>
                    </div>
                </div>
            )
        } else {
            header = (
                <div className="authentication-type">
                    <div className="authentication-login">
                        <i className="fas fa-sign-in-alt"></i>
                        <p>ورود</p>
                    </div>
                    <div className="authentication-register selected-header">
                        <i className="fas fa-user"></i>
                        <p>ثبت نام</p>
                    </div>
                </div>
            )
        }

        return (
            <div className="auth-body">
                <div className="auth-header">
                    <img src={img_logo} alt="REYHOON"/>
                </div>
                {header}
                <div className="welcome">
                    <h2>ثبت نام</h2>
                    <p>از اینکه داری به جمع ریحونیا می‌پیوندی خیلی خوشحالیم</p>
                </div>
                <div className="form-layout login-specific">
                    <div className="input-fill">
                        <div>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="نام و نام‌خانوادگی" />
                        </div>
                    </div>
                    <div className="input-fill">
                        <div>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="رمز عبور" />
                        </div>
                    </div>
                    <a>رمز عبور خود را فراموش کردم</a>
                    <button>ورود</button>
                </div>
                <div className="form-layout register-specific">
                    <div className="input-fill">
                        <div>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="نام و نام‌خانوادگی" />
                        </div>
                    </div>
                    <div className="input-half-layout">
                        <div className="input-half-right">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="شماره همراه" />
                        </div>
                        <div className="input-half-left">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="ایمیل" />
                        </div>
                    </div>
                    <div className="input-fill">
                        <div>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="رمز عبور" />
                        </div>
                    </div>
                    <div className="input-fill">
                        <div>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="تکرار رمز عبور" />
                        </div>
                    </div>
                    <button>ثبت نام</button>
                </div>
                <div className="auth-footer">
                    <ul className="auth-footer-social">
                        <li><i className="fas fa-search"></i></li>
                        <li><i className="fas fa-search"></i></li>
                        <li><i className="fas fa-search"></i></li>
                        <li><i className="fas fa-search"></i></li>
                        <li><i className="fas fa-search"></i></li>
                    </ul>
                    <div className="auth-footer-divider"></div>
                    <ul className="auth-footer-options">
                        <li>سوالات متداول</li>
                        <li>ثبت رستوران</li>
                        <li>درباره ریحون</li>
                        <li>بلاگ</li>
                        <li>قوانین و مقررات</li>
                        <li>تماس با ریحونیا</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Auth