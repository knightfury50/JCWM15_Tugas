import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Navigation from './components/navigation'

import Home from './pages/home'
import Page2 from './pages/page2'
import Slide from './pages/slide'
import To_do_list from './pages/to_do_list'
import NewsId from './pages/newsid'

import './style.css'
import './to_do_list_style.css'

class App extends React.Component {

  render() {
    return (
      <div >
        <Navigation/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/slide' component={Slide}/>
          <Route path='/page2' component={Page2}/>
          <Route path='/to_do_list' component={To_do_list}/>
          <Route path='/newsid' component={NewsId}/>
        </Switch>
      </div>
    )
  }
}
export default App