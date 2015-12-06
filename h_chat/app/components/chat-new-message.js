import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['chat-new-message'],

  actions: {
    saveMessage: function(){
      var newMessage = this.get('newMessage');
      if(this.checkMessageLength(newMessage)){
        this.sendAction('saveMessage', newMessage);
        this.set('newMessage', '');
      }
    }
  },

  disabledNewMessage: function(){
    return !this.checkMessageLength(this.get('newMessage'));
  }.property('newMessage'),

  checkMessageLength: function(message){
    return message && message.length > 0;
  }
});
