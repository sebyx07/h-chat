import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/',
  host: 'localhost:4000'
});
