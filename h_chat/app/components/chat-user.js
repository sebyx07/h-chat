import Ember from 'ember';

const userStatusGlyphcons = {
  online: 'glyphicon glyphicon-ok',
  offline: 'glyphicon glyphicon-remove'
};

export default Ember.Component.extend({
  classNames: ['chat-user'],

  userStatusGlyphcon: function() {
    const status = this.get('user.status');
    if (status === 1) {
      return userStatusGlyphcons.online;
    }
    if (status === 0) {
      return userStatusGlyphcons.offline
    }
  }
  .property('user.status')
});
