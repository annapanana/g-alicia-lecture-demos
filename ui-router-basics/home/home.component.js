(function () {
  angular
    .module("home.component", ["ui.router"])
    .component("home", {
      templateUrl: "/home/home.template.html",
      controller: controller
    });

  controller.$inject = ["$state"];

  function controller($state) {
    var vm = this;

    vm.submitPhoneNumber = submitPhoneNumber;

    function submitPhoneNumber(phoneNumber) {
      console.log(phoneNumber);
      $state.go("callMe", {phoneNumber: phoneNumber});
    }
  }
})();
