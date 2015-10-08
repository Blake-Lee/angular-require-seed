define(['./module'], function (directives) {
    'use strict';
    directives.directive('myCustomer', function() {
        return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };
    });
});