
export default function auth(Component){
    return (pageProps) => {
        if (pageProps.checkAuth){
            <Component {...pageProps} />
        }
    }
}