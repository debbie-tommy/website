import { CustomCursor, Navigation, Hero, Skills, Projects, LoadingScreen } from './components';
import { useCallback, useState, useEffect } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import Experience from './components/Experience';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#1a1a2e",
            },
          },
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#4facfe", "#00f2fe", "#ffffff"]
            },
            shape: {
              type: ["circle", "triangle", "square"],
              options: {
                triangle: {
                  sides: 3
                },
                square: {
                  sides: 4
                }
              }
            },
            opacity: {
              value: 0.6,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#4facfe",
              opacity: 0.4,
              width: 1,
              triangles: {
                enable: true,
                color: "#4facfe",
                opacity: 0.1
              }
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce"
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "grab"
                },
                onClick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 1
                  }
                },
                push: {
                  quantity: 4
                }
              }
            }
          },
          detectRetina: true
        }}
      />
      <CustomCursor />
      <Navigation />
      <main className="fade-in">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
