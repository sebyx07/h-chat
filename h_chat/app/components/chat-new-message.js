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
  },

  didInsertElement: function(){
    Ember.run.scheduleOnce('afterRender', this, ()=> {
      this.$('._emojione').each(function(){
        this.innerHTML = emojione.shortnameToImage(this.innerHTML);
      });
    });
  }
});
