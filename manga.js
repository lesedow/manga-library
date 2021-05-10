export function Manga(title, author, read_chapters, total_chapters) {
	this.title = title;
	this.author = author;
	this.readChapters = read_chapters;
	this.totalChapters = total_chapters;
	this.displaying = false;
	this.id = 0;
}
