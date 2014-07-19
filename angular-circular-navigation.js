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
        template: '<button ng-click="toggleMenu()" class="cn-button" id="cn-button">Menu</button><div class="cn-wrapper" ng-class="{\'opened-nav\': options.isOpen}" id="cn-wrapper"><ul><li><a href="#"><span>About</span></a></li><li><a href="#"><span>Tutorials</span></a></li><li><a href="#"><span>Articles</span></a></li><li><a href="#"><span>Snippets</span></a></li><li><a href="#"><span>Plugins</span></a></li><li><a href="#"><span>Contact</span></a></li><li><a href="#"><span>Follow</span></a></li></ul></div>',
        controller: ['$scope', '$element', '$attrs',
          function ($scope, $element, $attrs) {

            $scope.toggleMenu = function () {
              $scope.options.isOpen = !$scope.options.isOpen;
            };

          }
        ]
      };
    });