import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model: function(params){
    return Ember.RSVP.hash({
      username: params.username,
      messages: this.messages(),
      users:    this.users()
    });
  },

  actions: {
    saveMessage: function(){
      const controller = this.get('controller');
      controller.toggleProperty('scrollDown', true);
    }
  },

  users: function(){
    return this.store.findAll('user');
  },

  messages: function(){
    return this.store.peekAll('message');
  }
});
