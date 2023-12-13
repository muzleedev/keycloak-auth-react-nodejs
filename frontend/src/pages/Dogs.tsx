import { useEffect, useState } from 'react'
import { useKeycloak } from '@react-keycloak/web'

import { PageLayout } from 'src/components/Layout'
import { getDogs } from 'src/api/api'
import { LoadingContainer } from 'src/components/LoadingContainer'

export const Dogs = () => {
    const { keycloak } = useKeycloak()
    const [dogs, setDogs] = useState()
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const accessToken = keycloak.token || ''
                const dogs = await getDogs(accessToken)
                setDogs(dogs)
            } catch (e) {
                console.error(e)
            } finally {
                setIsFetching(false)
            }
        }

        fetchDogs()
    }, [keycloak.token])

    return (
        <PageLayout>
            <LoadingContainer isLoading={isFetching}>
                <h2>Dogs</h2>
                <div style={{ textAlign: 'start' }}>
                    <pre>{JSON.stringify(dogs, null, 2)}</pre>
                </div>
            </LoadingContainer>
        </PageLayout>
    )
}
