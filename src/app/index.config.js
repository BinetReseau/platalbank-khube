(function() {
    'use strict';

    angular
        .module('platalbankKhube')
        .config(config)
    ;

    /** @ngInject */
    function config($logProvider, DSProvider, DSHttpAdapterProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
        
        angular.extend(DSHttpAdapterProvider.defaults, {
            default: true,
            deserialize: function(resourceConfig, data) {
                return !data ? data :
                       !('data' in data) ? data :
                       !('results' in data.data) ? data.data : data.data.results;
            },
            basePath: 'http://127.0.0.1:8000/api',
            forceTrailingSlash: true
        });
    }

})();
