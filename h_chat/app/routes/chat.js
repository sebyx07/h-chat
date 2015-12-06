import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.RSVP.hash({
      username: params.username,
      messages: this.messages()
    });
  },

  messages: function(){
    return [
      {
        payload: 'payload1',
        user: {
          username: 'user1'
        }
      },
      {
        payload: 'payload2',
        user: {
          username: 'user2'
        }
      }
    ]
  }
});
