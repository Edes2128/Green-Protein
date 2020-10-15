import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

export default function CategoryMenu({showCategory,closeCategory}) {
    return (
        <div className={!showCategory ? 'category-menu' : 'category-menu active-category-opa'}>
            <div onClick={() => closeCategory()} className={!showCategory ? 'category-menu-opa' : 'category-menu-opa active-category-opa'}></div>
            <div className={ !showCategory ? 'category-menu-container' : 'category-menu-container active-category'}>
                        <div style={{width:'100%',display:'flex',justifyContent:'flex-start'}}>
                            <CloseIcon style={{fontSize:'40px',cursor:'pointer',color:'white'}} onClick={() => closeCategory()} />
                        </div>
                        <nav>
                            <ul style={{listStyle:'none'}}>
                                <li onClick={() => closeCategory()}><a className="link-category" href="#supat">Supat</a></li>
                                <li onClick={() => closeCategory()}><a className="link-category" href="#salad">Sallatat</a></li>
                                <li onClick={() => closeCategory()}><a className="link-category" href="#wrap">Wraps</a></li>
                                <li onClick={() => closeCategory()}><a className="link-category" href="#burger">Burgera</a></li>
                                <li onClick={() => closeCategory()}><a className="link-category" href="#smoothie">Smoothie bowls</a></li>
                                <li onClick={() => closeCategory()}><a className="link-category" href="#fresh">Lengje te fresket</a></li>
                                <li onClick={() => closeCategory()}><a className="link-category" href="#snacks">Snacks</a></li>
                                <li onClick={() => closeCategory()}><a className="link-category" href="#sweets">Embelsira</a></li>
                                <li onClick={() => closeCategory()}><a className="link-category" href="#other">Pije te tjera</a></li>
                            </ul>
                        </nav>
            </div>
        </div>
    )
}
