import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import keycloak from './keycloak-config.jsx';
import { ReactKeycloakProvider } from '@react-keycloak/web';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <App />
  </ReactKeycloakProvider>
);
