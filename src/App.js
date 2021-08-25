import React from 'react';

import './App.css';
import  Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import OurInitative from './pages/OurInitative';
import Sections from './pages/Sections';
import Contact from './pages/contact';
import SignUp from './pages/Signup/signup';
import Footer from './components/footer/Footer';
import history from './history'
import Internships from './pages/Internships';
import Developer from './pages/Developer/Developer';
function App() {
  
  return (<>
   
 
      <Navbar />
    <Router   >
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Sections' component={Sections} />
        <Route path='/OurInitative' component={OurInitative} />
        
        <Route path='/Internships' component={Internships}/>
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='./Developer' component={Developer}/>
      </Switch>
    </Router>
    
    
    <Footer/>
    
    </>
  );
}
/*<Router> <Route path='../../components/Developer/Developer' component={Developer}/></Router>*/
export default App;
