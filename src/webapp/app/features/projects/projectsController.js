"use strict";

(function() {

    var ProjectsController =  function() {
        var vm = this;

        vm.barrenMoorImg = "assets/img/portfolio/thumbnails/1.jpg";

        vm.hangmanImg = "assets/img/portfolio/thumbnails/2.jpg";

        vm.apolloCinemasImg = "assets/img/portfolio/thumbnails/3.jpg";

    };

    alexApp.controller('projectsController', [ProjectsController]);
}());