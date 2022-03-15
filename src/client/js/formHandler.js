import {updateUIPage} from './updateUIPage'

  function handleSubmit(event) {
    event.preventDefault()

    // get text that user submitted
    let formText = document.getElementById('name').value
    analyzeText(formText)
}

function analyzeText(formText) {
    console.log("inside analyZeText")
    fetch('/userData', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formText })
    })
    .then(res => res.json())
    .then(function(res) {
        let element = document.getElementById('results')
        console.log('before UPDATE UI Page',element)
        updateUIPage(element, res)
    })
}

export { handleSubmit }
export { analyzeText }
