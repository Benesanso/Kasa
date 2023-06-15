import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {createRoot} from 'react-dom/client';
import Layout from './Layout';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Layout />
  </Router>
);

