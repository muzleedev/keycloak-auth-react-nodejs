import { ReactKeycloakProvider } from '@react-keycloak/web'
import { ReactNode } from 'react'

import { keycloak } from 'src/clients/keycloak'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return <ReactKeycloakProvider authClient={keycloak}>{children}</ReactKeycloakProvider>
}
