function particles() {
  /* eslint-disable */
  particlesJS("particles-js", {
    particles: {
      number: { value: 38, density: { enable: true, value_area: 800 } },
      color: { value: "#8c5a5a" },
      shape: {
        type: "circle",
        stroke: { width: 1, color: "#a3aebe" },
        polygon: { nb_sides: 7 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.031565905665290904,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 161.7752665346159,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 299.87610382026367,
        color: "#ededed",
        opacity: 0.8759538822118227,
        width: 2.8409315098761816,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "bubble" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
}

export { particles };
