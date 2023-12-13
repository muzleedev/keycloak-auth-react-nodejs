import { useKeycloak } from '@react-keycloak/web'

export const SignupButton = () => {
    const { keycloak } = useKeycloak()

    return <button onClick={() => keycloak.register()}>Sign Up</button>
}
