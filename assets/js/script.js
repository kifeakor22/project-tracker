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
    var tableRow = $("<tr>")

    // Create table cells for each input value
    var nameCell = $("<td>").text(projectName)
    var typeCell = $("<td>").text(projectType)
    var rateCell = $("<td>").text(rate)
    var dueDateCell = $("<td>").text(dueDate)


    

    // Append the cells to the new row
    tableRow.append(nameCell, typeCell, rateCell, dueDateCell)

    // Append the new row to the table body
    $("#tableBody").append(tableRow)

    projectNameInput.val("")
    dueDateInput.val("")
    typeOfProjectInput.val("")
    hourlyRateInput.val("")
}
addProjectBtn.on("click", addProject)




startTime()