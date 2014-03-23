/*global $*/
'use strict';

angular.module('angularCalendarApp')
  .directive('calendar', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        calendar: '=calendarObject'
      },
      template: '<div><div class="clndr"></div></div>',
      controller: function($scope, $element, $attrs, $transclude) {
        return $transclude(function(clone, scope) {
          var render;
          $element.append(clone);
          render = function(data) {
            angular.extend(scope, data);
          };
          $scope.calendar = $($element).find('.clndr').clndr({
            render: render
          });
          return $scope.calendar;
        });
      }
    };
  });