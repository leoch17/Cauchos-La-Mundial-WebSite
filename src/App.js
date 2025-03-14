import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Markv2 from './components/pages/Markv2';
import Aboutus from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import Comercio_zulia from './components/pages/sections/Commerces/comercio-zulia';
import Comercio_yaracuy from './components/pages/sections/Commerces/comercio-yaracuy';
import Comercio_trujillo from './components/pages/sections/Commerces/comercio-trujillo';
import Comercio_tachira from './components/pages/sections/Commerces/comercio-tachira';
import Comercio_sucre from './components/pages/sections/Commerces/comercio-sucre';
import Comercio_portuguesa from './components/pages/sections/Commerces/comercio-portuguesa';
import Comercio_ne from './components/pages/sections/Commerces/comercio-ne';
import Comercio_monagas from './components/pages/sections/Commerces/comercio-monagas';
import Comercio_miranda from './components/pages/sections/Commerces/comercio-miranda';
import Comercio_merida from './components/pages/sections/Commerces/comercio-merida';
import Comercio_lara from './components/pages/sections/Commerces/comercio-lara';
import Comercio_guarico from './components/pages/sections/Commerces/comercio-guarico';
import Comercio_falcon from './components/pages/sections/Commerces/comercio-falcon';
import Comercio_dc from './components/pages/sections/Commerces/comercio-dc';
import Comercio_cojedes from './components/pages/sections/Commerces/comercio-cojedes';
import Comercio_carabobo from './components/pages/sections/Commerces/comercio-carabobo';
import Comercio_bolivar from './components/pages/sections/Commerces/comercio-bolivar';
import Comercio_barinas from './components/pages/sections/Commerces/comercio-barinas';
import Comercio_aragua from './components/pages/sections/Commerces/comercio-aragua';
import Comercio_apure from './components/pages/sections/Commerces/comercio-apure';
import Comercio_anzoategui from './components/pages/sections/Commerces/comercio-anzoategui';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/marks' component={Markv2} />
          <Route path='/information' component={Aboutus} />
          <Route path='/contact' component={Contact} />
          <Route path='/comercio-zulia' component={Comercio_zulia} />
          <Route path='/comercio-yaracuy' component={Comercio_yaracuy} />
          <Route path='/comercio-trujillo' component={Comercio_trujillo} />
          <Route path='/comercio-tachira' component={Comercio_tachira} />
          <Route path='/comercio-sucre' component={Comercio_sucre} />
          <Route path='/comercio-portuguesa' component={Comercio_portuguesa} />
          <Route path='/comercio-ne' component={Comercio_ne} />
          <Route path='/comercio-monagas' component={Comercio_monagas} />
          <Route path='/comercio-miranda' component={Comercio_miranda} />
          <Route path='/comercio-merida' component={Comercio_merida} />
          <Route path='/comercio-lara' component={Comercio_lara} />
          <Route path='/comercio-guarico' component={Comercio_guarico} />
          <Route path='/comercio-falcon' component={Comercio_falcon} />
          <Route path='/comercio-dc' component={Comercio_dc} />
          <Route path='/comercio-cojedes' component={Comercio_cojedes} />
          <Route path='/comercio-carabobo' component={Comercio_carabobo} />
          <Route path='/comercio-bolivar' component={Comercio_bolivar} />
          <Route path='/comercio-barinas' component={Comercio_barinas} />
          <Route path='/comercio-aragua' component={Comercio_aragua} />
          <Route path='/comercio-apure' component={Comercio_apure} />
          <Route path='/comercio-anzoategui' component={Comercio_anzoategui} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
