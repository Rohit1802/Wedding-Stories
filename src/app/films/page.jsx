"use client";
import { useState } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/solid"; // Import Heroicons for play/pause

export default function Films() {
  const [playingVideo, setPlayingVideo] = useState(null); // Track the playing video
  const [isPlaying, setIsPlaying] = useState(false); // Track if the video is playing

  const videos = [
    { id: "OmPfmyze4w4", thumbnail: "https://img.youtube.com/vi/OmPfmyze4w4/hqdefault.jpg" }, // Video 1
   { id: "kJQP7kiw5Fk", thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg" }, // Video 4
    { id: "9bZkp7q19f0", thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg" }, // Video 2
    { id: "dQw4w9WgXcQ", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }, // Video 3
    { id: "tAGnKpE4NCI", thumbnail: "https://img.youtube.com/vi/tAGnKpE4NCI/hqdefault.jpg" }, // Video 5
    { id: "9bZkp7q19f0", thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg" }, // Video 6
  ];

  const togglePlayPause = (videoId) => {
    if (playingVideo === videoId) {
      setIsPlaying(!isPlaying); // Toggle play/pause state
    } else {
      setPlayingVideo(videoId);
      setIsPlaying(true); // Play new video
    }
  };

  return (
    <div className="bg-primary p-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
        <div className="my-12">
          <h2 className="text-3xl text-gray-700 font-thin tracking-[.25em]">
            INSTACUTS
          </h2>
        </div>
        <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
      </div>

      {/* Video Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="flex justify-center group">
            <div className="relative w-full max-w-[400px] h-[225px] overflow-hidden shadow-lg bg-white">
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt="video thumbnail"
                className={`w-full h-full object-cover group-hover:filter-none transition-all duration-300 ease-in-out  ${playingVideo !== video.id ? "filter grayscale" : ""}`}
              />

              {/* Play/Pause Button (No black background) */}
              {playingVideo !== video.id || !isPlaying ? (
                <button
                  className="absolute inset-0 flex items-center justify-center text-white text-6xl rounded-full hover:bg-opacity-70 transition"
                  onClick={() => togglePlayPause(video.id)}
                >
                  <PlayIcon className="w-10 h-10" />
                </button>
              ) : (
                <button
                  className="absolute inset-0 flex items-center justify-center text-white text-6xl rounded-full hover:bg-opacity-70 transition"
                  onClick={() => togglePlayPause(video.id)}
                >
                  <PauseIcon className="w-10 h-10" />
                </button>
              )}

              {/* Video iframe (only visible when playing) */}
              {playingVideo === video.id && isPlaying && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 rounded-lg"
                ></iframe>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-8">
        <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
        <div className="my-12">
          <h2 className="text-3xl text-gray-700 font-thin tracking-[.25em]">
            TRAILERS
          </h2>
        </div>
        <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="flex justify-center group">
            <div className="relative w-full max-w-[400px] h-[225px] overflow-hidden shadow-lg bg-white">
              {/* Thumbnail */}
             <img
                src={video.thumbnail}
                alt="video thumbnail"
                className={`w-full h-full object-cover group-hover:filter-none transition-all duration-300 ease-in-out  ${playingVideo !== video.id ? "filter grayscale" : ""}`}
              />

              {/* Play/Pause Button (No black background) */}
              {playingVideo !== video.id || !isPlaying ? (
                <button
                  className="absolute inset-0 flex items-center justify-center text-white text-6xl rounded-full hover:bg-opacity-70 transition"
                  onClick={() => togglePlayPause(video.id)}
                >
                  <PlayIcon className="w-10 h-10" />
                </button>
              ) : (
                <button
                  className="absolute inset-0 flex items-center justify-center text-white text-6xl rounded-full hover:bg-opacity-70 transition"
                  onClick={() => togglePlayPause(video.id)}
                >
                  <PauseIcon className="w-10 h-10" />
                </button>
              )}

              {/* Video iframe (only visible when playing) */}
              {playingVideo === video.id && isPlaying && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 rounded-lg"
                ></iframe>
              )}
            </div>
          </div>
        ))}
      </div>

            <div className="text-center my-8">
        <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
        <div className="my-12">
          <h2 className="text-3xl text-gray-700 font-thin tracking-[.25em]">
            COMPILATIONS
          </h2>
        </div>
        <hr className="border-t-1 border-gray-300 mx-auto w-2/3" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="flex justify-center group">
            <div className="relative w-full max-w-[400px] h-[225px] overflow-hidden shadow-lg bg-white">
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt="video thumbnail"
                className={`w-full h-full object-cover group-hover:filter-none transition-all duration-300 ease-in-out ${playingVideo !== video.id ? "filter grayscale" : ""}`}
              />

              {/* Play/Pause Button (No black background) */}
              {playingVideo !== video.id || !isPlaying ? (
                <button
                  className="absolute inset-0 flex items-center justify-center text-white text-6xl rounded-full hover:bg-opacity-70 transition"
                  onClick={() => togglePlayPause(video.id)}
                >
                  <PlayIcon className="w-10 h-10" />
                </button>
              ) : (
                <button
                  className="absolute inset-0 flex items-center justify-center text-white text-6xl rounded-full hover:bg-opacity-70 transition"
                  onClick={() => togglePlayPause(video.id)}
                >
                  <PauseIcon className="w-10 h-10" />
                </button>
              )}

              {/* Video iframe (only visible when playing) */}
              {playingVideo === video.id && isPlaying && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 rounded-lg"
                ></iframe>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
