import { useEffect, useRef } from 'react';
import p5 from 'p5';
import { Sketch } from './Sketch';
import './App.css';

function App() {
  const sketchRef = useRef(null);

  useEffect(() => {
    const p5Instance = new p5(Sketch, sketchRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <div className='page'>
      <section>
        <h1 className='header'>p5.js Get Started Tutorial</h1>
      </section>
      <section className='content' ref={sketchRef}></section>
      <section className='footer'>
        <p>Example Footer Text</p>
      </section>
    </div>
  );
}

export default App;
