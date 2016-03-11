(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.sign = function(x) {
        switch(Math.sign(x))
        {case 1:
            return "+";
            break;
            case -1:
            return "-";
            break;
            case 0:
            return 0;
            break;
            case -0:
            return 0;
            break;
            case NaN:
            return NaN;
            break;
            default:
            return "NaN";
        }
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        ['r', "%n 's sign", "sign", -3],
        ]
    };

    // Register the extension
    ScratchExtensions.register('sign', descriptor, ext);
})({});