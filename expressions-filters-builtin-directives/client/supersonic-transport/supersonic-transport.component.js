(function yay() {
  angular.module("app", [])
    .component("supersonicTransport", {
      controller: SupersonicTransportController,
      controllerAs: "$ctrl",
      templateUrl: "supersonic-transport/supersonic-transport.template.html"
    });

  function SupersonicTransportController() {
    var vm = this;

    vm.aircraft = [
      { name: "Aerion AS2", speedMPH: 1186, url: "https://en.wikipedia.org/wiki/Aerion_SBJ", testFlightYear: 2019 },
      { name: "Concorde", speedMPH: 1354, url: "https://en.wikipedia.org/wiki/Concorde", testFlightYear: 1969 },
      { name: "Boom XB-1", speedMPH: 1451, url: "http://boomsupersonic.com/", testFlightYear: 2017 },
      { name: "Tyполев Ту-144 (Tupolev Tu-144)", speedMPH: 1200, url: "https://en.wikipedia.org/wiki/Tupolev_Tu-144", testFlightYear: 1968 }
    ];
  }
})();
