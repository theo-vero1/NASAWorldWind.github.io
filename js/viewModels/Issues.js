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
        self.androidIssuesUrl = "https://github.com/NASAWorldWind/WorldWindAndroid/issues";
        self.javaIssuesUrl = "https://github.com/NASAWorldWind/WorldWindJava/issues";
        self.webIssuesUrl = "https://github.com/NASAWorldWind/WebWorldWind/issues";
        self.worldwindForum = "https://forum.worldwindcentral.com/";
    }

    return Issues;
});