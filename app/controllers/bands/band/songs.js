import Ember from 'ember';

export default Ember.Controller.extend({ 
	songCreationStarted: false,

	noSongs: Ember.computed('model.songs.length', function() {
		return this.get('model.songs.length') === 0;
	}),
	
	title: '',

	isAddSongDisabled: Ember.computed('title', function() {
		return Ember.isEmpty(this.get('title'));
	}),

	canCreateSong: Ember.computed('songCreationStarted',
		'model.songs.length', function() {
			return this.get('songCreationStarted') ||
			this.get('model.songs.length');
	}),

	actions: {
		enableSongCreation: function() {
			this.set('songCreationStarted', true);
		},
		updateRating: function(params) { 
			var song = params.item,
          		rating = params.rating;

          	if (song.get('rating') === rating) {
          		rating = 0;
          	}
          	song.set('rating', rating);
          	song.save();
    	}
	}
});