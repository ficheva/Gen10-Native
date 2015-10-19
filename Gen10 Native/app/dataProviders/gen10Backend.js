var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    url: '//platform.telerik.com/bs-api/v1/',

    apiKey: 'MuVqZsBp0SklJXJQ',
    scheme: 'https'
});

// START_CUSTOM_CODE_gen10Backend
// END_CUSTOM_CODE_gen10Backend
module.exports = provider;