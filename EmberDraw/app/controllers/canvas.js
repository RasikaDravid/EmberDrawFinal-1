import Ember from 'ember';

export default Ember.Controller.extend({
	loadPlugin: function(){
    Ember.$.getScript('assets/js/client.js');
    Ember.$.getScript('assets/js/main.js');
    console.log('Load my client js file');
	}.on('init')
});
