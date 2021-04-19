export function Manga(title, author, read_chapters, total_chapters, color) {
	this.title = title;
	this.author = author;
	this.color = color;
	this.readChapters = read_chapters;
	this.totalChapters = total_chapters;
	this.displaying = false;
}