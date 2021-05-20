import React from 'react'
import {CacheProvider, css, jsx} from '@emotion/react'
import styled from '@emotion/styled'
import createCache from '@emotion/cache'
import Abutton from './Abutton'

const StyleContainer = styled.div`
  color: red;
`

export default () => {
    const cache = createCache({
        container: document.firstChild
    })

    return (
        <CacheProvider value={cache}>
            <StyleContainer>
                <Abutton/>
            </StyleContainer>
        </CacheProvider>
    )
}