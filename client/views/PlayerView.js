// PlayerView.js - Defines a backbone view class for the music player.
//  Here when the song ends (triggered), then dequeue, and play the 
// next song
// Call setSong, get access to songs queue, 
var PlayerView = Backbone.View.extend({
  // var songQueue = this.model.get('songQueue');

  // initialize: function(){


  // }

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video

  el: '<audio controls autoplay />',

  events: {
    'ended' : 'ended'
  },

  //event lilsteners can only be attached to child elements of el

  ended: function (song) {
    console.log("I am ended");
    // this.trigger('ended', this);
    // dequeue this song
    debugger;
    this.model.ended();
    this.render();
    // AssertionError: expected { Object (cid, attributes, ...) } to equal { Object (cid, attributes, ...) }

  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){

    this.$el.children().detach();
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }



});
