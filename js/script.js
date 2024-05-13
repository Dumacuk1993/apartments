document.addEventListener("DOMContentLoaded", () => {

	let result_step1 = null,
	result_step2 = null,
	step2_other = null,
	result_step3 = '200 000',
	result_step4 = null,
	result_step5 = null,
	result_step6 = null;


	$(".js-range-slider").ionRangeSlider({
		skin: "big",
        grid: true,
        min: 200000,
        max: 2000000,
        prefix: "$",
		onFinish: function (data) {
			result_step3 = data.from_pretty
        }
    });

	let my_range = $(".js-range-slider").data("ionRangeSlider");

	console.log(my_range);
	// FILTERS AND LAYOUT HOVER

const tabs = document.querySelectorAll("[data-filter]"),
	tabsContent = document.querySelectorAll("[data-filters]"),
	projectTabs = document.querySelectorAll("[data-project]"),
	projectLayouts = document.querySelectorAll("[data-layout]");

tabs.forEach(tab => {
	if (document.location.hash.includes(tab.getAttribute('data-filter'))) {
		tab.classList.add("active");

		tabsContent.forEach(content => {
			if (content.getAttribute('data-filters').includes(tab.getAttribute('data-filter'))) {
				content.classList.remove("hide");
			} else {
				content.classList.add("hide");
			}
		})
	} else {
		
	}
})

tabs.forEach(tab => {
	tab.addEventListener("click", () => {
		if (tab.classList.contains("active")) {
			tab.classList.remove("active");	

			document.location.href = document.location.href.replace(`#${tab.getAttribute('data-filter')}`, '')

			tabsContent.forEach(content => {
				content.classList.remove("hide");
			})
		} else {
			tabs.forEach(i => {
				i.classList.remove("active");		
			})
			tab.classList.add("active");

			let index = document.location.href.indexOf("#");
			let result = document.location.href.substring(0, index);
			document.location.href = `${result}#${tab.getAttribute('data-filter')}`

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
	btnsClose = document.querySelectorAll(".fa-xmark"),
	confirmModal = document.querySelector(".modal__confirm-overlay"),
	confirmClose = document.querySelector(".modal__confirm-close"),
	confirmNext = document.querySelector(".modal__confirm-next");

quizBtn.addEventListener("click", (e) => {
	e.preventDefault()
	quizOverlay.style = "opacity: 1; visibility: visible;"
	modal1.style = "display: flex;"	
})

quizOverlay.addEventListener("click", e => {
	if (e.target === quizOverlay) {
		confirmModal.style = "opacity: 1; visibility: visible;"
	}
})

btnsClose.forEach(btnClose => {
	btnClose.addEventListener("click", (e) => {
		confirmModal.style = "opacity: 1; visibility: visible;"

	})	
})

confirmClose.addEventListener("click", (e) => {
	e.preventDefault()
	confirmModal.style = "opacity: 0; visibility: hidden;"
	quizOverlay.style = "opacity: 0; visibility: hidden;"
	modals.forEach(modal => {
		modal.style = "display: none;";
	})
})

confirmNext.addEventListener("click", (e) => {
	e.preventDefault()
	confirmModal.style = "opacity: 0; visibility: hidden;"
})

btns.forEach(( btn, i ) => {
	btn.addEventListener("click", () => {
		modals[i].style = "display: none;"	
		modals[i + 1].style = "display: flex;"
	})
})

// MODALS DATA

const selectors_step1 = document.querySelectorAll(".modal__step--1 .modal__content_variant"),
	selectors_step2 = document.querySelectorAll(".modal__checkboxs img"),
	selectors_step4 = document.querySelectorAll(".modal__step--4 .modal__content_variant"),
	selectors_step5 = document.querySelectorAll(".modal__step--5 .modal__content_variant"),
	selectors_step6 = document.querySelector(".modal__form input"),
	step2_input = document.querySelector(".modal__bottom-input input");

selectors_step1.forEach(selector => {
	selector.addEventListener("click", () => {
		if (selector.classList.contains("active")) {
			selector.classList.remove("active")
			result_step1 = null

			const btn = document.querySelector(".modal__button--step2")
			btn.disabled = true
			btn.style = 'background-color: gray;'
		} else {
			selectors_step1.forEach(item => {
				item.classList.remove("active")
			})

			selector.classList.add("active")
			result_step1 = selector.getAttribute('data-value')	
		}

		if (result_step1) {
			const btn = document.querySelector(".modal__button--step2")
			btn.disabled = false
			btn.style = 'background-color: #f84c21;'
		}
	})
})

selectors_step2.forEach(selector => {
	selector.addEventListener("click", () => {
		if (selector.classList.contains("active")) {
			selector.classList.remove("active")
			result_step2 = null
			if (!result_step2 && !step2_other) {
				const btn = document.querySelector(".modal__button--step3")
				btn.disabled = true
				btn.style = 'background-color: gray;'
			}
			
		} else {
			selectors_step2.forEach(item => {
				item.classList.remove("active")
			})

			selector.classList.add("active")

			result_step2 = selector.getAttribute('data-value')
		}
		if (result_step2 || step2_other) {
			const btn = document.querySelector(".modal__button--step3")
			btn.disabled = false
			btn.style = 'background-color: #f84c21;'
		}	
	})
})

selectors_step4.forEach(selector => {
	selector.addEventListener("click", () => {
		if (selector.classList.contains("active")) {
			selector.classList.remove("active")
			result_step4 = null

			const btn = document.querySelector(".modal__button--step5")
			btn.disabled = true
			btn.style = 'background-color: gray;'
		} else {
			selectors_step4.forEach(item => {
				item.classList.remove("active")
			})

			selector.classList.add("active")
			result_step4 = selector.getAttribute('data-value')	
		}

		if (result_step4) {
			const btn = document.querySelector(".modal__button--step5")
			btn.disabled = false
			btn.style = 'background-color: #f84c21;'
		}
	})
})

selectors_step5.forEach(selector => {
	selector.addEventListener("click", () => {
		if (selector.classList.contains("active")) {
			selector.classList.remove("active")
			result_step5 = null

			const btn = document.querySelector(".modal__button--step6")
			btn.disabled = true
			btn.style = 'background-color: gray;'
		} else {
			selectors_step5.forEach(item => {
				item.classList.remove("active")
			})

			selector.classList.add("active")
			result_step5 = selector.getAttribute('data-value')	
		}
		if (result_step5) {
			const btn = document.querySelector(".modal__button--step6")
			btn.disabled = false
			btn.style = 'background-color: #f84c21;'
		}
	})
})

selectors_step6.addEventListener("input", () => {
	result_step6 = selectors_step6.value

	if (!result_step6) {
		const btn = document.querySelector(".modal__button--submit")
		btn.disabled = true
		btn.style = 'background-color: gray;'
	}

	if (result_step6) {
		const btn = document.querySelector(".modal__button--submit")
		btn.disabled = false
		btn.style = 'background-color: #f84c21;'
	}
})

step2_input.addEventListener("input", (e) => {
	step2_other = e.target.value

	if (!result_step2 && !step2_other) {
		const btn = document.querySelector(".modal__button--step3")
		btn.disabled = true
		btn.style = 'background-color: gray;'
	}

	if (step2_other) {
		const btn = document.querySelector(".modal__button--step3")
		btn.disabled = false
		btn.style = 'background-color: #f84c21;'
	}
})

btnSubmit.addEventListener("click", e => {
	e.preventDefault()

	console.log({
		step1: result_step1,
		district: result_step2  + ", " + step2_other,
		price: result_step3,
		step4: result_step4,
		step5: result_step5,
		email: result_step6
	});


	quizOverlay.style = "opacity: 0; visibility: hidden;"
	modals.forEach(modal => {
		modal.style = "display: none;";
	})
})







})