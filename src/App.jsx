
import './App.css'
import About from './components/About'
import Experties from './components/Experties'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsGrid from './components/myProjects'
import Skills from './components/Skills'
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const loading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  };

  useEffect(() => {
    loading();
  }, []);


  return (
    <div style={{ overflow: "hidden" }}>
      {isLoading ? (
        <div className='centers'>
          <div className="text-decorations">
            <h1 >My name is Muhammad Muaz </h1>
            <h1>and</h1>
            <h1> I'm a FullStack developer.</h1>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <Skills />
          <About />
          <ProjectsGrid />
          <Experties />
          <Footer />
        </>
      )}
    </div>
  );


}

export default App

