import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './i18n.ts';
import './assets/styles/index.css';
import App from './screens/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
