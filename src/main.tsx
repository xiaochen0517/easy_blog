import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@/components/ui/ThemeProvider.tsx";
import {AppRouter} from "@/routers/Router.tsx";
import {Provider} from "react-redux";
import {store} from "@/stores";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={AppRouter}/>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
