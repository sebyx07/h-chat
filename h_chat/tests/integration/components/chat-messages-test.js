/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'chat-messages',
  'Integration: ChatMessagesComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#chat-messages}}
      //     template content
      //   {{/chat-messages}}
      // `);

      this.render(hbs`{{chat-messages}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
