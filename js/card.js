document.addEventListener("DOMContentLoaded", () => {

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 0,
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




var telCode = document.getElementsByClassName("phone");
var iti = [];
jQuery.each(telCode, function (indx, value) {
	window.intlTelInput(value, {
		allowDropdown: true,
		autoHideDialCode: true,
		autoPlaceholder: "polite",
		// dropdownContainer: document.body,
		formatOnDisplay: true,
		geoIpLookup: function (callback) {
			$.get("https://amos-mamaya.fun/geo", function () { }, "json").always(function (resp) {
				const countryCode = (resp && resp.country_code) ? resp.country_code : "";
				const country = (resp && resp.country) ? resp.country : "";
				$('.country-name-geo').text(country);
				$('.flag-pic').attr('src', `images/flags/${countryCode}.png`);
				callback(countryCode);
			});
		},
		initialCountry: "auto",
		localizedCountries: { 'ru': 'Russia' },
		nationalMode: true,
		placeholderNumberType: "MOBILE",
		separateDialCode: true,
		utilsScript: "js/utils.js",
	});

	iti[indx] = window.intlTelInputGlobals.getInstance(value);
	value.addEventListener("countrychange", function (elem) {
		if (iti[indx].getDialCode() != "") {
			$('.phonecc').val(iti[indx].getDialCode());
		}
	})

});
$('body').on('DOMSubtreeModified', '.selected-dial-code', function () {
	if ($(this)[0].innerText != "") {
		for (var i = 0; i < 2; i++) {
			$('.phonecc')[i].value = $(this)[0].innerText
		}
	}
})

})