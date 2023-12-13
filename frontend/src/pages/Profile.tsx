import { useKeycloak } from '@react-keycloak/web'

import { PageLayout } from 'src/components/Layout'

export const Profile = () => {
    const { keycloak } = useKeycloak()

    return (
        <PageLayout>
            <h2>Profile</h2>
            <div style={{ textAlign: 'start' }}>
                <pre>{JSON.stringify(keycloak.idTokenParsed, null, 2)}</pre>
            </div>
        </PageLayout>
    )
}
