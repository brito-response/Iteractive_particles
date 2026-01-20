import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export function InteractiveParticles() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {color: "#000000"},
        particles: {
          number: { value: 80 },
          color: { value: "#00aaff" },
          links: {
            enable: true,
            color: "#00aaff",
            distance: 150,
            opacity: 0.6,
          },
          move: {
            enable: true,
            speed: 1.2,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: { distance: 120 },
          },
        },
      }}
    />
  );
}
