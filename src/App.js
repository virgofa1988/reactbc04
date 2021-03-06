import logo from "./logo.svg";
import "./App.css";
import DemoFunction from "./Components/DemoComponent/DemoFunction";
import DemoClass from "./Components/DemoComponent/DemoClass";
import CardProduct from "./Components/DemoComponent/CardProduct";
// import BaiTapLayOut1 from "./Components/BaiTapLayout1/BaiTapLayOut1";
import BT1Header from "./Components/BaiTapLayout1/BT1Header";
import BT1Slider from "./Components/BaiTapLayout1/BT1Slider";
import BT1ProductList from "./Components/BaiTapLayout1/BT1ProductList";
import BT1LaptopList from "./Components/BaiTapLayout1/BT1LaptopList";
import BT1Footer from "./Components/BaiTapLayout1/BT1Footer";
import BT1Layout from "./Components/BaiTapLayout1/BT1Layout";
import Databinding from "./DataBinding/Databinding";
import BTThucHanhLayout from "./Components/BaiTapThucHanhLayOut/BTThucHanhLayout";

function App() {
  return (
    <div className="App">
      {/* <BT1Layout /> */}
      {/* <Databinding /> */}
      <BTThucHanhLayout />
    </div>
  );
}

export default App;
