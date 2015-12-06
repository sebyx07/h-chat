import Ember from 'ember';
import moment from 'moment';

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
        moment: moment(),
        payload: 'payload1',
        user: {
          username: 'user1'
        }
      },
      {
        moment: moment(),
        payload: 'payload2',
        user: {
          username: 'user2'
        }
      }
    ]
  }
});
