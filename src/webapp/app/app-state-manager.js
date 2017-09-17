"use strict";

(function () {

    alexApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/features/home/homepage.html"
        }).state("about", {
            url: "/about",
            templateUrl: "app/features/about/about.html"
        }).state("contact", {
            url: "/contact",
            templateUrl: "app/features/contact/contact.html"
        }).state("hangman", {
            url: "/myprojects/hangman",
            templateUrl: "app/features/hangman/hangman.html"
        }).state("hobbies", {
            url: "/myhobbies",
            templateUrl: "app/features/hobbies/hobbies.html"
        }).state("projects", {
            url: "/myprojects",
            templateUrl: "app/features/projects/projects.html"
        })
    });
}());