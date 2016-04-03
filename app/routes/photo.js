import Ember from 'ember';

export default Ember.Route.extend({
  model({ photoId }) {
    return this.modelFor('application').find(photo => photo.id === photoId);
  }
});
