import React                from 'react'
import { FormattedMessage } from 'react-intl'

import Helmet               from '../../../core/components/HelmetIntl'
import {
    Header,
    Title,
    Bar,
    Content,
} from '../../../core/components/info-page'


const About = () => (
    <div>
        <Helmet title="about"/>
        <Header>
            <span/>
            <Title>
                <FormattedMessage id="about"/>
            </Title>
        </Header>
        <Bar>
        </Bar>
        <Content>
            <div>
                <p>
                    <a href="https://github.com/plouc/flambo" target="_blank">source code</a>
                </p>
                <p>
                    <a href="https://github.com/plouc/flambo/issues" target="_blank">issues</a>
                </p>
            </div>
            <FormattedMessage id="about"/>
        </Content>
    </div>
)

export default About
