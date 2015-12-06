/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'chat-users',
  'Integration: ChatUsersComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#chat-users}}
      //     template content
      //   {{/chat-users}}
      // `);

      this.render(hbs`{{chat-users}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
