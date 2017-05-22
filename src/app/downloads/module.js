(function (angular) {
    "use strict";

    angular.module("mfl.downloads", [
        "ui.router",
        "ui.bootstrap",
        "ui.bootstrap.tpls",
        "mfl.downloads.controllers",
        "mfl.downloads.routes",
        "mfl.download.services"
    ]);

})(window.angular);
