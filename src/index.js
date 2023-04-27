// import { AuthTabs } from '../auth/auth-tabs/AuthTabs';
// import { ForgotPassword } from '../auth/forgot-password/ForgotPassword';
// import Login from './login/Login';
// import { Register } from './register/Register';

// export { AuthTabs, ForgotPassword, Login, Register }



// import App from '@root/App';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import '@root/index.scss';
// import { Provider } from 'react-redux';
// import { store } from '@redux/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );






import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@root/index.scss';
import { Provider } from 'react-redux';
import { store } from '../redux-toolkit/store';
import 'redux-store-element';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
