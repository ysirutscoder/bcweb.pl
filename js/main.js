
let tabs = new Vue({
    el: ".content",
    data: {
        sent: false,
        state: 0,
        form: {
            name: '',
            mail: '',
            content: '',
        }
    },
    methods: {
        changeStatement: function (e) {
            this.state = e;
        },
        sendRequest:function () {
            this.sent=!this.sent;
            this.form.name="";
            this.form.mail="";
            this.form.content="";

        }
    }
});

$(document).ready(function () {
    $('.hamburger').click(function () {
        $('main').toggle();
        $(".sidebar-menu").toggle();
        $(".private-text").toggle();
    });
    $('#search1').click(function () {
        $('.modal1').toggle();
    });
    $('#search2').click(function () {
        $('.modal2').toggle();
    });
});


