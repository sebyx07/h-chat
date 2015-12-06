import Ember from 'ember';
import moment from 'moment';
import { Socket } from '../lib/phoenix';

export default Ember.Route.extend({
  model: function(params){
    const username = params.username;
    this.set('username', username);
    return Ember.RSVP.hash({
      username: username,
      messages: this.messages(),
      users:    this.users()
    });
  },

  afterModel: function(){
    this.connectSocket();
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
  },

  connectSocket: function(){
    this.socket = new Socket("/socket", {
      logger: ((kind, msg, data) => { console.log(`${kind}: ${msg}`, data) })
    });
    const socket = this.get('socket');
    socket.connect({user_name: this.get('username')});
  }
});
