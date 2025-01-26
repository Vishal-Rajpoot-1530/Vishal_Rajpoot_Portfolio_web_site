import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <div className="app">
        <Outlet />
      </div>
        {/* <Footer></Footer> */}
    </>
  );
}

export default App;
