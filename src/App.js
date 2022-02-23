import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './component/Greeting';
import Home from './component/Home';
import NavBar from './component/NavBar';
import store from './redux/ConfigStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/hello"
              element={<Greeting />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
