define(['./module'], function (app) {
    'use strict';
    return app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/index");

        $stateProvider
            .state('index', {
                url: "/index"
            });
    });
});