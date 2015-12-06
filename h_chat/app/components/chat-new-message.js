import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveMessage: function(){
      this.sendAction('saveMessage', this.get('newMessage'));
      this.set('newMessage', '');
    }
  }
});
