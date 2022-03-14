import 'bootstrap/dist/css/bootstrap.min.css'
import AtomizeSection from './components/atomize_section/AtomizeSection';
import Header from './components/Header'
import mona from './mona_atomized.jpg'

function App() {
  return (
    <div className="container">
      <Header />
      <AtomizeSection/>
      <h1 className="text-center display-3">What is this?</h1>
      <p className="lead mt-3">Image.Atomize lets you create modified images like the one below that are composed of smaller versions of itself. Simply choose an image file, set its dimensions, and click the "Atomize!" button. Setting a higher dimension will create the modified image with more "cells" which makes the modified image look more like the original.</p>
      <img className="mt-3 mx-auto d-block w-100" src={mona} style={{maxWidth:"800px"}}/>
    </div>
    
  );
}

export default App;
