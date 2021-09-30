import logo from './logo.svg';
import React from 'react';
import './App.css';
import navbar from './components/navbar';
import login from './pages/login';
import main from './pages/main';
import movie_page from './pages/movie_page';

function App() {
  return (
    <div className="App">
      <navbar />
      <Route path="/" component={main} />
      <Route path="/login" component={login} />
      <Route path="movie_page" component={movie_page} /> 
    </div>
  );
}

export default App;
