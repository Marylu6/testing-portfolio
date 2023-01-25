
anychart.onDocumentReady(function () {
    let data = [
        { x: "JS", value: 8 },
        { x: "CSS", value: 18 },
        { x: "HTML", value: 20 },
        { x: "Boostrap", value: 7 },
        { x: "Photoshop", value: 9 },
        { x: "Krita", value: 30 },
        { x: "GIMP", value: 10 }

    ];

    //this creates chart
    let chart = anychart.pie3d(data);

    // set the position of labels
    chart.labels().position("outside");

    //size of chart
    chart.radius("50%");

    //combine varible chart with data
    chart.data(data);

    // display the chart in pieChart basically connects with Id
    chart.container('pieChart');
    chart.draw();



});


//need help with this

let sub = document.getElementById("submitButton");

sub.addEventListener(`click`, function (e) {
    e.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let msn = document.getElementById("msn").value;
    let body = "Name: " + name + "<br/> Email:" + email + "<br/> Subject:" + subject + "<br/> Message:" + msn;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "pi6265541@gmail.com",
        Password: "Superdog626",
        To: 'pi6265541@gmail.com',
        From: email,
        Subject: subject,
        Body: body
    }).then(
        message => alert(message)
    );




});


