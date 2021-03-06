var AudioletInput = new Class({
    initialize: function(node, index) {
        this.node = node;
        this.index = index;
        this.connectedFrom = [];
        // Minimum sized buffer, which we can resize from accordingly
        this.buffer = new AudioletBuffer(1, 0);
        // Overflow buffer, for feedback loops
        this.overflow = new AudioletBuffer(1, 0);
    },

    connect: function(output) {
        this.connectedFrom.push(output);
    },

    disconnect: function(output) {
        var numberOfStreams = this.connectedFrom.length;
        for (var i = 0; i < numberOfStreams; i++) {
            if (output == this.connectedFrom[i]) {
                this.connectedFrom.splice(i, 1);
                break;
            }
        }
    },

    isConnected: function() {
        return (this.connectedFrom.length > 0);
    },

    toString: function() {
        return this.node.toString() + 'Input #' + this.index;
    }
});

