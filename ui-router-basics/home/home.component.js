(function () {
  angular
    .module("home.component", [])
    .component("home", {
      templateUrl: "/home/home.template.html",
      controller: controller
    });

  function controller() {
    var vm = this;

    vm.submitPhoneNumber = submitPhoneNumber;

    function submitPhoneNumber(phoneNumber) {
      console.log(phoneNumber);
    }
  }
})();
