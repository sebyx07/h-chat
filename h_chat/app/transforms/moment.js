import DS from "ember-data";
import moment from 'npm:moment';
import _ from 'npm:lodash';
export default DS.Transform.extend({
  serialize: function(value) {
    if(this._isUndefined(value)) { return undefined; }
    // Fix ios safari bug
    if(_.isString(value)) {throw 'Unsupported Format';}
    if(!value.utc) { value = this._moment(value); }

    return value.format();
  },

  deserialize: function(value) {
    if(this._isUndefined(value)) { return undefined; }
    return this._moment(value);
  },

  _isUndefined: function(value) {
    return value === undefined || value === null;
  },

  _moment: function(value){
    return moment(value);
  }
});
