import { Navigate, Route, Routes } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'

import { ProtectedRoute } from 'src/auth/ProtectedRoute'
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

            <Route path={routes.userInfo} element={<ProtectedRoute />}>
                <Route path="" element={<UserInfo />} />
            </Route>
            <Route path={routes.profile} element={<ProtectedRoute />}>
                <Route path="" element={<Profile />} />
            </Route>
            <Route path={routes.dogs} element={<ProtectedRoute />}>
                <Route path="" element={<Dogs />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
