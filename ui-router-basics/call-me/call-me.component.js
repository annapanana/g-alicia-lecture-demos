(function () {
  angular
    .module("callMe.component", ["ui.router"])
    .component("callMe", {
      templateUrl: "/call-me/call-me.template.html",
      controller: controller
    });

  controller.$inject = ["$stateParams"];

  function controller($stateParams) {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
      vm.phoneNumber = $stateParams.phoneNumber;
    }
  }
})();
