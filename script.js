/* =====================================================
   WEDDING INVITATION JAVASCRIPT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicButton.classList.add("playing");
        musicButton.textContent = "♫";

    } else {

        music.pause();

        musicButton.classList.remove("playing");
        musicButton.textContent = "♪";

    }

});

        /* =================================================
           SCROLL REVEAL
        ================================================= */

        const revealElements =
            document.querySelectorAll(
                ".reveal, .event-card"
            );


        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("show");


                                /*
                                 * Animation happens only once.
                                 */

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.15,

                    rootMargin:
                        "0px 0px -70px 0px"
                }

            );


        revealElements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );



        /* =================================================
           SMOOTH SCROLL
        ================================================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function (event) {

                            const targetId =
                                this.getAttribute(
                                    "href"
                                );


                            /*
                             * Ignore empty #
                             */

                            if (
                                targetId === "#"
                            ) {
                                return;
                            }


                            const target =
                                document.querySelector(
                                    targetId
                                );


                            if (target) {

                                event.preventDefault();


                                target.scrollIntoView({
                                    behavior:
                                        "smooth",

                                    block:
                                        "start"
                                });

                            }

                        }
                    );

                }
            );



        /* =================================================
           PARALLAX FLOWERS
        ================================================= */

        const flowers =
            document.querySelectorAll(
                ".flower"
            );


        window.addEventListener(
            "scroll",
            function () {

                const scroll =
                    window.scrollY;


                flowers.forEach(
                    function (flower, index) {

                        const speed =
                            index % 2 === 0
                                ? 0.04
                                : -0.03;


                        /*
                         * Keep the movement subtle.
                         */

                        flower.style.transform =
                            `translateY(${scroll * speed}px)`;

                    }
                );

            },
            {
                passive: true
            }
        );


    }
);
