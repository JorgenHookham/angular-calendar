/*global $*/
'use strict';

angular.module('angularCalendarApp')
  .directive('clndr', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        clndr: '=clndrObject'
      },
      template: '<div><div class="clndr_container"></div></div>',
      controller: function($scope, $element, $attrs, $transclude) {
        return $transclude(function(clone, scope) {
          var render;
          $element.append(clone);
          render = function(data) {
            angular.extend(scope, data);
          };
          $scope.clndr = $($element).find('.clndr_container').clndr({
            render: render
          });
          return $scope.clndr;
        });
      }
    };
  });