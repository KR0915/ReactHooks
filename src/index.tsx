import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/UseState';
import Counter2 from './components/UseReducer';
import { Parent2 } from './components/UseCallbackUseMemo';
import { Parent3 } from './components/UseCallback';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { Parent4 } from './components/UseContext';
import { ImageUploader } from './components/useRef';
//import App from './App';
//import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    {/*AppからHelloに書き換える*/}
    <Hello/>
    <Name />
    <Message />
    <Parent />
    <Page />
    <Counter />
    <Counter2 />
    <Parent2 />
    <Parent3 />
    <UseMemoSample />
    <Clock />
    <Parent4 />
    <ImageUploader />
  </React.StrictMode>,
  document.getElementById(`root`)
)
