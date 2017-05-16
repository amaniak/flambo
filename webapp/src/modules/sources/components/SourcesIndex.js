import React, { Component, PropTypes } from 'react'
import range                           from 'lodash/range'
import styled                          from 'styled-components'

import Helmet                          from '../../../core/components/HelmetIntl'
import { TopBar }                      from '../../../core/components/page'
import { Button }                      from '../../../core/components/buttons'
import { Grid, Cell }                  from '../../../core/components/Grid'
import SourcesIndexItem                from './SourcesIndexItem'
import { Name, Description }           from '../../../core/components/skeleton'


const SourceItemSkeleton = () => (
    <Cell
        style={{
            padding:         24,
            height:          200,
            backgroundColor: 'white',
            boxShadow:       '0 1px 2px rgba(0,0,0,0.07)',
            cursor:          'pointer',
        }}
    >
        <Name/>
        <Description/>
    </Cell>
)

const Container = styled.div`
    background: ${props => props.theme.primaryColor};
`

export default class SourcesIndex extends Component {
    static propTypes = {
        hasBeenFetched:   PropTypes.bool.isRequired,
        fetch:            PropTypes.func.isRequired,
        perPage:          PropTypes.number.isRequired,
        page:             PropTypes.number.isRequired,
        hasNextPage:      PropTypes.bool.isRequired,
        filters:          PropTypes.object.isRequired,
        hasActiveFilters: PropTypes.bool.isRequired,
        sources:          PropTypes.array.isRequired,
        isFetching:       PropTypes.bool.isRequired,
        error:            PropTypes.object,
        match:            PropTypes.shape({
            url: PropTypes.string.isRequired,
        }).isRequired,
        history:          PropTypes.shape({
            push: PropTypes.func.isRequired,
        }).isRequired,
    }

    componentDidMount() {
        this.props.fetch()
    }

    handlePagerUpdate = (page, perPage) => {
        this.props.fetch({ page, perPage })
    }

    render() {
        const {
            isFetching,
            perPage,
            sources,
            match,
            history,
        } = this.props

        return (
            <Container>
                <Helmet title="sources"/>
                <TopBar>
                    <span/>
                    <Button
                        label="create"
                        to={`${match.url}/create`}
                        primary
                        raised
                    />
                </TopBar>
                <Grid
                    style={{
                        background: 'transparent',
                        paddingTop: 96,
                    }}
                >
                    {isFetching && range(perPage).map(i => (
                        <SourceItemSkeleton key={i}/>
                    ))}
                    {!isFetching && sources.map(source => (
                        <SourcesIndexItem
                            key={source.id}
                            url={match.url}
                            history={history}
                            source={source}
                        />
                    ))}
                </Grid>
            </Container>
        )
    }
}
