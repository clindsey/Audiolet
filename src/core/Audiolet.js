var Audiolet = new Class({
    initialize: function(sampleRate, numberOfChannels, bufferSize) {
        this.output = new AudioletDestination(this, sampleRate,
                                              numberOfChannels, bufferSize);
    }
});

