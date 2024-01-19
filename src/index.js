import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App';
// =============================================>bootstrap and fontawesome >
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
// =================================================================> slider>
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from "react-query/devtools"
let queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>

    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* <ReactQueryDevtools initialIsOpen="false" position='top-right'></ReactQueryDevtools> */}
  </QueryClientProvider>
);


