import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import PreviewContainer from './components/PreviewContainer';
import EditList from './components/EditList';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className=''>
          <Switch>
            <Route exact path='/' component={EditList} />
            <Route exact path='/preview' component={PreviewContainer} />
            <Route render={function renderNotFound() {
              return (
                <p>Not found</p>
              );
            }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
