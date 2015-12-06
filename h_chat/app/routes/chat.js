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
    saveMessage: function(_message){
      const controller = this.get('controller');
      const message = {payload: _message};
      controller.toggleProperty('scrollDown', true);
      this.get('chatChannel').push("new_message", message);
    }
  },

  users: function(){
    return this.store.findAll('user');
  },

  messages: function(){
    return this.store.peekAll('message');
  },

  connectSocket: function(){
    this.socket = new Socket("ws://localhost:4000/socket", {
      params: {token: window.userToken}
    });
    const socket = this.get('socket');
    socket.connect();
    this.set('chatChannel', socket.channel("chat"));
    const chatChannel = this.get('chatChannel');

    chatChannel.join()
        .receive("ok", resp => console.log(resp));

    chatChannel.on("new_message", (resp)=>{
      console.log(resp);
      this.store.pushPayload(resp);
    });
  }
});
