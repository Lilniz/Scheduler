var currentDay = $('#currentDay')

function displayDay() {
    var now = moment().format("MMM Do YY");
    currentDay.text(now);
};
setInterval(displayDay, 1000);

var schedule = [
    {
        id: "0",
        hour: "12",
        time: "12",
        e_o: "AM",
        text: ""
    },
    {
        id: "1",
        hour: "1",
        time: "1",
        e_o: "AM",
        text: ""
    },
    {
        id: "2",
        hour: "2",
        time: "2",
        e_o: "AM",
        text: ""
    },
    {
        id: "3",
        hour: "3",
        time: "3",
        e_o: "AM",
        text: ""
    },
    {
        id: "4",
        hour: "4",
        time: "4",
        e_o: "AM",
        text: ""
    },
    {
        id: "5",
        hour: "5",
        time: "5",
        e_o: "AM",
        text: ""
    },
    {
        id: "6",
        hour: "6",
        time: "6",
        e_o: "AM",
        text: ""
    },
    {
        id: "7",
        hour: "7",
        time: "7",
        e_o: "AM",
        text: ""
    },
    {
        id: "8",
        hour: "8",
        time: "8",
        e_o: "AM",
        text: ""
    },
    {
        id: "9",
        hour: "9",
        time: "9",
        e_o: "AM",
        text: ""
    },
    {
        id: "10",
        hour: "10",
        time: "10",
        e_o: "AM",
        text: ""
    },
    {
        id: "11",
        hour: "11",
        time: "11",
        e_o: "AM",
        text: ""
    },
    {
        id: "12",
        hour: "12",
        time: "12",
        e_o: "PM",
        text: ""
    },
    {
        id: "13",
        hour: "1",
        time: "13",
        e_o: "PM",
        text: ""
    },
    {
        id: "14",
        hour: "2",
        time: "14",
        e_o: "PM",
        text: ""
    },
    {
        id: "15",
        hour: "3",
        time: "15",
        e_o: "PM",
        text: ""
    },
    {
        id: "16",
        hour: "4",
        time: "16",
        e_o: "PM",
        text: ""
    },
    {
        id: "17",
        hour: "5",
        time: "17",
        e_o: "PM",
        text: ""
    },
    {
        id: "18",
        hour: "6",
        time: "18",
        e_o: "PM",
        text: ""
    },
    {
        id: "19",
        hour: "7",
        time: "19",
        e_o: "PM",
        text: ""
    },
    {
        id: "20",
        hour: "8",
        time: "20",
        e_o: "PM",
        text: ""
    },
    {
        id: "21",
        hour: "9",
        time: "21",
        e_o: "PM",
        text: ""
    },
    {
        id: "22",
        hour: "10",
        time: "22",
        e_o: "PM",
        text: ""
    },
    {
        id: "23",
        hour: "11",
        time: "23",
        e_o: "PM",
        text: ""
    },
];

function saveText() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

function showText() {
    schedule.forEach(function (schedule) {
        $(`#${schedule.id}`).val(schedule.text);
    });
};

schedule.forEach(function(now) {
    var hourView = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourView);

    var hourField = $("<div>")
        .text(`${now.hour}${now.e_o}`)
        .attr({"class": "col-md-1 hour"});

    var eventPlan = $("<div>")
        .attr({"class": "col-md-9 description p-0"});

    var eventView = $("<textarea>");
    eventPlan.append(eventView);
    eventView.attr("id", now.id);
    if (now.time < moment().format("HH")) {
        eventView.attr ({"class": "past col-12", })

    } else if (now.time === moment().format("HH")) {
        eventView.attr({"class": "present col-12"})

    } else if (now.time > moment().format("HH")) {
        eventView.attr({"class": "future col-12"})
    };

    var saveButton = $("<i class='far fa-lg'>Save</i>")
    var saveEvent = $("<button>")
        .attr({"class": "col-md-1 saveBtn"});

    saveEvent.append(saveButton);
    hourView.append(hourField, eventPlan, saveEvent);
});

function start() {
    var savedDay = JSON.parse(localStorage.getItem("schedule"));
    if(savedDay) {
        schedule = savedDay
    };
    saveText();
    showText();
};
start();

$(".saveBtn").on("click", (event) => {
    event.preventDefault();

    document.getElementById(this.id)
    console.log(this.id)

    let saveTodo = $(this).siblings(".description").children(".future").attr("id");
    console.log(saveTodo)

    schedule[saveTodo] = $(this).siblings(".description").children(".future").val();

    saveText();
    showText();
});