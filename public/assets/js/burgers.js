// This will add the burger when the submit button is clicked.
$(".form").on("submit", function (event) {
    event.preventDefault();
    var burgerHolder = {
        burgerIn: $("#burgerText").val()
    }
    $.post("/api/burgers", burgerHolder)
        .then(function () {
            location.reload()
        })
});

// This will move the burger to the "devoured" section when the "Devour" button is clicked
$(".devourBtn").on("click", function () {
    var id = $(this).val()

    var devourObj = {
        devoured: true
    }

    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id,
        data: devourObj
    }).then(function () {
        location.reload()
    })
})



