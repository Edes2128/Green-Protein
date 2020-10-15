import React, { Fragment } from 'react'
import {IntlProvider} from 'react-intl'
import {LOCALES} from './locales';
import messages from './messages';

console.log(messages)

export default function TranslateProvider({children,locale = LOCALES.ALBANIA}) {
    return (
        <IntlProvider locale={locale} textComponent={Fragment} messages={messages[locale]}>
            {children}
        </IntlProvider>
    )
}
