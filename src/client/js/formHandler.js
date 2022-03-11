import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(checkForName(formText)){

        console.log("::: Form Submitted :::")
        fetch('http://localhost:8080/analyzeTest', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: formText})
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('result').innerHTML = res.message
        })
    }

   
}

export { handleSubmit }





