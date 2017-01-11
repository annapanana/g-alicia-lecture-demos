(function () {
  angular
    .module("app", ["ui.router", "home.component", "about.component"])
    .config(config);

  config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: "home",
        url: "/",
        component: "home"
      })
      .state({
        name: "about",
        url: "/about",
        component: "about"
      });
  }
})();
