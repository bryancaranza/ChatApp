import { ISourceOptions } from "@tsparticles/engine";

export const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "attract",
      },
      onHover: {
        enable: true,
        mode: "connect",
        parallax: {
          enable: true,
          force: 20,
          smooth: 100,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 30,
        duration: 0.4,
      },
      connect: {
        distance: 40,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      attract: {
        distance: 100,
        duration: 2,
        easing: "ease-out-sine",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
    },
  },
  particles: {
    collisions: {
      absorb: {
        speed: 2,
      },
      enable: true,
      maxSpeed: 50,
      mode: "absorb",
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: "#ffffff",
    },
    links: {
      blink: true,
      color: {
        value: "#fff",
      },
      consent: false,
      distance: 20,
      enable: true,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    move: {
      angle: {
        offset: 0,
        value: 10,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: "top-right",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 0.5,
      },
      path: {
        clamp: true,
        delay: {
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 0.5,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fill: {},
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 900,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  emitters: {
    autoPlay: true,
    fill: true,
    life: {
      wait: false,
    },
    rate: {
      quantity: 1,
      delay: 2,
    },
    shape: {
      options: {},
      replace: {
        color: false,
        opacity: false,
      },
      type: "square",
    },
    startCount: 2,
    size: {
      mode: "percent",
      height: 0,
      width: 0,
    },
    particles: {
      shape: {
        type: "images",
        options: {
          images: {
            src: "https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png",
            width: 300,
            height: 434,
          },
        },
      },
      size: {
        value: 40,
      },
      move: {
        speed: 10,
        outModes: {
          default: "none",
          right: "destroy",
        },
        straight: true,
      },
      zIndex: {
        value: 0,
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 10,
          sync: true,
        },
      },
    },
    position: {
      x: -5,
      y: 55,
    },
  },
  detectRetina: true,
};
