let tabs = new Vue({
    el: ".content",
    data: {
        state: 0,
    },
    methods: {
        changeStatement: function (e) {
            this.state = e;
        }
    }
});

$(document).ready(function () {
    $('.hamburger').click(function () {
        $('main').toggle();
        $(".sidebar-menu").toggle();
    });
});


