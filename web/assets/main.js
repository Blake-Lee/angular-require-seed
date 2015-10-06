requirejs.config({
    paths: {
        jquery: 'jquery/dist/jquery',
        angular: 'angular/angular',
        uiRouter: 'angular-ui-router/release/angular-ui-router',
        domReady: 'requirejs-domready/domReady',
        restangular: 'restangular/dist/restangular',
        underscore: 'underscore/underscore'

    },
    shim: {
        angular: {
            exports: 'angular'
        },
        uiRouter: ['angular']
        ,
        restangular: ['angular', 'underscore']

    },

    deps: ['./start']
});


