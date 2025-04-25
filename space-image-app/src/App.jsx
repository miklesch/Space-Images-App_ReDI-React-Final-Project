import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import './App.css'
import SpaceImagesView from './views/SpaceImagesView.jsx';
import FavoriteImages from './components/FavoriteImages/FavoriteImages.jsx';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { FavoriteImagesProvider } from './contexts/FavoriteImagesContext.jsx';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route index element={<SpaceImagesView />} />
         {/*  {<Route path="/results/:id" element={<FavoriteImages />} />} */}
          <Route path="/results/favorites" element={<FavoriteImages />} />
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
      </Router>
    </>
  )
}

export default function WrappedApp() {
  return import.meta.env.MODE === "development" ? (
    <ErrorBoundary>
      <FavoriteImagesProvider>
        <App />
      </FavoriteImagesProvider>
    </ErrorBoundary>
  ) : (
    <FavoriteImagesProvider>
      <App />
    </FavoriteImagesProvider>
  );
}
