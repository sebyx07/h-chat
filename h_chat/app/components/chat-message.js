import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['chat-message'],

  payloadWithEmoji: function(){
    const payload = this.get('message.payload');
    return emojione.shortnameToImage(payload);
  }.property('message.payload')
});
