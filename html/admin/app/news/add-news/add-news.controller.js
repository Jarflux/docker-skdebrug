(function () {
    'use strict';

    angular
        .module('skdebrug.admin.news')
        .controller('addNewsController', addNewsController);

    addNewsController.$inject = ['NewsService'];

    /* @ngInject */
    function addNewsController(NewsService) {
        var vm = this;

        vm.$onInit = function () {
            _reset();
        };

        function _reset() {
            vm.news = {
                date: undefined,
                title: undefined,
                content: undefined
            };
        }

        vm.addNews = function () {
            NewsService.add(vm.news).then(function (result) {
                console.log('successfully added', vm.news, result);
                _reset();
            }, function (error) {
                console.log('something went wrong!!', error);
            });
        };

        vm.reset = function () {
            _reset();
        };

    }

})();
