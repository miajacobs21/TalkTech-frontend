import React from 'react';
import { AppRouter } from '@root/routes';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import { socketService } from '@services/socket/socket.service';
import Toast from '../../components/toast/Toast';
import { useSelector } from 'react-redux';


export const APP_ENVIRONMENT = 'local';

const App = () => {
  const { notifications } = useSelector((state) => state);

  useEffect(() => {
    socketService.setupSocketConnection();
  }, []);

  return (
    <>
      {notifications && notifications.length > 0 && (
        <Toast position="top-right" toastList={notifications} autoDelete={true} />
      )}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
export default App;
