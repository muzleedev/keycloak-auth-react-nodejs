import { Navigate, Route, Routes } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'

import { ProtectedRoutes } from 'src/auth/ProtectedRoutes'
import { routes } from 'src/routes/routes'
import { Loading } from 'src/components/Loading'
import { Home } from 'src/pages/Home'
import { Profile } from 'src/pages/Profile'
import { UserInfo } from 'src/pages/UserInfo'
import { Dogs } from 'src/pages/Dogs'

export const AppRoutes = () => {
    const { initialized } = useKeycloak()

    if (!initialized) return <Loading />

    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />

            <Route path="" element={<ProtectedRoutes />}>
                <Route path={routes.profile} element={<Profile />} />
                <Route path={routes.userInfo} element={<UserInfo />} />
                <Route path={routes.dogs} element={<Dogs />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
