import React from 'react'
import { useKeycloak } from '@react-keycloak/web'

import { LoginButton } from 'src/components/auth/LoginButton'
import { LogoutButton } from 'src/components/auth/LogoutButton'
import { SignupButton } from 'src/components/auth/SignupButton'

export const AuthNav: React.FC = () => {
    const { keycloak } = useKeycloak()

    return (
        <div className="auth-nav">
            {!keycloak?.authenticated && (
                <div className="nav-buttons">
                    <LoginButton />
                    <SignupButton />
                </div>
            )}
            {keycloak?.authenticated && (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    )
}
