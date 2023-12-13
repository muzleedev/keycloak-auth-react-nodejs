import { useKeycloak } from '@react-keycloak/web'

export const LoginButton = () => {
    const { keycloak } = useKeycloak()

    return <button onClick={() => keycloak.login()}>Log In</button>
}
