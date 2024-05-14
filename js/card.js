document.addEventListener("DOMContentLoaded", () => {

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
});


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

const modalConsultation = document.querySelector('.modal__consultation-overlay'),
	consultationClose = document.querySelector('.modal__consultation-close i')

document.querySelector('.header__links').addEventListener("click", (e) => {
	e.preventDefault()

	modalConsultation.style = "opacity: 1; visibility: visible;"	
}) 

modalConsultation.addEventListener("click", e => {
	if (e.target === modalConsultation) {
		modalConsultation.style = "opacity: 0; visibility: hidden;"
	}
})

consultationClose.addEventListener("click", () => {
	modalConsultation.style = "opacity: 0; visibility: hidden;"
})


})