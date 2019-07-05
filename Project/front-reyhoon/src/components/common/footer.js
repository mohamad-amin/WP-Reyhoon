import React from 'react'

import '../../assets/styles/footer.css'
import img_enamad from '../../assets/images/enamad.png'
import img_kasbokar from '../../assets/images/kasbokar.png'
import img_footer_apps from '../../assets/images/footer_apps.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className="footer-info-apps">
                    <h4>اپلیکیشن‌های موبایل</h4>
                    <img src={img_footer_apps} alt="apps"/>
                </div>
                <div className="footer-info-support">
                    <h4>پشتیبانی ریحون</h4>
                    <ul>
                        <li>سوالات متداول</li>
                        <li>تماس با پشتیبانی</li>
                        <li>قوانین و مقررات</li>
                    </ul>
                </div>
                <div className="footer-info-restaurants">
                    <h4>رستوران‌ها</h4>
                    <ul>
                        <li>ثبت رستوران</li>
                    </ul>
                </div>
                <div className="footer-info-call">
                    <h4>تماس با ریحون</h4>
                    <ul>
                        <li>درباره ریحون</li>
                        <li>تماس با ما</li>
                        <li>وبلاگ ریحون</li>
                    </ul>
                </div>
                <div className="footer-info-security">
                    <p>مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.</p>
                    <a href="index.html">لیست رستوران‌ها</a>
                </div>
            </div>
            <div className="footer-credentials">
                <img src={img_enamad} />
                <img src={img_kasbokar} />
            </div>
            <div className="footer-social">
                <p>© 2017, Reyhoon, All Rights Reserved.</p>
                <ul>
                    <li><i className="fab fa-google-plus-g"/></li>
                    <li><i className="fab fa-instagram"/></li>
                    <li><i className="fab fa-twitter"/></li>
                    <li><i className="fab fa-facebook-f"/></li>
                    <li><i className="fab fa-telegram-plane"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer