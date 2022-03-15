import { handleSubmit } from './js/formHandler'
import { analyzeText } from './js/formHandler'
import { updateUIPage } from './js/updateUIPage'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss';
import './styles/header.scss'
import './styles/footer.scss'

export {
    handleSubmit,
    analyzeText,
    updateUIPage
}



window.addEventListener("DOMContentLoaded", (e) => {
	// get reference to the form elemet
	const form = document.getElementById("form");
	// Add submit event listener on this form
	form.addEventListener("submit", handleSubmit);
});