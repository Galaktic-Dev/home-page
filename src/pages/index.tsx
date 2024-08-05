import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const color1 = `rgba(${Math.floor(255 * x)}, 50, 200, 1)`;
      const color2 = `rgba(${Math.floor(255 * y)}, 50, 200, 1)`;
      document.body.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;

      const cursor = document.querySelector(".custom-cursor");
      const cursorEffect = document.querySelector(".cursor-effect");

      if (cursor instanceof HTMLElement) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }

      if (cursorEffect instanceof HTMLElement) {
        cursorEffect.style.left = `${e.clientX}px`;
        cursorEffect.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Galaktic Dev</title>
        <meta name="description" content="Galaktic Dev Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className="title">Under Construction</h1>
      </main>
      <div className="custom-cursor"></div>
      <div className="cursor-effect"></div>
      <style jsx global>{`
        body {
          background: linear-gradient(to bottom, #2e026d, #15162c);
          margin: 0;
          padding: 0;
          transition: background 0.2s ease;
          overflow: hidden;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          flex-direction: column;
        }
        .title {
          font-size: 2rem;
          color: white;
        }
        .custom-cursor,
        .cursor-effect {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
        }
        .custom-cursor {
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }
        .cursor-effect {
          width: 50px;
          height: 50px;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition:
            width 0.2s ease,
            height 0.2s ease,
            background-color 0.2s ease;
        }
        .custom-cursor:hover + .cursor-effect {
          width: 70px;
          height: 70px;
          background-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
}
