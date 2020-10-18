import React from 'react'
import { Link } from 'react-router-dom';
export default function LangaugeOption() {
    return (
        <div className="langauge-choose">
            <div className="language-opa"></div>
            <div className="cotainer-language">
                <img src="/black-logo.png" alt=""/>
                <div className="choose-language-title">
                <h1 className="h1-choose-language"> <span> Zgjidh gjuhen /</span> <span> Choose a language</span></h1>
                </div>
                <div>
                <img  style={{cursor:'pointer'}} onClick={() => {
                        localStorage.setItem('lan', JSON.stringify(true))
                        localStorage.setItem('chosen', JSON.stringify('al'))
                        window.location.reload();
                    }} width="80" src="/al.png" alt=""/> 
                  <img  style={{cursor:'pointer'}} onClick={() => {
                            localStorage.setItem('lan',  JSON.stringify(true))
                            localStorage.setItem('chosen', JSON.stringify('en'))
                            window.location.reload();

                        }} width="80" src="/en.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
