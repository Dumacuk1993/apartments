document.addEventListener("DOMContentLoaded", () => {

	const data = [
		// Top
		{
			filters: ["top", "two"],
			banner: {
				show: true,
				title: "The most buyable for investment",
			},
			main_img: "sobha/card_8.jpg",
			title: "Sobha Seahaven - Tower B",
			description: 'Luxury waterfront living at Sobha SeaHaven, Dubai Harbour. Exclusive 1-4 bedroom apartments with stunning views, world-class amenities, and a prime location. Experience the epitome of elegance and sophistication.',
			location: "Dubai Marina",
			date_finish: 'Q2 2028',
			rating: '93',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["infinity leisure pool", "yacht/marina life", "private movie theatre", "health club with a sauna and steam room"],
			price_from: '1 816 000',
			price_percent: '60/40',
			page_url: './sobha-seahaven.html'
		},
		{
			filters: ["top", "one"],
			banner: {
				show: true,
				title: "Best buy for living",
			},
			main_img: "keturah-reserve/card_2.jpg",
			title: "Keturah Reserve",
			description: 'A luxurious project offering opulent waterfront mansions and residences in a modern community. Located in a fast-developing area with easy access to key landmarks. Features include stone facades, natural finishing, marble bathrooms, spacious rooms, home cinema, office, gym, pool, spa, and more. Developed by MAG Property, known for its quality and expertise. Ready by Q1 2026.',
			location: "Dubai Health",
			date_finish: 'Q1 2026',
			rating: '91',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Spa, beauty salon", "rooftop terrace, Kids playground", "Beach Access to The Ritz-Carlton", "Jumeirah Hotel"],
			price_from: '1 816 000',
			price_percent: '60/40',
			page_url: './keturah-reserve.html'
		},
		{
			filters: ["top", "one"],
			banner: {
				show: true,
				title: "Most buy to rent out",
			},
			main_img: "damac-bay-2/card_1.jpg",
			title: "Damac Bay 2",
			description: 'Exclusive Skycrest Collection residences with stunning sea views, starting at AED 3.3 million. World-class amenities include Cavalli Museum, tropical treatment rooms, art & fashion studio, infinity pools, and beachfront F&B. Located in prestigious Dubai Harbour with easy access to major landmarks and airports. Scheduled for completion in January 2028.',
			location: "Dubai Marina",
			date_finish: 'Q4 2028',
			rating: '89',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Private beach", "Cavalli art & fashion interiors", "Spa and infinity swimming pools", "Cavalli lounge"],
			price_from: '872 000',
			price_percent: '80/20',
			page_url: './damac-bay-2.html'
		},
		{
			filters: ["top", "two"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "central-park-plaza/card_1.png",
			title: "Central Park Plaza",
			description: 'Central Park at City Walk offers sleek, contemporary apartments with stunning park and skyline views. Amenities include pools, kids play area, sports courts, outdoor gym, spa, F&B outlets, and more. Located in a vibrant community with easy access to major landmarks in Dubai. Live surrounded by nature in the heart of the city.',
			location: "City Walk",
			date_finish: 'Q2 2027',
			rating: '89',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Running track, dog park", "Multi-use games and sports lawns", "Tennis and squash courts", "Outdoor barbecue areas"],
			price_from: '1 061 000',
			price_percent: '70/30',
			page_url: './central-park-plaza.html'
		},
		{
			filters: ["top", "studio"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "hyde-walk-residence-by-imtiaz/card_1.jpg",
			title: "Hyde Walk Residence",
			description: 'Hyde Walk by Imtiaz offers modern elegance and convenience in the heart of Dubai, with studios and 1 BHK options. Amenities include a furnished club room, fully equipped gym, rooftop pool, sauna, kids play area, BBQ area, and more. The project is set to be completed by Q3 2025, showcasing dedication to quality and safety. Imtiaz Developments aims to deliver a seamless blend of luxury and city living, inviting residents to experience the vibrant essence of Dubai effortlessly.',
			location: "Jumeriah Garden",
			date_finish: 'Q4 2025',
			rating: '88',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["ROI to 8%", "Rooftop pool", "6 minutes to the beach", "Activity for kids"],
			price_from: '252 000',
			price_percent: '60/40',
			page_url: './hyde-walk-residence-by-imtiaz.html'
		},
		// Studio
		{
			filters: ["studio"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "the-crestmark/card_5.jpg",
			title: "The Crestmark",
			description: "A luxurious residential project in Business Bay offering contemporary design, scenic views of Dubai Water Canal, and a cosmopolitan lifestyle. Features include a resort-style pool deck, a mini-city experience for children, a well-equipped fitness studio, and high-quality finishes throughout. Strategically located near iconic landmarks and surrounded by upscale amenities, The Crestmark promises a sophisticated and relaxing living experience.",
			location: "Business Bay",
			date_finish: 'Q2 2026',
			rating: '88',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Resort-style swimming pool deck", "Kidtropoli", "intelligent home system"], 
			price_from: '390 000',
			price_percent: '70/30',
			page_url: './the-crestmark.html'
		},
		{
			filters: ["studio"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "oceanz-by-danube/card_2.jpg",
			title: "Oceanz By Danube",
			description: "Oceanz by Danube is a luxurious waterfront development in Dubai Maritime City. It offers stunning sea views, Italian interiors, and luxury furnishings. With over 40 amenities, prime location, and high-quality materials, it promises a sophisticated lifestyle. The project is by Danube Properties, known for its best payment plan and timely delivery. Enjoy easy access to major areas of Dubai and a range of attractions within minutes. Experience unparalleled luxury and comfort at Oceanz by Danube.",
			location: "Dubai Maritime",
			date_finish: 'Q1 2027',
			rating: '86',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Interiors & furnishing by Tonino Lamborghini Casa", "best payment plan", "Breathtaking vistas of the vast Arabian Gulf & sunset"],
			price_from: '293 000',
			price_percent: '65/35',
			page_url: './oceanz-by-danube.html'
		},
		{
			filters: ["studio"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "rove-home-residences-by-irth/card_1.jpg",
			title: "Rove Home Residences",
			description: "Rove Home at Marasi Drive, Business Bay offers contemporary lifestyle living with value, efficiency, and a vibrant atmosphere. The project features branded fully furnished residences, expandable living solutions, smart home technology, and innovative design by Zebra and Studio Feel. Residents can enjoy exclusive perks, 50+ amenities, and endless entertainment options, creating a dynamic urban community. With a prime location in Business Bay, Rove Home is set to redefine city living.",
			location: "Business Bay",
			date_finish: 'Q1 2027',
			rating: '86',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Branded fully furnished residences", "smart home technology, outdoor cinema", "co-working spaces, SKY GARDEN Outdoor", "ROOFTOP Viewing deck "],
			price_from: '311 000',
			price_percent: '50/50',
			page_url: './rove-home-residences-by-irth.html'
		},
		{
			filters: ["studio"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "uh-east-by-ellington/card_1.jpg",
			title: "UH East By Ellington",
			description: "UH by Ellington offers centrally located apartments with holistic design, expansive views of Jumeirah Islands and Marina Skyline, and outstanding amenities like a lap pool, kids' splash pad, and fitness studio. Located in Jumeirah Lakes Towers, it provides a community vibe with dining, shopping, and entertainment options. The sleek and modern apartments feature home automation systems, while the clubhouse offers elegant lounge spaces and a working area. The pool deck includes a lap pool, sun loungers, and cabanas. UH by Ellington merges nature with modern design for a truly unique living experience.",
			location: "Jumeirah Lakes",
			date_finish: 'Q1 2026',
			rating: '85',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["37m lap pool", "padel court, cinema room", "penthouse lounge", "home automation"],
			price_from: '214 000',
			price_percent: '70/30',
			page_url: './uh-east-by-ellington.html'
		},
		// One
		{
			filters: ["one"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "sobha/card_8.jpg",
			title: "Sobha Seahaven - Tower B",
			description: 'Luxury waterfront living at Sobha SeaHaven, Dubai Harbour. Exclusive 1-4 bedroom apartments with stunning views, world-class amenities, and a prime location. Experience the epitome of elegance and sophistication.',
			location: "Dubai Marina",
			date_finish: 'Q2 2028',
			rating: '90',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["infinity leisure pool", "yacht/marina life", "private movie theatre", "health club with a sauna and steam room"],
			price_from: '847 000',
			price_percent: '60/40',
			page_url: './sobha-seahaven.html'
		},
		{
			filters: ["one"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "the-crestmark/card_5.jpg",
			title: "The Crestmark",
			description: "A luxurious residential project in Business Bay offering contemporary design, scenic views of Dubai Water Canal, and a cosmopolitan lifestyle. Features include a resort-style pool deck, a mini-city experience for children, a well-equipped fitness studio, and high-quality finishes throughout. Strategically located near iconic landmarks and surrounded by upscale amenities, The Crestmark promises a sophisticated and relaxing living experience.",
			location: "Business Bay",
			date_finish: 'Q2 2026',
			rating: '86',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Resort-style swimming pool deck", "Kidtropoli", "intelligent home system"], 
			price_from: '548 000',
			price_percent: '70/30',
			page_url: './the-crestmark.html'
		},
		{
			filters: ["one"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "elara/card_1.png",
			title: "Elara",
			description: "Discover Elara, a new addition to Madinat Jumeirah Living offering luxury apartments with modern design and iconic views. Surrounded by beaches and green spaces, residents can enjoy a vibrant community with top-notch amenities. Located near major attractions and business hubs, it provides a truly enriching lifestyle experience. Live extraordinary at Elara.",
			location: "Madinat Jumeirah",
			date_finish: 'Q4 2026',
			rating: '86',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Modern interiors", "breathtaking views of the Burj Al Arab", "Bridge to Madinat Jumeirah", "Day Care Centres, Parks and Open Spaces"],
			price_from: '627 000',
			price_percent: '70/30',
			page_url: './elara.html'
		},
		{
			filters: ["one"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "rove-home-residences-by-irth/card_1.jpg",
			title: "Rove Home Residences",
			description: "Rove Home at Marasi Drive, Business Bay offers contemporary lifestyle living with value, efficiency, and a vibrant atmosphere. The project features branded fully furnished residences, expandable living solutions, smart home technology, and innovative design by Zebra and Studio Feel. Residents can enjoy exclusive perks, 50+ amenities, and endless entertainment options, creating a dynamic urban community. With a prime location in Business Bay, Rove Home is set to redefine city living.",
			location: "Business Bay",
			date_finish: 'Q1 2027',
			rating: '84',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Branded fully furnished residences", "smart home technology, outdoor cinema", "co-working spaces, SKY GARDEN Outdoor", "ROOFTOP Viewing deck "],
			price_from: '548 000',
			price_percent: '50/50',
			page_url: './rove-home-residences-by-irth.html'
		},
		// Two
		{
			filters: ["two"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "damac-bay-2/card_1.jpg",
			title: "Damac Bay 2",
			description: 'Exclusive Skycrest Collection residences with stunning sea views, starting at AED 3.3 million. World-class amenities include Cavalli Museum, tropical treatment rooms, art & fashion studio, infinity pools, and beachfront F&B. Located in prestigious Dubai Harbour with easy access to major landmarks and airports. Scheduled for completion in January 2028.',
			location: "Dubai Marina",
			date_finish: 'Q4 2028',
			rating: '88',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Private beach", "Cavalli art & fashion interiors", "Spa and infinity swimming pools", "Cavalli lounge"],
			price_from: '1 017 000',
			price_percent: '80/20',
			page_url: './damac-bay-2.html'
		},
		{
			filters: ["two"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "armani-beach-residences/card_1.jpg",
			title: "Armani Beach Residences",
			description: "Experience the epitome of luxury living at Armani Beach Residences, a collaboration between Armani Group and Arada Developer. Designed by Tadao Ando, the residences offer a blend of Japanese elegance and contemporary opulence. Enjoy exclusive access to pristine beaches, a private Beach Club, and world-class amenities. With a focus on sustainability and smart home technology, this development promises a lifestyle of unparalleled luxury and refinement. Located on the iconic Palm Jumeirah, it is a true crown jewel of Dubai's luxury real estate market.",
			location: "Palm Jumeirah",
			date_finish: 'Q4 2026',
			rating: '88',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Japanese elegance", "smart home tech", "Private Beach Club", "90,000 square feet and are all immaculately designed by Armani/Casa"],
			price_from: '6 403 000',
			price_percent: '60/40',
			page_url: './armani-beach-residences.html'
		},
		{
			filters: ["two"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "the-crestmark/card_5.jpg",
			title: "The Crestmark",
			description: "A luxurious residential project in Business Bay offering contemporary design, scenic views of Dubai Water Canal, and a cosmopolitan lifestyle. Features include a resort-style pool deck, a mini-city experience for children, a well-equipped fitness studio, and high-quality finishes throughout. Strategically located near iconic landmarks and surrounded by upscale amenities, The Crestmark promises a sophisticated and relaxing living experience.",
			location: "Business Bay",
			date_finish: 'Q2 2026',
			rating: '84',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Resort-style swimming pool deck", "Kidtropoli", "intelligent home system"], 
			price_from: '765 000',
			price_percent: '70/30',
			page_url: './the-crestmark.html'
		},
		// Tree
		{
			filters: ["tree"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "vela-by-omniyat/card_1.webp",
			title: "Vela By Omniyat",
			description: 'VELA, a luxury waterfront project in Dubai, offers 38 residences with stunning views of the marina and Burj Khalifa. Unique amenities include L-shaped corner pools, a triple-height gym, cinema room, and private spa. Managed by Dorchester Collection, residents enjoy five-star service and exclusive access to beach clubs. Designed by Foster + Partners and Gilles & Boissier, VELA embodies elegance and sophistication, redefining luxury living in Dubai.',
			location: "Business Bay",
			date_finish: 'Q3 2026',
			rating: '83',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Cinema room", "private spa suite and salon", "triple-height gym", "Magnificent 100-meter private white sand beach"],
			price_from: '7 851 000',
			price_percent: '60/40',
			page_url: './vela-by-omniyat.html'
		},
		{
			filters: ["tree"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "keturah-reserve/card_2.jpg",
			title: "Keturah Reserve",
			description: 'A luxurious project offering opulent waterfront mansions and residences in a modern community. Located in a fast-developing area with easy access to key landmarks. Features include stone facades, natural finishing, marble bathrooms, spacious rooms, home cinema, office, gym, pool, spa, and more. Developed by MAG Property, known for its quality and expertise. Ready by Q1 2026.',
			location: "Dubai Health",
			date_finish: 'Q1 2026',
			rating: '78',
			rating_stars: ['full', 'full', 'full', 'full', 'empty'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Spa, beauty salon", "rooftop terrace, Kids playground", "Beach Access to The Ritz-Carlton", "Jumeirah Hotel"],
			price_from: '4 404 000',
			price_percent: '60/40',
			page_url: './keturah-reserve.html'
		},
		{
			filters: ["tree"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "damac-bay-2/card_1.jpg",
			title: "Damac Bay 2",
			description: 'Exclusive Skycrest Collection residences with stunning sea views, starting at AED 3.3 million. World-class amenities include Cavalli Museum, tropical treatment rooms, art & fashion studio, infinity pools, and beachfront F&B. Located in prestigious Dubai Harbour with easy access to major landmarks and airports. Scheduled for completion in January 2028.',
			location: "Dubai Marina",
			date_finish: 'Q4 2028',
			rating: '77',
			rating_stars: ['full', 'full', 'full', 'full', 'empty'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Private beach", "Cavalli art & fashion interiors", "Spa and infinity swimming pools", "Cavalli lounge"],
			price_from: '1 851 000',
			price_percent: '80/20',
			page_url: './damac-bay-2.html'
		},
		{
			filters: ["tree"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "damac-bay/card_2.jpg",
			title: "Damac Bay",
			description: "Luxury seafront apartments in Dubai Harbour, DAMAC Bay by Cavalli offers a unique blend of true luxury and maritime bliss. With nautical-themed interiors by Cavalli, every unit enjoys stunning sea views. Amenities include a private beach, three infinity pools, rooftop opera pavilion, and Cavalli lounge. Located in the vibrant Dubai Harbour district, DAMAC Bay rekindles Dubai's connection to the sea. The development offers a range of luxury 1-, 2-, and 3-bedroom units, as well as super-luxury 3- to 5-bedroom duplex units on the higher floors. Experience the essence of an untamed ocean at DAMAC Bay by Cavalli.",
			location: "Dubai Harbour",
			date_finish: 'Q1 2027',
			rating: '77',
			rating_stars: ['full', 'full', 'full', 'full', 'empty'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Rooftop opera pavilion, water fountain", "virtual reality school, wave pool", "luxury snorkeling experience", "rooftop water maze"],
			price_from: '2 341 000',
			price_percent: '60/40',
			page_url: './damac-bay.html'
		},
		{
			filters: ["tree"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "elara/card_1.png",
			title: "Elara",
			description: "Discover Elara, a new addition to Madinat Jumeirah Living offering luxury apartments with modern design and iconic views. Surrounded by beaches and green spaces, residents can enjoy a vibrant community with top-notch amenities. Located near major attractions and business hubs, it provides a truly enriching lifestyle experience. Live extraordinary at Elara.",
			location: "Madinat Jumeirah",
			date_finish: 'Q4 2026',
			rating: '76',
			rating_stars: ['full', 'full', 'full', 'full', 'empty'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Modern interiors", "breathtaking views of the Burj Al Arab", "Bridge to Madinat Jumeirah", "Day Care Centres, Parks and Open Spaces"],
			price_from: '1 526 000',
			price_percent: '70/30',
			page_url: './elara.html'
		},
		// 4+
		{
			filters: ["more"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "casa-canal/card_2.jpg",
			title: "Casa Canal",
			description: 'Experience ultra-luxury living in the heart of Dubai with Casa Canal Residences. Offering penthouses, sky villas, and sky mansions with stunning water canal and Safa Park views. Private elevators, exclusive amenities, and personalized services cater to your every need. Anticipated delivery in Q1, 2026. A truly opulent and tailored luxury living experience.',
			location: "Al Safa",
			date_finish: 'Q1 2026',
			rating: '82',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Private elevators", "24/7 luxury concierge service", "Outdoor terraces", "Private swimming pools"],
			price_from: '8 583 000',
			price_percent: '60/40',
			page_url: './casa-canal.html'
		},
		{
			filters: ["more"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "rove-home-residences-by-irth/card_1.jpg",
			title: "Rove Home Residences",
			description: "Rove Home at Marasi Drive, Business Bay offers contemporary lifestyle living with value, efficiency, and a vibrant atmosphere. The project features branded fully furnished residences, expandable living solutions, smart home technology, and innovative design by Zebra and Studio Feel. Residents can enjoy exclusive perks, 50+ amenities, and endless entertainment options, creating a dynamic urban community. With a prime location in Business Bay, Rove Home is set to redefine city living.",
			location: "Business Bay",
			date_finish: 'Q1 2027',
			rating: '82',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Branded fully furnished residences", "smart home technology, outdoor cinema", "co-working spaces, SKY GARDEN Outdoor", "ROOFTOP Viewing deck "],
			price_from: '311 000',
			price_percent: '50/50',
			page_url: './rove-home-residences-by-irth.html'
		},
		{
			filters: ["more"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "hyde-walk-residence-by-imtiaz/card_1.jpg",
			title: "Hyde Walk Residence",
			description: 'Hyde Walk by Imtiaz offers modern elegance and convenience in the heart of Dubai, with studios and 1 BHK options. Amenities include a furnished club room, fully equipped gym, rooftop pool, sauna, kids play area, BBQ area, and more. The project is set to be completed by Q3 2025, showcasing dedication to quality and safety. Imtiaz Developments aims to deliver a seamless blend of luxury and city living, inviting residents to experience the vibrant essence of Dubai effortlessly.',
			location: "Jumeriah Garden",
			date_finish: 'Q4 2025',
			rating: '82',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["ROI to 8%", "Rooftop pool", "6 minutes to the beach", "Activity for kids"],
			price_from: '252 000',
			price_percent: '60/40',
			page_url: './hyde-walk-residence-by-imtiaz.html'
		},
		{
			filters: ["more"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "the-crestmark/card_5.jpg",
			title: "The Crestmark",
			description: "A luxurious residential project in Business Bay offering contemporary design, scenic views of Dubai Water Canal, and a cosmopolitan lifestyle. Features include a resort-style pool deck, a mini-city experience for children, a well-equipped fitness studio, and high-quality finishes throughout. Strategically located near iconic landmarks and surrounded by upscale amenities, The Crestmark promises a sophisticated and relaxing living experience.",
			location: "Business Bay",
			date_finish: 'Q2 2026',
			rating: '82',
			rating_stars: ['full', 'full', 'full', 'full', 'half'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Resort-style swimming pool deck", "Kidtropoli", "intelligent home system"], 
			price_from: '390 000',
			price_percent: '70/30',
			page_url: './the-crestmark.html'
		},
		{
			filters: ["more"],
			banner: {
				show: false,
				title: "",
			},
			main_img: "central-park-plaza/card_1.png",
			title: "Central Park Plaza",
			description: 'Central Park at City Walk offers sleek, contemporary apartments with stunning park and skyline views. Amenities include pools, kids play area, sports courts, outdoor gym, spa, F&B outlets, and more. Located in a vibrant community with easy access to major landmarks in Dubai. Live surrounded by nature in the heart of the city.',
			location: "City Walk",
			date_finish: 'Q2 2027',
			rating: '80',
			rating_stars: ['full', 'full', 'full', 'full', 'empty'],
			rating_window: 'This rating  is engineered by us and our advisors, deriving from a decade of experience investing, analyzing and writing about real estate in Dubai. We calculate it dynamically, using a combination of quantitative and qualitative data points. Each of our ratings is sorted from best to worst, which means we do not control each individual rating - they are dynamic and data-driven, ensuring objectivity.', 
			advantages: ["Running track, dog park", "Multi-use games and sports lawns", "Tennis and squash courts", "Outdoor barbecue areas"],
			price_from: '5 313 000',
			price_percent: '70/30',
			page_url: './central-park-plaza.html'
		},
		
	]

	const objects_list = document.querySelector('.main__cards')

	const filteredData = (filter = 'top') => {
		const dataHtml = data.map(item => {

			if (item.filters.includes(filter)) {
				const banner = `
				<div class="card__left-banner">
					${item.banner.title}
				</div>
			`
	
			const advantages = item.advantages.map(advantage => {
				return `
					<li>
						<i class="fa-solid fa-circle-check" 
						style="color: #fe6540;margin-right: 4px;"></i>
						${advantage[0].toUpperCase() + advantage.slice(1)}
					</li>`
			})
	
			const renderStars = item.rating_stars.map(star => {
				if (star === 'full') {
					return `<i class="fa-solid fa-star" style="color: #fe6540;"></i>`
				} else if (star === 'half') {
					return `<i class="fa-solid fa-star-half-stroke" style="color: #fe6540;"></i>`
				} else if (star === 'empty') {
					return `<i class="fa-regular fa-star" style="color: #fe6540;"></i>`
				}	
			})
	
			return `
					<div class="main__card" data-filters="${item.filters}">
					<div class="main__card-wrapper">
						<div class="card__left">
							${item.banner.show ? banner : ''}
							<div class="card__left__img">
								<img src="img/${item.main_img}" alt="">
							</div>
							<div class="card__left__title">
								${item.title}
							</div>
							<div class="card__left__description card__left__description--mobile">
								${item.description}
							</div>  
						</div>
						<div class="card__mobile-wrapper">
							<div class="card__location">
								<span><i class="fa-solid fa-location-dot" style="color: #fe6540;"></i>${item.location}</span>
								<div class="card__delivery">
									<span>${item.date_finish}</span>
								</div>
							</div>
							<div class="card__rating">
								<div class="card__rating-title">${item.rating}</div>
								<div class="card__rating-stars">
									${renderStars.join('')}
								</div> 
								<div class="card__rating-window">
									${item.rating_window}  
								</div>   
							</div>
						</div>
						
						<ul class="card__advantages">
							${advantages.join('')}
						</ul>
						<div class="card__price">
							<div class="card__price-wrapper">
								<div class="card__price_title">price from</div>
								<span>$${item.price_from}</span>
							</div>
							<div class="card__price-wrapper">
								<div class="card__price_title">${item.price_percent}</div>
								<div class="card__price_imgs">
									<i class="fa-brands fa-cc-visa"></i>
									<i class="fa-brands fa-cc-mastercard"></i>
									<i class="fa-brands fa-cc-paypal"></i>
								</div>    
							</div>
						</div>
						<div class="card__buttons">
							<a href="${item.page_url}" target="_blank" class="card__button">
								learn more
							</a>
							<div class="card__buttons-text">
								free consultation and no broker's commission
							</div>
						</div>
					</div>
					<div class="card__left__description">
						${item.description}
					</div> 
					</div>	
				`
			}
			
		})

		return dataHtml
	}
	
	let index = document.location.href.indexOf("#") + 1;
	if (!index) {
		objects_list.innerHTML = filteredData().join('')
	} else {
		let result = document.location.href;
		objects_list.innerHTML = filteredData(result.substring(index, result.length)).join('')
	}

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

			objects_list.innerHTML = filteredData(tab.getAttribute('data-filter')).join('')
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
	modal6 = document.querySelector(".modal__step--6"),
	modals = document.querySelectorAll(".modal"),
	btns = document.querySelectorAll(".modal__button"),
	btnSubmit = document.querySelector(".modal__button--submit"),
	btnsClose = document.querySelectorAll(".modal__close .fa-xmark"),
	confirmModal = document.querySelector(".modal__confirm-overlay"),
	confirmClose = document.querySelector(".modal__confirm-close"),
	confirmNext = document.querySelector(".modal__confirm-next");

const selectors_step1 = document.querySelectorAll(".modal__step--1 .modal__content_variant"),
	selectors_step2 = document.querySelectorAll(".modal__checkboxs-img"),
	selectors_step4 = document.querySelectorAll(".modal__step--4 .modal__content_variant"),
	selectors_step5 = document.querySelectorAll(".modal__step--5 .modal__content_variant"),
	selectors_step6 = document.querySelector(".modal__form input"),
	step2_input = document.querySelector(".modal__bottom-input input");

const input_status = document.querySelector('input[name="status"]'),
	input_region = document.querySelector('input[name="region"]'),
	input_budget = document.querySelector('input[name="budget"]'),
	input_option = document.querySelector('input[name="option"]'),
	input_type = document.querySelector('input[name="type"]');

quizBtn.addEventListener("click", (e) => {
	e.preventDefault()
	modal6.style = "display: none;"
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
		if (i < 5) {
			modals[i].style = "display: none;"	
			modals[i + 1].style = "display: flex;"
		}
		
		if (i === 4) {
			input_status.value = result_step1
			input_region.value = result_step2 || step2_other
			input_budget.value = result_step3
			input_option.value = result_step4
			input_type.value = result_step5
		}
	})
})

// MODALS DATA



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

// btnSubmit.addEventListener("click", e => {
// 	e.preventDefault()

// 	console.log({
// 		step1: result_step1,
// 		district: step2_other ? result_step2  + ", " + step2_other : result_step2,
// 		price: result_step3,
// 		step4: result_step4,
// 		step5: result_step5,
// 		email: result_step6
// 	});


// 	quizOverlay.style = "opacity: 0; visibility: hidden;"
// 	modals.forEach(modal => {
// 		modal.style = "display: none;";
// 	})
// })

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