/* jshint expr:true */
import { expect } from 'chai';
import {describe} from 'mocha';
import {
    describeComponent,
    it
} from 'ember-mocha';

describeComponent(
    'chat-user',
    'ChatUser',
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

      describe('userStatusGlyphcon', function(){
        const userStatusGlyphcons = {
          online: 'glyphicon glyphicon-ok',
          offline: 'glyphicon glyphicon-remove'
        };

        it('online', function(){
          const user = {status: 1},
              component = this.subject({user: user});

          expect(component.get('userStatusGlyphcon')).to.eq(userStatusGlyphcons.online);
        });

        it('online', function(){
          const user = {status: 0},
              component = this.subject({user: user});

          expect(component.get('userStatusGlyphcon')).to.eq(userStatusGlyphcons.offline);
        });
      });
    }
);
