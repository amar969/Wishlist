import './App.css';
import {Vegetables} from "./Components/vegetable.jsx"
import { Wishlist } from './Components/wishlist';

function App() {
  return (
    <div className="App">
      <Vegetables />
      {<Wishlist /> }
    </div>
  );
}

export default App;
