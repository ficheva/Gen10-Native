'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Home View',
    // additional properties
});

// START_CUSTOM_CODE_homeView
// END_CUSTOM_CODE_homeView
module.exports = ViewModel;