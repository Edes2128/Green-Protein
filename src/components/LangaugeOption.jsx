import React from 'react'
import { Link } from 'react-router-dom';
export default function LangaugeOption() {
    return (
        <div className="langauge-choose">
            <div className="language-opa"></div>
            <div className="cotainer-language">
                <h1 style={{ textAlign: 'center', color: 'white' }}>Zgjidh gjuhen / Choose a language</h1>
                <div>
                    <Link onClick={() => {
                        localStorage.setItem('lan', JSON.stringify(true))
                        localStorage.setItem('chosen', JSON.stringify('al'))
                    }} style={{ fontSize: '30px', textDecoration: 'none', color: 'white' }} to="/">Albania</Link>
                    <span style={{ fontSize: '30px', cursor: 'pointer', color: 'white' }}> / </span>
                    <Link onClick={() => {
                        localStorage.setItem('lan',  JSON.stringify(true))
                        localStorage.setItem('chosen', JSON.stringify('en'))
                    }}
                        style={{ fontSize: '30px', textDecoration: 'none', color: 'white' }} to="/en">English</Link>
                </div>
            </div>
        </div>
    )
}
