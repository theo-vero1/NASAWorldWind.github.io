/**
 * Issues module
 */
define(['ojs/ojcore', 'knockout', 'jquery',
    'ojs/ojknockout', 'ojs/ojmasonrylayout'
], function (oj, ko, $) {
    /**
     * The view model for the issues view template
     */
    function Issues() {
        var self = this;

        // Repositories
        self.worldwindUrl = "https://github.com/NASAWorldWind";
        self.androidSdkUrl = "https://github.com/NASAWorldWind/WorldWindAndroid";
        self.javaSdkUrl = "https://github.com/NASAWorldWind/WorldWindJava";
        self.webSdkUrl = "https://github.com/NASAWorldWind/WebWorldWind";
    }

    return Issues;
});