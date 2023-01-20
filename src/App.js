import "./App.css";
import Cart from "./components/cart/Cart";
import { useSelector, useDispatch } from "react-redux";

function App() {
  return (
    <div className="flex__center section__padding">
      <Cart />
    </div>
  );
}

export default App;
