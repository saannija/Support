document.addEventListener('DOMContentLoaded', function() {
    const grayButton = document.querySelector(".js-gray");
    const purpleButton = document.querySelector(".js-purple");
    const navyButton = document.querySelector(".js-navy");
    const yellowButton = document.querySelector(".js-yellow");

    // Function to update root colors and store the selected color in localStorage
    function updateColors(rootColor) {
        const edgeColor = getComputedStyle(document.documentElement).getPropertyValue(`--${rootColor}-edge`);
        const darkColor = getComputedStyle(document.documentElement).getPropertyValue(`--${rootColor}-dark`);
        const middleColor = getComputedStyle(document.documentElement).getPropertyValue(`--${rootColor}-middle`);
        const middleOColor = getComputedStyle(document.documentElement).getPropertyValue(`--${rootColor}-middleO`);

        document.documentElement.style.setProperty('--edge', edgeColor);
        document.documentElement.style.setProperty('--dark', darkColor);
        document.documentElement.style.setProperty('--middle', middleColor);
        document.documentElement.style.setProperty('--middleO', middleOColor);

        localStorage.setItem('LiebusEdgeColor', edgeColor);
        localStorage.setItem('LiebusDarkColor', darkColor);
        localStorage.setItem('LiebusMiddleColor', middleColor);
        localStorage.setItem('LiebusMiddleOColor', middleOColor);
    }

    // Retrieve the stored colors or default to --gray, --dark, --middle, and --middleO
    const storedEdgeColor = localStorage.getItem('LiebusEdgeColor');
    const storedDarkColor = localStorage.getItem('LiebusDarkColor');
    const storedMiddleColor = localStorage.getItem('LiebusMiddleColor');
    const storedMiddleOColor = localStorage.getItem('LiebusMiddleOColor');

    if (storedEdgeColor || storedDarkColor || storedMiddleColor || storedMiddleOColor) {
        // If any color is stored, use it
        document.documentElement.style.setProperty('--edge', storedEdgeColor);
        document.documentElement.style.setProperty('--dark', storedDarkColor);
        document.documentElement.style.setProperty('--middle', storedMiddleColor);
        document.documentElement.style.setProperty('--middleO', storedMiddleOColor);
    } else {
        // If no color is stored, default to gray
        updateColors("gray");
    }

    grayButton.addEventListener('click', function() {
        updateColors("gray");
    });

    purpleButton.addEventListener('click', function() {
        updateColors("purple");
    });

    navyButton.addEventListener('click', function() {
        updateColors("navy");
    });

    yellowButton.addEventListener('click', function() {
        updateColors("yellow");
    });

        let slides = document.getElementsByClassName("slide");
        let slideIndex = 0;
        let slideTimeout;

        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;

            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            slides[slideIndex - 1].style.display = "block";

            slideTimeout = setTimeout(showSlides, 5000); // Set timeout for 5 seconds
        }

        function plusSlides(n) {
            clearTimeout(slideTimeout); // Clear the existing timeout

            // Adjust the slide index based on the button clicked
            slideIndex += n;

            // If the index is out of bounds, reset it
            if (slideIndex > slides.length) {
                slideIndex = 1;
            } else if (slideIndex < 1) {
                slideIndex = slides.length;
            }

            showSlides(); // Call showSlides immediately after adjusting index
        }

        // Attach event listeners to arrow buttons
        document.querySelector(".prev").addEventListener('click', function () {
            plusSlides(-1);
        });

        document.querySelector(".next").addEventListener('click', function () {
            plusSlides(1);
        });

        // Start the slideshow after a short delay to avoid conflict with button clicks
        setTimeout(showSlides, 1000);

        let mybutton = document.getElementById("myBtn");

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        mybutton.onclick = topFunction;
    });