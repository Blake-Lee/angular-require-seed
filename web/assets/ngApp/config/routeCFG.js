define(['./module'], function (app) {
    'use strict';
    return app.config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('api');
    });
});
