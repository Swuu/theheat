angular
  .module('mwl.calendar.docs') //you will need to declare your module with the dependencies ['mwl.calendar', 'ui.bootstrap', 'ngAnimate']
  .controller('KitchenSinkCtrl', function(moment, alert) {

    var vm = this;

    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    vm.events = [
      {
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true,
        data: "SWAG TEST ONE two THREESWAG TEST ONE two THREESWAGTEST ONE two THREESWAG TEST ONE two THREESWAG TEST ONE two THREESWAG TEST ONE two THREESWAG TEST ONE two THREESWAG TEST ONE two THREESWAG TEST ONE two THREE"
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        type: 'info',
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: 'This is a really long event title that occurs on every year',
        type: 'important',
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true
      }
    ];
    console.log("STARTS AT: "moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate());
    console.log("ENDS AT: "moment().startOf('week').add(1, 'week').add(9, 'hours').toDate());
    console.log(" ");
    
    //ADD EVENTS HERE
    $(document).ready(function(){
      $.get("http://swumusic.com/json.html", function(data, status){
        var arr = JSON.parse(data);
        
        arr.map(function (X) {
          console.log(new Date (X["Store Date"]));
          vm.events.push({title: 'WHATDDUP BITCHES', type: 'important', startsAt: new Date (X["Store Date"]), endsAt: new Date (X["Store Date"]), draggable: true, resizable: true});
        });
      });
    });

    //vm.events.push({title: 'WHATDDUP BITCHES', type: 'important', startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(), endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(), draggable: true, resizable: true});
    
    vm.isCellOpen = false;

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

    vm.eventTimesChanged = function(event) {
      alert.show('Dropped or resized', event);
    };

    vm.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

  });
