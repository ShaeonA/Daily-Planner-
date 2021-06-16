$(document).ready(function () {
    var currentDay = $("#currentDay")
    currentDay.text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().hours();
    var timeBlock = $(".row")

    console.log(timeBlock, currentHour)
    timeBlock.each(function () {
        var storeH = parseInt($(this).attr("id"))
        console.log(storeH)

        if (storeH === currentHour) {
            $(this).addClass("present")
        }

        if (storeH < currentHour) {
            $(this).addClass("past")

        }
        if (storeH > currentHour) {
            $(this).addClass("future")
        }
    })
     
    $(".saveBtn").click(function(){
      $(".description").siblings().val();
    });

    //todo: add an event listener for the save button . When the save button is clicked , find the sibling element that has a class of description
    //and then get the value of the EL 





















});







