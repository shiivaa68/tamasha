import {I18nProvider} from '../I18n'
import {useContext} from 'react'
import {AppContext} from '../../context'

const ProviderWrapper =({children})=>{

    const {state} =useContext(AppContext)
return(
    <I18nProvider locale={state.locale}>
        {children}
    </I18nProvider>
)
}

export default ProviderWrapper;