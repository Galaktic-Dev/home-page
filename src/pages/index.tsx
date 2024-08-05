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
        <p className="text-4xl text-white">Under Construction</p>
      </main>
      <style jsx global>{`
        body {
          background: linear-gradient(to bottom, #2e026d, #15162c);
          margin: 0;
          padding: 0;
          transition: background 0.2s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
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
      `}</style>
    </>
  );
}
