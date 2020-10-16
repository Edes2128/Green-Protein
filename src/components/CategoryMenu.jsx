import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import  {SiTripadvisor,SiInstagram,SiFacebook} from 'react-icons/si'

export default function CategoryMenu({ showCategory, closeCategory }) {
    return (
        <div className={!showCategory ? 'category-menu' : 'category-menu active-category-opa'}>
            <div onClick={() => closeCategory()} className={!showCategory ? 'category-menu-opa' : 'category-menu-opa active-category-opa'}></div>
            <div className={!showCategory ? 'category-menu-container' : 'category-menu-container active-category'}>
                <div style={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
                    <CloseIcon style={{ fontSize: '40px', cursor: 'pointer', color: 'white' }} onClick={() => closeCategory()} />
                    <Link to={window.location.pathname === '/en' ? '/' : '/en'} style={{fontSize:'24px', color: '#8C8A8B' ,  textDecoration:'none' }}>{window.location.pathname === '/en' ? 'AL' : 'EN'}</Link>
                </div>
                <nav style={{ height: '70%', width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ul style={{ listStyle: 'none', height: '100%', width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',alignItems:'center' }}>
                        <li className="caategory-li" onClick={() => closeCategory()}> <img width="50" src="/hot-soup.png" alt=""/> <a className="link-category" href="#supat">{window.location.pathname === '/en' ? 'Soups' : 'Supat'} </a></li>
                        <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/salad.png" alt=""/><a className="link-category" href="#salad">{window.location.pathname === '/en' ? 'Salads' : 'Sallatat'}</a></li>
                        <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/wrap.png" alt=""/><a className="link-category" href="#wrap">Wraps</a></li>
                        <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/burger.png" alt=""/><a className="link-category" href="#burger">{window.location.pathname === '/en' ? 'Burgers' : 'Burgera'}</a></li>
                        <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/smoothie.png" alt=""/><a className="link-category" href="#smoothie">Smoothie bowls</a></li>
                        <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/orange-juice.png" alt=""/><a className="link-category" href="#fresh">{window.location.pathname === '/en' ? 'Fresh Juice' : 'Lengje te fresket'}</a></li>
                        <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/snack.png" alt=""/><a className="link-category" href="#snacks">{window.location.pathname === '/en' ? 'Snacks' : 'Zemrat'}</a></li>
                        <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/sweet-food.png" alt=""/><a className="link-category" href="#sweets">{window.location.pathname === '/en' ? 'Sweets' : 'Embelsira'}</a></li>
                        <li className="caategory-li" onClick={() => closeCategory()}><img width="50" src="/water-bottle.png" alt=""/><a className="link-category" href="#other">{window.location.pathname === '/en' ? 'Other drinks' : 'Pije te tjera'}</a></li>
                    </ul>
                </nav>
                <hr className="hr"/>
                <div className="div-social">
                            <h1>{window.location.pathname === '/en' ? 'Follow us on' : 'Na ndiqni '}</h1>
                            <div style={{width:'20%',height:'10%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                <SiFacebook  style={{color:'white',fontSize:'30px'}} />
                                <SiInstagram style={{color:'white',fontSize:'30px'}} />
                                <SiTripadvisor style={{color:'white',fontSize:'30px'}} />                                
                            </div>
                </div>
            </div>
        </div>
    )
}
