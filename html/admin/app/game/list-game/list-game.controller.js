(function () {
    'use strict';

    angular
        .module('skdebrug.admin.game')
        .controller('listGameController', listGameController);

    listGameController.$inject = ['GameService'];

    /* @ngInject */
    function listGameController(GameService) {
        var vm = this;
        GameService.all().then(function (result) {
            vm.games = result.data;
        });
    }

})();

