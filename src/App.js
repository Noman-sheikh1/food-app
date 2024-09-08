import './App.css';
import Header from './components/Header';
import Body from './components/Body';


function App() {
  return (
    <div className=" w-full h-full flex flex-col space-y-4">
       <div>
       <Header />
       </div>
      <Header />
     
       
       
      <div className=' mx-auto ml-16 mr-24'>
      <Body/>
      </div>
      
      
    </div>
  );
}

export default App;
