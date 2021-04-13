import {Fragment}  from 'react'; 
import {IntlProvider} from 'react-intl'
import {LOCALES} from './constant'
import messages from '../I18n/messages'

const Provider = ({children,locale=LOCALES.ENGLISH})=>(
    <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={messages[locale]}>
        {children}
    </IntlProvider>
)

export default Provider;