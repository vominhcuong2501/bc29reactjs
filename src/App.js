import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/BaiTapLayout/Footer";
import Header from "./Components/BaiTapLayout/Header";
import Home from "./Components/BaiTapLayout/Home";
import Navigation from "./Components/BaiTapLayout/Navigation";
import DataBinding from "./Components/DataBinding/DataBinding";
import ClassComponent from "./Components/DemoComponents/ClassComponent";
import FunctionComponent from "./Components/DemoComponents/FunctionComponent";
import HandlingEvent from "./Components/HandlingEvent/HandlingEvent";
import RenderingWithConditions from "./Components/RenderingWithConditions/RenderingWithConditions";
import State from "./Components/State/State";
import Styling from "./Components/Styling/Styling";
import BaiTapXe from "./Components/BaiTapXe/BaiTapXe";
import RenderingWithMap from "./Components/RenderingWithMap/RenderingWithMap";
import ParentProps from "./Components/Props/ParentProps";
import BaiTapProps from "./Components/BaiTapProps/BaiTapProps";
import DemoRedux from "./Components/Redux/DemoRedux/Parent";
import BaiTapDienThoaiRedux from "./Components/Redux/BaiTapDienThoai1/BaiTapDienThoai1";
import BaiTapThuDo from "./Components/Redux/BaiTapThuDo/BaiTapThuDo";

function App() {
  return (
    <div className="App container-fluid">
      {/* Buổi 1 */}
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <Home /> */}
      {/* <DataBinding /> */}
      {/* <HandlingEvent /> */}

      {/* Buổi 2 */}
      {/* <RenderingWithConditions /> */}
      {/* <State /> */}
      {/* <Styling /> */}
      {/* <BaiTapXe /> */}
      {/* <RenderingWithMap /> */}

      {/* Buổi 3 */}
      {/* <ParentProps /> */}
      {/* <BaiTapProps /> */}

      {/* Buổi 4 */}
      {/* <DemoRedux /> */}
      {/* <BaiTapDienThoaiRedux /> */}

      {/* Buổi 5 */}
      <BaiTapThuDo />
    </div>
  );
}

export default App;
