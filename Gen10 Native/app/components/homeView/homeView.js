'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    // additional requires
    viewModel = require('./homeView-view-model');

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

// START_CUSTOM_CODE_homeView
// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;