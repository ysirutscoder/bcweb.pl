let tabs = new Vue({
    el: ".content",
    data: {
        state: 0,
        form:{
            name:'',
            password:'',
            content:'',
        }
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


