import { Manga } from './manga.js';

const addManga = document.getElementById('add');

const addFormContainer = document.querySelector('.add-form');
const formButton = document.getElementById('submit');

const mangaTitleElement = document.getElementById('title');
const mangaAuthorElement = document.getElementById('author');
const readChaptersElement = document.getElementById('read_chapters');
const totalChaptersElement = document.getElementById('total_chapters');

const closeForm = document.getElementById('close');

const mangaContainer = document.querySelector('.manga-container');
const wrapper = document.querySelector('.wrapper');

let totalManga = [];

// Checking if the inputs are valid
function checkInputs() {
	if (mangaTitleElement.value.length > 0 && mangaAuthorElement.value.length > 0 && readChaptersElement.value.length > 0 && totalChaptersElement.value.length > 0) {
		if (parseInt(readChaptersElement.value) > parseInt(totalChaptersElement.value)) {
			return false;
		}
		return true;
	}
}

// Displaying each element from the totalManga list
function displayManga() {
	totalManga.forEach(manga => {
		if (!manga.displaying) {
			const mangaDiv = document.createElement('div');
			mangaDiv.classList.add('manga');

			const title = document.createElement('p');
			mangaDiv.appendChild(title);

			title.classList.add('manga-title');
			title.textContent = manga.title;

			const author = document.createElement('span');
			mangaDiv.appendChild(author);

			author.classList.add('manga-author');
			author.textContent = `Author: ${manga.author}`;

			const chapters = document.createElement('span');
			mangaDiv.appendChild(chapters);

			chapters.classList.add('manga-chapters');
			chapters.textContent = `Chapters: ${manga.readChapters}/${manga.totalChapters}`;

			const removeManga = document.createElement('i');
			mangaDiv.appendChild(removeManga);

			removeManga.classList.add('fas', 'fa-times');

			removeManga.addEventListener('click', () => {
				mangaContainer.removeChild(mangaDiv);
			})

			const id = totalManga.indexOf(manga);
			mangaDiv.dataset.id = id;

			mangaContainer.appendChild(mangaDiv);
			manga.displaying = true;
			manga.id = id;
		}
	});
}

function main() {
	// Closing and opening the form
	addManga.addEventListener('click', () => {
		addFormContainer.classList.add('show');
		wrapper.classList.add('blur');
	});

	closeForm.addEventListener('click', () => {
		addFormContainer.classList.remove('show');
		wrapper.classList.remove('blur');
	});

	// Checking if the form is submitted
	formButton.addEventListener('click', () => {
		if (checkInputs()) {
			const mangaTitle = mangaTitleElement.value;
			const mangaAuthor = mangaAuthorElement.value;
			const readChapters = readChaptersElement.value;
			const totalChapters = totalChaptersElement.value;

			const newManga = new Manga(mangaTitle, mangaAuthor, readChapters, totalChapters);
			totalManga.push(newManga);
			displayManga();

			addFormContainer.classList.remove('show');
			wrapper.classList.remove('blur');
		}
	});

}
main();
