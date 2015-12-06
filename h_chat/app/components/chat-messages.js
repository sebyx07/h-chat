import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['well', 'chat-messages'],

  scrollDownEvent: function(){
    this._scrollDown();
  }.observes('messages.@each'),

  didInsertElement: function(){
    Ember.run.scheduleOnce('afterRender', this, ()=> {
      this._scrollDown();
    });
  },

  _scrollDown: function(){
    const height = this.$().height() * 1000;
    this.$().scrollTop(height);
  }
});
