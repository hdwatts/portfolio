import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    $(document).attr('title', 'Howard Dean Watts | Software Developer');
  }
});
