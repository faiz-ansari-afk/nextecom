// import { useEffect } from 'react'
// import { Provider } from 'react-redux';
// import { store } from '../store/store';

// import { wrapper } from '../store/store';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // useEffect(() => {

  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles)
  //   }

  // }, [])

  return (
    // <Provider store={store}>
      <Component {...pageProps} />
    // </Provider>
  )
}

export default MyApp
// export default wrapper.withRedux(MyApp)
