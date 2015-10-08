define(['require', 'angular', 'ngApp/base', 'ngApp/config/base'], function (require, ng) {
    'use strict';

    require(['domReady!'], function(document){
        ng.bootstrap(document, ['ngApp']);
    })
});
