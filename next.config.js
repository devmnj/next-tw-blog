/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    GQL_HOST:'https://mockend.com/manoj-ap/mockbackend/graphql',
    NAV_MENU:[{caption:"Home",path:"/"},{caption:"Blog",path:"/post"},{caption:"Category",path:"/category"},{caption:"About",path:"/About"}],
  }
}

module.exports = nextConfig
