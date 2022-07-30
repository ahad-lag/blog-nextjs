import { Provider , useSelector } from 'react-redux';
import NextNProgress from "nextjs-progressbar";
import { store , persistor } from './../store/index'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css';

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
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}


export default MyApp;
