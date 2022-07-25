import { Provider , useSelector } from 'react-redux';
import NextNProgress from "nextjs-progressbar";
import { store } from './../store/index'
import '../styles/globals.css'
import auth from '../hoc/auth';

function checkAuth() {
  return useSelector(state => state.auth.is_auth)
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#818cf8"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Provider store={store}>
          <Component checkAuth={checkAuth} {...pageProps} />
      </Provider>
    </>
  );
}


export default MyApp;
