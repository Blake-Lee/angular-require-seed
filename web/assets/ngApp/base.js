define(['angular',  'jquery','uiRouter', 'restangular', './controllers/base', './directives/base', './filters/base', './services/base'], function(ng){
    'use strict';
    return ng.module('ngApp',['ngApp.controllers', 'ui.router', 'restangular', 'ngApp.services', 'ngApp.filters', 'ngApp.directives']);
});