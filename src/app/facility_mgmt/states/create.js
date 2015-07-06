(function (angular) {
    "use strict";

    angular.module("mfl.facility_mgmt.states.create", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state("facilities.facility_create", {
                url: "create/?furthest",
                views : {
                    "main-content@facility_mgmt": {
                        templateUrl: "facility_mgmt/tpls/facility_create.tpl.html",
                        controller: "mfl.facility_mgmt.controllers.facility_create"
                    }
                },
                redirectTo: "facilities.facility_create.basic"
            })

            .state("facilities.facility_create.basic", {
                url: "basic/:facility_id",
                views: {
                    "tab-header@facilities.facility_create": {
                        templateUrl: "facility_mgmt/tpls/facility_create.tab-headers.tpl.html"
                    },
                    "form-view@facilities.facility_create": {
                        templateUrl: "facility_mgmt/tpls/facility_edit.basic.tpl.html",
                        controller: "mfl.facility_mgmt.controllers.facility_edit.basic"
                    }
                }
            })

            .state("facilities.facility_create.contacts", {
                url: ":facility_id/contacts",
                views: {
                    "tab-header@facilities.facility_create": {
                        templateUrl: "facility_mgmt/tpls/facility_create.tab-headers.tpl.html"
                    },
                    "form-view@facilities.facility_create": {
                        templateUrl: "facility_mgmt/tpls/facility_edit.contacts.tpl.html",
                        controller: "mfl.facility_mgmt.controllers.facility_edit.contacts"
                    }
                }
            });
    }]);

})(angular);
