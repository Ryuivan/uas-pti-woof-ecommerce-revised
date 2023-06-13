import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

const root = ReactDOM.createRoot(document.getElementById('root'));
Kommunicate.init("5a9c74368ce94f9d8fc8370f3f2c09fe", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </React.StrictMode>
);
