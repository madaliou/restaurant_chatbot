import React from "react";
import { Typography, Icon } from 'antd';
import Chatbot from './Chatbot/Chatbot';
import Food from './Food/Food';
import Room from './Room/Room';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { Title } = Typography;


function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        
      <Link to="/"><Title level={2} >CHAT BOT APP&nbsp;<Icon type="robot" /></Title></Link>
        <Link to="/foods">Foods</Link>&nbsp;{/* <Icon type="robot" /> */}
        <Link to="/rooms">Rooms</Link>&nbsp;{/* <Icon type="robot" /> */}
      </div>

     
      <Switch>
          <Route path="/foods">
            <Food />
          </Route>
          <Route path="/rooms">
            <Room />
          </Route>
          <Route path="/">
         
          <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Chatbot />
        </div>

      
          </Route>
        </Switch>
       
    </div>
  )
}

export default App
