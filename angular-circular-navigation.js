'use strict';

angular.module('angularCircularNavigation', [])
  .directive('circular',

    function ($compile) {

      return {
        restrict: 'EA',
        scope: {
          options: '='
        },
        // templateUrl: 'angular-circular-navigation.html',
        template: '<button ng-click="toggleMenu()" class="cn-button" ng-class="options.cssClass">{{options.content}}</button>' + 
                  '<div class="cn-wrapper items-{{options.items.length}}" ng-class="{\'opened-nav\': options.isOpen}"><ul>' +
                    '<li ng-repeat="item in options.items">' +
                      '<a ng-click="perform(item)" ng-class="{\'is-active\': item.isActive}" class="{{item.cssClass}}">' +
                        '<span>{{item.content}}</span>' +
                      '</a></li></ul></div>',
        controller: ['$scope', '$element', '$attrs',
          function ($scope, $element, $attrs) {

            $scope.toggleMenu = function () {
              $scope.options.isOpen = !$scope.options.isOpen;
            };

            $scope.perform = function (item) {
              if (typeof item.onclick === 'function') {
                item.onclick();
              }

              item.isActive = !item.isActive;

              if ($scope.options.toggleOnClick) {
                $scope.toggleMenu();
              }
            };

          }
        ]
      };
    });