/*global $, moment*/
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
      template: '<div><div class="clndr"></div></div>',  // this is an empty, unused element that is passed to clndr as a dupe
      controller: function($scope, $element, $attrs, $transclude) {
        return $transclude(function(clone, scope) {
          $element.append(clone);
          $scope.calendar = $($element).find('.clndr').clndr({
            render: function(data) {
              angular.extend(scope, data);
            },
            events: [
              { date: '2014-02-20', title: 'harvest' },
              { date: '2014-03-01', title: 'payment 2' },
              { date: '2014-03-01', title: 'payment 1' },
              { date: '2014-03-01', title: 'payment 4' },
              { date: '2014-03-01', title: 'payment 3' },
              { date: '2014-03-06', title: 'harvest' },
              { date: '2014-03-20', title: 'harvest' },
              { date: '2014-04-01', title: 'payment 2' },
              { date: '2014-04-01', title: 'payment 4' },
              { date: '2014-04-01', title: 'payment 3' },
              { date: '2014-04-01', title: 'payment 1' },
              { date: '2014-04-03', title: 'harvest' },
              { date: '2014-04-17', title: 'harvest' },
              { date: '2014-05-01', title: 'payment 2' },
              { date: '2014-05-01', title: 'payment 1' },
              { date: '2014-05-01', title: 'payment 3' },
              { date: '2014-05-01', title: 'payment 4' },
              { date: '2014-05-01', title: 'harvest' },
              { date: '2014-05-15', title: 'harvest' },
              { date: '2014-05-29', title: 'harvest' },
              { date: '2014-06-01', title: 'payment 2' },
              { date: '2014-06-01', title: 'payment 3' },
              { date: '2014-06-01', title: 'payment 1' },
              { date: '2014-06-01', title: 'payment 4' },
              { date: '2014-06-12', title: 'harvest' },
              { date: '2014-06-26', title: 'harvest' },
              { date: '2014-07-01', title: 'payment 3' },
              { date: '2014-07-01', title: 'payment 4' },
              { date: '2014-07-01', title: 'payment 2' },
              { date: '2014-07-01', title: 'payment 1' },
              { date: '2014-07-10', title: 'harvest' },
              { date: '2014-07-24', title: 'harvest' },
              { date: '2014-08-01', title: 'payment 3' },
              { date: '2014-08-01', title: 'payment 4' },
              { date: '2014-08-01', title: 'payment 2' },
              { date: '2014-08-01', title: 'payment 1' },
              { date: '2014-08-07', title: 'harvest' },
              { date: '2014-08-21', title: 'harvest' },
              { date: '2014-09-01', title: 'payment 1' },
              { date: '2014-09-01', title: 'payment 2' },
              { date: '2014-09-01', title: 'payment 3' },
              { date: '2014-09-01', title: 'payment 4' },
              { date: '2014-09-04', title: 'harvest' },
              { date: '2014-09-18', title: 'harvest' },
              { date: '2014-10-01', title: 'payment 2' },
              { date: '2014-10-01', title: 'payment 4' },
              { date: '2014-10-01', title: 'payment 1' },
              { date: '2014-10-01', title: 'payment 3' },
              { date: '2014-10-02', title: 'harvest' },
              { date: '2014-10-16', title: 'harvest' },
              { date: '2014-10-30', title: 'harvest' },
              { date: '2014-11-01', title: 'payment 1' },
              { date: '2014-11-01', title: 'payment 2' },
              { date: '2014-11-01', title: 'payment 3' },
              { date: '2014-11-01', title: 'payment 4' },
              { date: '2014-11-13', title: 'harvest' },
              { date: '2014-11-27', title: 'harvest' },
              { date: '2014-12-01', title: 'payment 1' },
              { date: '2014-12-01', title: 'payment 4' },
              { date: '2014-12-01', title: 'payment 3' },
              { date: '2014-12-01', title: 'payment 2' },
              { date: '2014-12-11', title: 'harvest' },
              { date: '2014-12-25', title: 'harvest' }
            ]
          });
          $scope.calendar.now = function () {
            this.setMonth(moment().month());
            this.setYear(moment().year());
          };
          return $scope.calendar;
        });
      }
    };
  });