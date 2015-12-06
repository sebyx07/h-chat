/* jshint expr:true */
import { expect } from 'chai';
import { describe } from 'mocha';
import Ember  from 'ember';
import sinon from 'sinon';
import {
  describeComponent,
  it
} from 'ember-mocha';

describeComponent(
  'chat-new-message',
  'ChatNewMessageComponent',
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

    describe('actions', function(){
      describe('saveMessage', function(){
        it('calls saveMessage', function(){
          const sendActionSpy = sinon.spy(),
              message = 'message',
              saveMessage = 'saveMessage',
              component = this.subject({
                newMessage: message,
                sendAction: sendActionSpy,
                saveMessage:saveMessage
              });

          Ember.run(()=> {component.send('saveMessage')});
          expect(sendActionSpy.calledWith(saveMessage, message)).to.be.true;
        });
      });
    });
  }
);
