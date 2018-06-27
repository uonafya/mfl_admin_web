(function () {
    "use strict";

    xdescribe("mflAdminApp scenario tests for facility count of facility types by county report:",
         function() {

        var test_utils = require("../../../common/tests/utils.e2e.js");

        it("should log in and load the dashboard", function() {
            test_utils.loginUser(
                browser,
                browser.params.users.national_admin.username,
                browser.params.users.national_admin.password
            );
        });

        it("should open up facility types by county reports", function() {

            //navigation
            browser.get("/#/reports/facility_county_facility_types");
            browser.waitForAngular(); //navigation to create
            browser.driver.sleep(3000);

            //expectations
            expect(element(by.repeater("county in county_types_facilities"))
                   .isPresent()).toBe(true);
        });

        it("logout user after tests",function () {
            test_utils.logoutUser(browser);
        });
    });
})();
