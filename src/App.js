import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Header from './components/Header';
import Landing from './screens/Landing';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import Footer from './components/Footer';
import Blog from './screens/Blog';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TurmofUse from './screens/TurmofUse';

function App() {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={AboutUs} />
        <Route path='/ContactUs' component={ContactUs} />
        <Route path='/blog' component={Blog} />
        <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
        <Route path='/TurmOfUse' component={TurmofUse} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
