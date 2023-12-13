import { useKeycloak } from '@react-keycloak/web'

export const LogoutButton = () => {
    const { keycloak } = useKeycloak()

    return <button onClick={() => keycloak.logout()}>Log Out</button>
}
