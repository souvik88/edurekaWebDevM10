// bootstrap tour feature
var tour = new Tour();

tour.addSteps (
    [
        {
            element: "#col-1",
            placement: "bottom",
            title: "Online Live Training",
            content: "Effective online virtual training best suited for busy professionals like you"

        },
        {
            element: "#col-2",
            placement: "bottom",
            title: "Flexible Timing",
            content: "Freedom to reschedule your batch at your own convenience"
        },
        {
            element: "#col-3",
            placement: "bottom",
            title: "24x7 Helpline Available",
            content: "Our support team ninjas are just a call away 24 hours a day, 7 days a week"
        },
        {
            orphan: true,
            title: "Thank you",
            backdrop: true,
            placement: "top",
            content: "Thank you for visiting Edureka"

        }
    ]
);

$(document).ready(function() {
    $('#start-tour-btn').on('click', function() {
        tour.init();
        tour.start();
        tour.restart();
    });

    
})
