import { useKeycloak } from '@react-keycloak/web'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Loading } from 'src/components/Loading'

export const ProtectedRoutes = () => {
    const { initialized, keycloak } = useKeycloak()

    useEffect(() => {
        if (!initialized) {
            return
        }

        if (!keycloak?.authenticated) {
            keycloak.login()
        }
    }, [initialized, keycloak])

    if (!initialized || !keycloak?.authenticated) {
        return <Loading />
    }

    return <Outlet />
}
