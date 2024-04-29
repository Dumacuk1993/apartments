document.addEventListener("DOMContentLoaded", () => {

const projectTabs = document.querySelectorAll("[data-project]"),
	projectLayouts = document.querySelectorAll("[data-layout]"),
	galleryBtn = document.querySelector(".card__gallery_btn");
	
projectTabs.forEach(project => {
	project.addEventListener("mouseover", () => {
		projectLayouts.forEach(layout => {
			if (layout.getAttribute('data-layout').includes(project.getAttribute('data-project'))) {
				layout.classList.remove("hide");
			} else {
				layout.classList.add("hide");
			}
		})
		console.log(project.getAttribute('data-project'));	
	})
})

const gallery = new SimpleLightbox('.gallery a', { 
});

galleryBtn.addEventListener("click", () => {
	const btn = document.querySelector(".gallery a");
	btn.click()
})


})