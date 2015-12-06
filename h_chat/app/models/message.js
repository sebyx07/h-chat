import DS from 'ember-data';

export default DS.Model.extend({
  payload: DS.attr('string'),
  createdAt: DS.attr('moment'),
  user: DS.belongsTo('user')
});
