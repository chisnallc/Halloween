

function fireOffLightening() {
    var lighteningElement = document.getElementById('lightening');
    lighteningElement.style.visibility = "visible";
    
    setTimeout(function () {
        lighteningElement.style.visibility = "hidden";
    }, 1000);
    
}

function composeEmail() {
    var checkbox1 = document.getElementById('checkbox1')
    var checkbox2 = document.getElementById('checkbox2')
    var checkbox3 = document.getElementById('checkbox3')
    var checkbox4 = document.getElementById('checkbox4')

    var checkboxes = [checkbox1, checkbox2, checkbox3, checkbox4]
    var emailBody = ["Hi, "]
    var selectedCheckboxes = []

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedCheckboxes.push(checkbox.value)
        }
    });
    emailBody.push(`Selected times: ${selectedCheckboxes.join(', ')}`)
    console.log(emailBody.join('\n'))
    const email = {
        subject: encodeURIComponent('Hello Again'),
        body: encodeURIComponent(emailBody.join('\n'))
    }
    document.location = `mailto:chisnallc@hotmail.com?subject=${email.subject}&body=${email.body}`
}

function clickEvent() {
    fireOffLightening()
    composeEmail()
}