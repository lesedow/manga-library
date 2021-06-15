export default class Manga {
	constructor({title, author, read_chapters, total_chapters}) {
		this._title = title
		this._author = author
		this._read = read_chapters
		this._total = total_chapters
	}

	create = (parent) => {
		const mangaDiv = document.createElement('div');
		mangaDiv.classList.add('manga');

		const title = document.createElement('p');
		mangaDiv.appendChild(title);
		title.classList.add('manga-title');
		title.textContent = this._title;

		const author = document.createElement('span');
		mangaDiv.appendChild(author);
		author.classList.add('manga-author');
		author.textContent = `Author: ${this._author}`;

		const chapters = document.createElement('span');
		mangaDiv.appendChild(chapters);
		chapters.classList.add('manga-chapters');
		chapters.textContent = `Chapters: ${this._read}/${this._total}`;

		const removeManga = document.createElement('i');
		mangaDiv.appendChild(removeManga);
		removeManga.classList.add('fas', 'fa-times');
		removeManga.addEventListener('click', () => {
			parent.removeChild(mangaDiv);
		})

		parent.appendChild(mangaDiv);
	}
}