/* =====================================================
   WEDDING INVITATION JAVASCRIPT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* =================================================
           BACKGROUND MUSIC
        ================================================= */

        const music =
            document.getElementById("weddingMusic");

        if (music) {

            // Set music volume
            music.volume = 0.7;

            // Try to start music
            function startMusic() {

                music.play().then(
                    function () {
                        console.log("Wedding music started.");
                    }
                ).catch(
                    function (error) {
                        console.log(
                            "Autoplay blocked by browser:",
                            error
                        );
                    }
                );

            }

            /*
             * Try autoplay when the page loads.
             */
            window.addEventListener(
                "load",
                function () {
                    startMusic();
                }
            );


            /*
             * If the browser blocks autoplay,
             * start music when the visitor first
             * touches or clicks the invitation.
             */
            document.addEventListener(
                "touchstart",
                startMusic,
                { once: true }
            );

            document.addEventListener(
                "click",
                startMusic,
                { once: true }
            );

        }


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
