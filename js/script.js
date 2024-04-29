document.addEventListener("DOMContentLoaded", () => {

	$(".js-range-slider").ionRangeSlider({
		skin: "big",
        grid: true,
        min: 150000,
        max: 950000,
        prefix: "$"
    });


	// FILTERS AND LAYOUT HOVER

const tabs = document.querySelectorAll("[data-filter]"),
	tabsContent = document.querySelectorAll("[data-filters]"),
	projectTabs = document.querySelectorAll("[data-project]"),
	projectLayouts = document.querySelectorAll("[data-layout]");

tabs.forEach(tab => {
	tab.addEventListener("click", () => {
		if (tab.classList.contains("active")) {
			tab.classList.remove("active");	

			tabsContent.forEach(content => {
				content.classList.remove("hide");
			})
		} else {
			tabs.forEach(i => {
				i.classList.remove("active");
			})
			tab.classList.add("active");

			tabsContent.forEach(content => {
				if (content.getAttribute('data-filters').includes(tab.getAttribute('data-filter'))) {
					content.classList.remove("hide");
				} else {
					content.classList.add("hide");
				}
			})
		}
	
	})
})


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

// QUIZ MODALS

const quizBtn = document.querySelector(".quiz__button"),
	quizOverlay = document.querySelector(".modals__overlay"),
	modal1 = document.querySelector(".modal__step--1"),
	modals = document.querySelectorAll(".modal"),
	btns = document.querySelectorAll(".modal__button"),
	btnSubmit = document.querySelector(".modal__button--submit"),
	btnClose = document.querySelector(".modal__close");

quizBtn.addEventListener("click", (e) => {
	e.preventDefault()
	quizOverlay.style = "opacity: 1; visibility: visible;"
	modal1.style = "display: flex;"	
})

quizOverlay.addEventListener("click", e => {
	if (e.target === quizOverlay) {
		quizOverlay.style = "opacity: 0; visibility: hidden;"

		modals.forEach(modal => {
			modal.style = "display: none;";
		})
	}
})

btnClose.addEventListener("click", () => {
	quizOverlay.style = "opacity: 0; visibility: hidden;"

	modals.forEach(modal => {
		modal.style = "display: none;";
	})
})

btns.forEach(( btn, i ) => {
	btn.addEventListener("click", () => {
		modals[i].style = "display: none;"	
		modals[i + 1].style = "display: flex;"
	})
})

btnSubmit.addEventListener("click", e => {
	quizOverlay.style = "opacity: 0; visibility: hidden;"
})

})