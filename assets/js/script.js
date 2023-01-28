let timeElement = $("#time")
let timeSpan = $("#timeNow")
let projectNameInput = $("#projectName")
let typeOfProjectInput = $("#projectType")
let hourlyRateInput = $("#hourlyWage")
let dueDateInput = $("#dueDate")
let tableRow = $("<tr>")
let tableData = $("<td>")
let addProjectBtn = $(".addProjectBtn")


let timeInterval;

// get time function
let startTime = function(){
    date = moment().format("MMM Do YYYY")
    timeInterval = setInterval(function(){
        time = moment().unix()
        newTime = moment(time*1000).format("HH:mm:ss")
        timeSpan.text(`${date} at ${newTime} `)
    },1000)

}

let addProject = function (event){
    event.preventDefault()
    var projectName = projectNameInput.val()
    var projectType =typeOfProjectInput.val()
    var rate = hourlyRateInput.val()
    var dueDate = dueDateInput.val()
    var currentDate = moment();
    var dayDue = moment(dueDate, "YYYY-MM-DD");
    if (dayDue.isAfter(currentDate)) {
    // Calculate the difference between the due date and the current date in days
    var due = dayDue.diff(currentDate, 'days');
} else {
    alert("The due date has already passed.");
    return;
}
    var tableRow = $("<tr>")

    // Create table cells for each input value
    var nameCell = $("<td>").text(projectName)
    var typeCell = $("<td>").text(projectType)
    var rateCell = $("<td>").text(rate)
    var dueDateCell = $("<td>").text(dueDate)
    var dayUntillDueCell = $("<td>").text(`${due} days`)


    

    // Append the cells to the new row
    tableRow.append(nameCell, typeCell, rateCell, dueDateCell, dayUntillDueCell)

    // Append the new row to the table body
    $("#tableBody").append(tableRow)

    projectNameInput.val("")
    dueDateInput.val("")
    typeOfProjectInput.val("")
    hourlyRateInput.val("")
    $('#projectModal').modal('hide')
}
addProjectBtn.on("click", addProject)





startTime()