import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/Appstore";
const App=()=>{
  return(
    <Provider store={appStore}>
      <div>
         <Header/>
         <Outlet/>
      </div>
    </Provider>
      
  )
}
export default App;