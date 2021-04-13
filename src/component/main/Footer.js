import React from 'react' 
import {LOCALES} from '../I18n/constant'
import {useContext,useCallback} from 'react'
import {AppContext} from '../../context'


const Footer = ()=>{

    const {state,dispatch} =useContext(AppContext)

 const setLanguage = useCallback((locale)=>{

    dispatch ({
        type:'setLocale',
        locale
    })
 },[])



    return (
        <div>
            <ul>
                <li>
                    <button disabled={state.locale === LOCALES.ENGLISH} onClick={()=>setLanguage(LOCALES.ENGLISH)}>English</button>
                </li>
                <li>
                    <button  disabled={state.locale === LOCALES.GERMAN} onClick={()=>setLanguage(LOCALES.GERMAN)}>German</button>
                </li>
                <li>
                    <button disabled={state.locale === LOCALES.PERSION} onClick={()=>setLanguage(LOCALES.PERSION)}>
                        Persion
                    </button>
                </li>
            </ul>
        </div>

    )
}

export default Footer; 