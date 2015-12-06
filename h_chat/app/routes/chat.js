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

  users: function(){
    return [
      {
        status: 1,
        username: 'sebi'
      },
      {
        status: 0,
        username: 'bianca'
      }
    ]
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
