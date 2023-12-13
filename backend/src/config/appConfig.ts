export const appConfig = {
    server: {
        port: process.env.PORT || '5000',
    },
    oAuth: {
        issuer: process.env.OAUTH_ISSUER || '',
        jwksUri: `${process.env.OAUTH_ISSUER || ''}/protocol/openid-connect/certs`,
        audience: process.env.OAUTH_AUDIENCE || '',
        tokenSigningAlg: process.env.OAUTH_TOKEN_SIGNING_ALG || '',
    },
}
