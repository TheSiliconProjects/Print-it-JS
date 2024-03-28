
/* VARIABLE DECLARATIONS */
/* --------------------- */

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dotlistener = []

let ActiveSlide = 1;

/* FUNCTIONS SECTION */
/* ----------------- */


/* Add Function : bottom Dots  */

function  AddDot(SlideNumber,ActiveSlide) {

	let NewDot = document.querySelector('.dots');

	if (SlideNumber === ActiveSlide) {

	let AddSpan = `

	<span class="dot dot_selected" id="dotnumber-${SlideNumber}"></span>
	
	`;

	NewDot.innerHTML += AddSpan;


	} else {

	let AddSpan = `

	<span class="dot" id="dotnumber-${SlideNumber}"></span>
	
	`;

	NewDot.innerHTML += AddSpan;

	};


};


/* Add function : Update Slides */

function  UpdateSlides(PreviousActive,ActiveSlide) {

	/* update active dot */
	document.getElementById("dotnumber-" + PreviousActive).classList.remove("dot_selected");
	document.getElementById("dotnumber-" + ActiveSlide).classList.add("dot_selected");
	
	/* update image */

	document.getElementById("banner").querySelector(".banner-img").src="./assets/images/slideshow/"+ slides[ActiveSlide - 1].image;

	/* update tagline */

	let NewTagLine = document.getElementById("banner").querySelector("p")

	let AddTagLine = `

	${slides[ActiveSlide - 1 ].tagLine}
	
	`;

	NewTagLine.innerHTML = AddTagLine;



}

	

/* EVENT LISTENER SECTION */
/* ---------------------- */

/* Listen : Right image click */


let ArrowRightClick = document.getElementById("arrow-right-image");

ArrowRightClick.addEventListener("click", function () {

	PreviousActive = ActiveSlide;
	
	ActiveSlide++;

			if (ActiveSlide === slides.length + 1) {

			ActiveSlide = 1;

			};

			UpdateSlides (PreviousActive,ActiveSlide);

});

/* Listen : left Image Click */

let ArrowLeftClick = document.getElementById("arrow-left-image");
ArrowLeftClick.addEventListener("click", function () {

	PreviousActive = ActiveSlide;

	ActiveSlide--;

	if (ActiveSlide === 0) {

		ActiveSlide = slides.length;

	};
	
	UpdateSlides (PreviousActive,ActiveSlide);


});



/* Main section */
/* ------------ */


/* Init Bottom Dots */

for (let SlideNumber = 1; SlideNumber <= slides.length; SlideNumber++ ) {

		AddDot(SlideNumber,ActiveSlide)
		
};


/* Add clickeable dots */

document.getElementById("dotnumber-1").addEventListener("click", function () {
	
		let PreviousActive = ActiveSlide;
		UpdateSlides(PreviousActive,1);
		ActiveSlide = 1;

});


document.getElementById("dotnumber-2").addEventListener("click", function () {

	let PreviousActive = ActiveSlide;
	UpdateSlides(PreviousActive,2);
	ActiveSlide = 2;
	
});

document.getElementById("dotnumber-3").addEventListener("click", function () {
	
		let PreviousActive = ActiveSlide;
		UpdateSlides(PreviousActive,3);
		ActiveSlide = 3; 

});

document.getElementById("dotnumber-4").addEventListener("click", function () {
	
	let PreviousActive = ActiveSlide;
	UpdateSlides(PreviousActive,4);
	ActiveSlide = 4; 

});

