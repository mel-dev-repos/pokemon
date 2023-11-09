import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "assets/styles/index.css";
import AppRouting from 'routes/index.routes';
import { PokemonLoading } from 'components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<PokemonLoading />}>
      <AppRouting/>
    </Suspense>
  </React.StrictMode>
);