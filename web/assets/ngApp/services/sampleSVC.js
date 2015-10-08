define(['./module'], function (services) {
    'use strict';
    services.factory('Sample', ['restangular', function (Restangular) {
        return Restangular.all('sample');

    }]);
});