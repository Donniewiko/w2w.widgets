(function() {
    'use strict';

    angular.module('w2w.widgets', [])
        .directive('rowSelect', function() {
            return {
                restrict: 'EA',
                scope: {
                    selectedIndices: '=selectedIndices'
                },
                link: function(scope, element, attrs) {

                    scope.selectedIndices = scope.selectedIndices || [];
                    
                    element.bind('click', function(e) {
                        e.preventDefault();
                        var index = scope.$parent.$index;
                        
                        // Normal click
                        if (!e.shiftKey && !e.ctrlKey) {
                            scope.$apply(singleClick(index));
                        }

                        // shift click
                        if (e.shiftKey && !e.ctrlKey) {
                            scope.$apply(shiftClick(index));
                        }

                        // control click
                        if (!e.shiftKey && e.ctrlKey) {
                            scope.$apply(controlClick(index));
                        }

                        // control shift click
                        if (e.shiftKey && e.ctrlKey) {
                            scope.$apply(controlShiftClick(index));
                        }
                    });

                    function singleClick(index) {
                        if (scope.selectedIndices.length == 1) {
                            if (scope.selectedIndices[0] != index) {
                                scope.selectedIndices[0] = index;
                            }
                            // if the click must be a toggle, uncomment this else
                            /*
                              else {
                               $scope.selectedQueueItems = [];
                             }
                             /**/
                        } else {
                            scope.selectedIndices = [];
                            scope.selectedIndices = [index];
                        }
                    };

                    function shiftClick(index) {
                        if (scope.selectedIndices.length != 0) {
                            var startID = scope.selectedIndices[0];
                            var endID = index;

                            scope.selectedIndices = [];
                            if (startID > endID) {
                                for (var x = startID; x >= endID; x--) {
                                    scope.selectedIndices.push(x);
                                }
                            } else {
                                for (var y = startID; y <= endID; y++) {
                                    scope.selectedIndices.push(y);
                                }
                            }

                        }
                    };

                    function controlClick(index) {
                        var idx = scope.selectedIndices.indexOf(index);
                        if (idx == -1) {
                            scope.selectedIndices.push(index);
                        } else {
                            scope.selectedIndices.splice(idx, 1);
                        }
                    };

                    function controlShiftClick(index) {
                        // need a copy of the array to reverse it, so i can get the last item. Array.reverse() reverses the array obviously, and i dont want that.
                        var _tempList = scope.selectedIndices;
                        var previousClick = _tempList.reverse()[0];
                        if (index > previousClick) {
                            // clicked item is below the last: add all items in between.
                            for (var i = previousClick; i <= index; i++) {
                                if (scope.selectedIndices.indexOf(i) === -1) {
                                    scope.selectedIndices.push(i);
                                }
                            }
                        } else {
                            for (var j = index; j <= previousClick; j++) {
                                if (scope.selectedIndices.indexOf(j) === -1) {
                                    scope.selectedIndices.push(j);
                                }
                            }
                        }
                    };
                }
            };
        });
})();