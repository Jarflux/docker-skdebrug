(function (angular) {
    'use strict';

    angular
        .module('skdebrug.pasta')
        .service('ReservationService', ReservationService);

    ReservationService.$inject = ['$http', '$q'];

    /* @ngInject */
    function ReservationService($http, $q) {

        function _sendMail(registrationObj) {
            console.log(registrationObj);
            var request = {
                //data: registrationObj,
                //method: 'POST',
               // url: '/data/registration'
            };

            return $http(request);
        }

        return {
            add: _sendMail
        }
    }

})(angular);
