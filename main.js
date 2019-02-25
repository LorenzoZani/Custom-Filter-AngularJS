var app = angular.module("myApp", []);

app.controller("MainCtrl", [
  "$scope",
  function($scope) {
    $scope.search = "";

    $scope.options = [
      {
        value: "name",
        key: "Name"
      },
      {
        value: "lastName",
        key: "Last Name"
      },
      {
        value: "role",
        key: "Role"
      }
    ];
    $scope.filter = $scope.options[0];
    this.filter = $scope.options[0];
    $scope.getFilter = function() {
      var filter = {};

      filter[$scope.filter.value] = $scope.query;

      return filter;
    };

    $scope.people = [
      {
        name: "Lorenzo",
        lastName: "Zani",
        role: "FrontEnd Developer"
      },
      {
        name: "Alice",
        lastName: "Cecchetti",
        role: "FrontEnd Developer"
      },
      {
        name: "Alessandro",
        lastName: "Oliva",
        role: "BackEnd Developer"
      },
      {
        name: "Mattia",
        lastName: "Cutrupi",
        role: "ServiceNow"
      },
      {
        name: "Mario",
        lastName: "Rossi",
        role: " HelpDesk"
      }
    ];
  }
]);

app.component("card", {
  replace: "AECM",
  templateUrl: "card.html",
  bindings: {
    data: "=",
    query: "=",
    options: "=",
    filter: "=",
    getFilter: "&"
  },
  controller: function() {}
});

app.component("filter", {
  replace: "AECM",
  templateUrl: "filter.html",
  bindings: {
    data: "=",
    query: "=",
    options: "=",
    filter: "=",
    getFilter: "&"
  },
  controller: function($scope) {
    var self = this;
  }
});
