import React, {Component} from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'

import Header from './common/header'
import Footer from './common/footer'
import HomeJs from '../assets/js/home'

import '../assets/styles/home.css'

import img_logo from '../assets/images/logo.svg'
import img_dropdown from '../assets/images/drop_down.svg'
import img_search_location from '../assets/images/search-location.svg'

import img_step_location from '../assets/images/step-location.svg'
import img_ch_loc from '../assets/images/ch-loc.png'
import img_step_food from '../assets/images/step-food.svg'
import img_ch_food from '../assets/images/ch-food.png'
import img_step_heart from '../assets/images/step-heart.svg'
import img_ea_food from '../assets/images/ea-food.png'

import img_google_play from '../assets/images/app-downloads/google-play-light.png'
import img_cafebazaar from '../assets/images/app-downloads/cafebazaar-light.png'
import img_reyhoon from '../assets/images/app-downloads/reyhoon-light.png'
import img_ios_direct from '../assets/images/app-downloads/ios-direct-light.png'
import img_app_on_phone from '../assets/images/app-on-phone.png'

// Todo: searchbar as component
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city: '',
            area: ''
        }
        this.onSearch = this.onSearch.bind(this)
    }

    componentDidMount() {
        HomeJs()
    }

    onSearch(event) {
        let city = $('#city_search').val()
        let area = $('#area_search').val()
        this.setState({
            city: city,
            area: area
        })
    }

    render() {
        return (
            <div>
                <Header />

                <div className="order-layout">
                    <div className="order-banner">
                        <div className="reyhoon-logo">
                            <img src={img_logo} alt="REYHOON"/>
                        </div>
                        <h1>سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فودها</h1>
                        <p>برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
                    </div>
                    <div className="search-layout">
                        <div className="search-bar-layout">
                            <div className="search-bar-city">
                                <img src={img_dropdown} alt="شهر"/>
                                <input id="city_search" type="text" autocomplete="off" role="combobox" placeholder="تهران" onChange={this.onSearch} />
                            </div>
                            <fieldset className="search-bar-district">
                                <legend>منطقه خود را وارد کنید</legend>
                                <img src={img_search_location} alt="منطقه"/>
                                <input id="area_search" type="text" autocomplete="off" role="combobox" placeholder="مثلا نیاوران" onChange={this.onSearch} />
                            </fieldset>
                            <Link to={'/restaurants/?city=' + this.state.city + '&area=' + this.state.area}>
                                <button className="search-bar-button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </Link>
                        </div>
                        <div className="previous-search pointer-cursor">
                            <p><i className="fas fa-history"></i> آخرین جستجو: قزوین، پونک</p>
                        </div>
                    </div>
                </div>

                <div class="steps-layout">
                    <div>
                        <p>شهر و منطقه خود را وارد کنید</p>
                        <div class="steps-box">
                            <div>
                                <img class="steps-icon-sign" src={img_step_location}/>
                                <img class="steps-icon-pic" src={img_ch_loc}/>
                            </div>
                            <p>منوی مورد علاقه خود را از بین بیش از ۴۰۰۰ رستوران خوب در تهران و شهرستان‌ها جستجو کنید.</p>
                        </div>
                    </div>
                    <div>
                        <p>غذای خود را انتخاب کنید</p>
                        <div class="steps-box">
                            <div>
                                <img class="steps-icon-sign" src={img_step_food}/>
                                <img class="steps-icon-pic" src={img_ch_food}/>
                            </div>
                            <p>غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید.</p>
                        </div>
                    </div>
                    <div>
                        <p>غذایتان را نوش‌جان کنید</p>
                        <div class="steps-box">
                            <div>
                                <img class="steps-icon-sign" src={img_step_heart}/>
                                <img class="steps-icon-pic" src={img_ea_food}/>
                            </div>
                            <p>درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.</p>
                        </div>
                    </div>
                </div>

                <div class="best-restaurants-layout">
                    <h2>رستوران‌ها و فست‌فود‌های برتر ماه بر اساس امتیازدهی کاربران</h2>
                    <div class="best-restaurants"></div>
                </div>

                <div class="good-restaurants-layout">
                    <p>رستوران‌های خوب تهران در ریحون</p>
                    <div class="good-restaurants"></div>
                </div>

                <div class="select-type-layout">
                    <h1>غذا چی میل دارید؟</h1>
                    <p>صبحانه، ناهار، شام یا هر چیزی که میل دارید را انتخاب کنید</p>
                    <div class="type-list">
                        <a href="#" class="sandwich">
                            <div>
                                <h3>ساندویچ</h3>
                                <p>2746 رستوران فعال</p>
                            </div>
                        </a>
                        <a href="#" class="burger">
                            <div>
                                <h3>برگر</h3>
                                <p>2452 رستوران فعال</p>
                            </div>
                        </a>
                        <a href="#" class="pizza">
                            <div class="food-type-show-inner-shade">
                                <h3>پیتزا</h3>
                                <p>2408 رستوران فعال</p>
                            </div>
                        </a>
                        <a href="#" class="kebab">
                            <div>
                                <h3>کباب</h3>
                                <p>1836 رستوران فعال</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="select-type-minimal">
                    <h1>انتخاب غذاهای بیشتر</h1>
                    <div>
                        <a href="#">خورشت</a>
                        <a href="#">غذای پلویی</a>
                        <a href="#">خوراک</a>
                        <a href="#">سالاد</a>
                        <a href="#">غذای ایرانی</a>
                        <a href="#">فست‌فود</a>
                        <a href="#">سوخاری</a>
                        <a href="#">پاستا</a>
                        <a href="#">چلوکباب</a>
                        <a href="#">ماهی</a>
                        <a href="#">استیک</a>
                        <a href="#">بشقاب</a>
                        <a href="#">صبحانه</a>
                        <a href="#">سوپ</a>
                        <a href="#">غذای دریایی</a>
                        <a href="#">آبمیوه طبیعی</a>
                    </div>
                </div>

                <br/>

                <div class="app-div">
                    <div class="app-div-outer">
                        <div class="app-div-right-side">
                            <h1>ریحون روی موبایل</h1>
                            <p>برای دریافت لینک دانلود اپلیکیشن ریحون، شماره موبایل خود را وارد کنید.</p>
                            <div class="rec-link-div">
                                <div class="region-getter-typable">
                                    <input type="text" autocomplete="off" role="combobox" placeholder="مثلا 912345****"/>
                                </div>
                                <div class="recv-link-btn">
                                    دریافت لینک از طریق SMS
                                </div>
                            </div>
                            <p class="app-div-access-msg">اپلیکیشن ریحون برای Android و iOS در دسترس است.</p>
                            <div class="app-download-links">
                                <a href="#">
                                    <div>
                                        <img src={img_google_play} alt="Google Play"/>
                                    </div>
                                </a>
                                <a href="#">
                                    <div>
                                        <img src={img_cafebazaar} alt="Cafebazaar"/>
                                    </div>
                                </a>
                                <a href="#">
                                    <div>
                                        <img src={img_reyhoon} alt="Reyhoon Light"/>
                                    </div>
                                </a>
                                <a href="#">
                                    <div>
                                        <img src={img_ios_direct} alt="IOS Direct"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="app-div-left-side">
                            <img src={img_app_on_phone} alt="Screenshot" />
                        </div>
                    </div>
                </div>

                <br/><br/><br/><br/><br/><br/>

                <Footer />
            </div>
        )
    }

}

export default Home