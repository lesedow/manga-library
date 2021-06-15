import Manga from './manga.js';

const openClose = (open, close, container, wrapper) => {
	open.addEventListener('click', () => {
		container.classList.add('show');
		wrapper.classList.add('blur');
	});

	close.addEventListener('click', () => {
		container.classList.remove('show');
		wrapper.classList.remove('blur');
	});
}

const getInputsValue = (inputs) => {
	let values = {}
	inputs.forEach(input => {
		values[input.id] = input.value;
	})
	return values
}

// Checking if the inputs are valid
const checkValues = (inputs) => {
	return parseInt(inputs.read_chapters) > parseInt(inputs.total_chapters)
}

const main = () =>  {

	// Getting all the elements we need from the DOM
	const openForm = document.querySelector('.open-form');
	const closeForm = document.getElementById('close');
	const formContainer = document.querySelector('.form-container');
	const wrapper = document.querySelector('.wrapper');

	const addManga = document.getElementById('add-manga');
	const mangaContainer = document.querySelector('.manga-container');
	
	// Closing and opening the form
	openClose(openForm, closeForm, formContainer, wrapper);

	// Checking if the form is submitted
	addManga.addEventListener('submit', (e) => {
		e.preventDefault();
		const inputs = Array.from(addManga.querySelectorAll('input'));
		const inputsValue = getInputsValue(inputs);
	
		// Check if the inputs are valid
		const inputsChecked = checkValues(inputsValue);
		console.log(inputsChecked)
		if (!inputsChecked) {
			// Create a new manga object
			const newManga = new Manga(inputsValue);
			newManga.create(mangaContainer);
		} 
		
	})

}
main();
