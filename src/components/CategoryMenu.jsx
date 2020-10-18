import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { SiTripadvisor, SiInstagram, SiFacebook } from 'react-icons/si'

export default function CategoryMenu({ showCategory, closeCategory }) {
    return (
        <div className={!showCategory ? 'category-menu' : 'category-menu active-category-opa'}>
            <div onClick={() => closeCategory()} className={!showCategory ? 'category-menu-opa' : 'category-menu-opa active-category-opa'}></div>
            <div className={!showCategory ? 'category-menu-container' : 'category-menu-container active-category'}>
                <div style={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
                    <CloseIcon style={{ fontSize: '40px', cursor: 'pointer', color: 'white' }} onClick={() => closeCategory()} />
                    {JSON.parse(localStorage.getItem('chosen')) === "en" ? <img style={{ cursor: 'pointer' }} onClick={() => { closeCategory(); localStorage.setItem('chosen', JSON.stringify('al')); window.location.reload(); }} width="40" src="/al.png" alt="" /> : <img style={{ cursor: 'pointer' }} onClick={() => { closeCategory(); localStorage.setItem('chosen', JSON.stringify('en')); window.location.reload(); }} width="40" src="/en.png" alt="" />}
                </div>
                <nav style={{ height: '70%', width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ul className="category-ul">
                        <div className="left-category">
                            <li className="caategory-li" onClick={() => closeCategory()}> <img width="50" src="/hot-soup.png" alt="" /> <a className="link-category" href="#supat">{JSON.parse(localStorage.getItem('chosen')) === 'en' ? 'Soups' : 'Supat'} </a></li>
                            <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/salad.png" alt="" /><a className="link-category" href="#salad">{JSON.parse(localStorage.getItem('chosen')) === 'en' ? 'Salads' : 'Sallatat'}</a></li>
                            <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/wrap.png" alt="" /><a className="link-category" href="#wrap">Wraps</a></li>
                            <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/burger.png" alt="" /><a className="link-category" href="#burger">{JSON.parse(localStorage.getItem('chosen')) === 'en' ? 'Burgers' : 'Burgera'}</a></li>
                            <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/smoothie.png" alt="" /><a className="link-category" href="#smoothie">Smoothie bowls</a></li>
                        </div>
                        <div className="right-category">

                            <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/orange-juice.png" alt="" /><a className="link-category" href="#fresh">{JSON.parse(localStorage.getItem('chosen')) === 'en' ? 'Fresh Juice' : 'Lengje te fresket'}</a></li>
                            <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/snack.png" alt="" /><a className="link-category" href="#snacks">{JSON.parse(localStorage.getItem('chosen')) === 'en' ? 'Snacks' : 'Zemrat'}</a></li>
                            <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/sweet-food.png" alt="" /><a className="link-category" href="#sweets">{JSON.parse(localStorage.getItem('chosen')) === 'en' ? 'Sweets' : 'Embelsira'}</a></li>
                            <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/water-bottle.png" alt="" /><a className="link-category" href="#other">{JSON.parse(localStorage.getItem('chosen')) === 'en' ? 'Other drinks' : 'Pije te tjera'}</a></li>
                        </div>
                    </ul>
                </nav>
                <hr className="hr" />
                <div className="div-social">
                    <h1>{window.location.pathname === '/en' ? 'Follow us on' : 'Na ndiqni '}</h1>
                    <div className="links-social-media-div">
                        <a target="_blank" href="https://www.facebook.com/greenandproteintr/"><SiFacebook style={{ color: 'white', fontSize: '40px' }} /></a>
                        <a target="_blank" href="https://www.instagram.com/greenandproteintirana/"> <SiInstagram style={{ color: 'white', fontSize: '40px' }} /></a>
                        <a target="_blank" href="https://www.tripadvisor.com/Restaurant_Review-g294446-d19240567-Reviews-Green_Protein-Tirana_Tirana_County.html"> <SiTripadvisor style={{ color: 'white', fontSize: '40px' }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
