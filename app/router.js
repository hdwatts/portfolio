import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects');
  this.route('work');
  this.route('blog');
  this.route('about', {path: '/'});
});

export default Router;
