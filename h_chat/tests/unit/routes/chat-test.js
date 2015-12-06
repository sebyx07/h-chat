/* jshint expr:true */
import { expect } from 'chai';
import sinon from 'sinon';
import Ember from 'ember';
import {describe} from 'mocha';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'route:chat',
  'ChatRoute',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    it('exists', function() {
      var route = this.subject();
      expect(route).to.be.ok;
    });

    describe('actions', function(){
      describe('saveMessage', function(){
        it('calls the controller', function(){
          const spy = sinon.spy();
          const route = this.subject({
            controller: {
              toggleProperty: spy
            }
          });

          Ember.run(() => route.send('saveMessage'));

          expect(spy.calledOnce).to.be.true;
        });
      });
    });
  }
);
