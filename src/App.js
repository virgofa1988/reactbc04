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
// import eventComponent from "./Components/DemoComponent/eventComponent";
import Event from "./Components/DemoComponent/Event";
import CarColorChange from "./Components/DemoComponent/CarColorChange";
import BaiTapVongLap from "./Components/DemoComponent/BaiTapVongLap";
import BaiTapVongLap_1 from "./Components/DemoComponent/BaiTapVongLap_1";
import DemoProps from "./Components/Props/DemoProps";
import BTTruyenFucntion from "./Components/Props/BTTruyenFunction/BTTruyenFucntion";
import Count from "./Components/Props/Increment/Count";
import BTGioHangRedux from "./Components/BTGioHangRedux/BTGioHangRedux";
import BTGlassTrying from "./Components/BaiTapGlasses/BTGlassTrying";
import ChonXeHook from "./Components/Hook/BTChonXeHook/ChonXeHook";

function App() {
  return (
    <div className="App" >
      {/* <BT1Layout /> */}
      {/* <Databinding /> */}
      {/* <BTThucHanhLayout /> */}
      {/* <Event /> */}
      {/* <CarColorChange /> */}
      {/* <BaiTapVongLap /> */}
      {/* <BaiTapVongLap_1 /> */}
      {/* <DemoProps /> */}
      {/* <BTTruyenFucntion /> */}
      {/* <Count /> */}
      {/* <BTGioHangRedux /> */}
      {/* <BTGlassTrying /> */}
      <ChonXeHook />
    </div>
  );
}

export default App;
