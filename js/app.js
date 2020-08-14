/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0,
            "random": false
        },
        "size": {
            "value": 2,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.22
        },
        "move": {
            "enable": true,
            "speed": 1.1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 200,
                "size": 2,
                "duration": 2,
                "opacity": 1,
                "speed": 3
            }
        }
    },
    "retina_detect": true
});