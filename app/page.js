"use client";
import "./globals.css";

async function findNearby() {
  try {
    const response = await fetch(
      "https://api.pexels.com/videos/search?query=paris",
      {
        headers: {
          Authorization: "J6HYDTe5EzmsSFCbTQ78wF1T3gYCd1n7vbckYjOc34KvN2kWtSjf5Q2M",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error in fetching:", err);
  }
}

export default function Home() {
  return (
    <div className="hero-section">
      {/* Background video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source
          src="https://videos.pexels.com/video-files/5243307/5243307-hd_1280_720_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay (optional, for dark effect) */}
      <div className="hero-overlay"></div>

      {/* Foreground content */}
      <div className="hero-content">
        <h1>Historical Places Explorer</h1>
        <p>
          Discover fascinating historical landmarks and cultural <br />
          sites near you. Explore centuries of history right in your
          neighborhood.
        </p>
        <button className="btn" onClick={findNearby}>
          Find Places Near Me
        </button>
      </div>
    </div>
  );
}
