$(function(){
  var btn = $('#btn');
  var inpbox = $('#inpbox');
  var list = $('#list');

  function refresh(notes){
      inpbox.val("");
      let listdata = "";
      notes.forEach(function(note){
        listdata += "<li>" + note.task + "</li>";
      });
      list.html(listdata);
  }

  btn.click(function(){
    $.post("/notes",{task: inpbox.val(), done: false}, refresh);
  })

  $.get('/notes', refresh);
})


angular.module('patternfly.navigation').controller('vertNavController', ['$scope',
  function ($scope) {
    $scope.navigations = [
            {
              title: "Dashboard",
              iconClass: "fa fa-dashboard",
              uiSref: "dashboard",
              uiSrefOptions: { someKey: 'SomeValue' }
            },
            {
              title: "Dolor",
              iconClass : "fa fa-shield",
              uiSref: "dolor"
            },
            {
              title: "Ipsum",
              iconClass : "fa fa-space-shuttle",
              uiSref: "ipsum"
            },
            {
              title: "Exit Demo"
            }
          ];

  }
]);
