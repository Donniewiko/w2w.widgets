(function() {
    'use strict';

    angular.module('w2w.widgets')
        .directive('infiniteScroll', infiniteScroll);

    function infiniteScroll() {
        return {
            restrict: 'AE',
            scope: {
                addItems: '&',
            },
            link: link
        };

        function link(scope, ele, attrs) {
            ele.bind('scroll', function() {
                // get the actual element
                var element = ele[0];
                if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
                    scope.$apply(scope.addItems());
                }
            });
        };
    };
})();
