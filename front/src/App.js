import Heading from './Heading';
import React,{ useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main';

function App() {
  const [title, setTitle] = useState('Home');

  return (
    <div className="App">
    
        <BrowserRouter> 
        <header className="App-header">
          <Heading title={title} setTitle={setTitle}/>
        </header>
        <Routes> <Route path="/" element={<Main />}></Route>
         <Route path="/product/*" element={<Heading />}></Route> {
        /* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */
        } <Route path="*" element={<Heading />}></Route> 
        </Routes> 
        </BrowserRouter>


    </div>
  );
}

export default App;
