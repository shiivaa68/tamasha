import {FormattedMessage} from 'react-intl'

const translate = (id,value={}) => <FormattedMessage id={id} value={{...values}}/>
export default translate;