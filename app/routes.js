/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import RightPanel from './containers/RightPanelContainer';
import LoginComponent from './components/LoginComponent';
import LandingPageContainer from './containers/LandingPageContainer';
import LessonSessionContainer from './containers/LessonSessionContainer';

export default () => (
  <App>
    <Switch>
      <Route path="/panelView" component={RightPanel} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/editor" component={LessonSessionContainer} />
      <Route path="/" component={LandingPageContainer} />
    </Switch>
  </App>
);
