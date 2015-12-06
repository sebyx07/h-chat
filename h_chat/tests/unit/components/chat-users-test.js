/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';

describeComponent(
  'chat-users',
  'ChatUsersComponent',
  {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  },
  function() {
    it('renders', function() {
      // creates the component instance
      var component = this.subject();
      // renders the component on the page
      this.render();
      expect(component).to.be.ok;
      expect(this.$()).to.have.length(1);
    });
  }
);
