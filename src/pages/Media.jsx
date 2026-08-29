import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNavigation from '../components/PageNavigation';

// Helper function to extract YouTube Video ID
const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper function to convert share links to embed URLs
const getYouTubeEmbedUrl = (url) => {
  const videoId = getYouTubeId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const Media = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ADD YOUR LOCAL VIDEOS AND YOUTUBE URLS HERE
  const videosList = [
    {
      id: 1,
      type: "youtube",
      videoUrl: "https://youtu.be/Zm_oF1AZHdM?si=CvEK83DldLbCepb6"
    },
    {
      id: 2,
      type: "youtube",
      videoUrl: "https://youtu.be/lSsQUYtb8Jw?si=p4N3LCM6uQZnscyn"
    },
    {
      id: 3,
      type: "local",
      title: "Connect Her",
      author: "Lok Swar",
      videoUrl: "/video/Connect HER 2026 Video of Mothers_ Football Team.mp4", // Path relative to public folder
      thumbnail: "/img/localvideothumbnail/v1.png" // Path to thumbnail image in public folder
    }
  ];

  useEffect(() => {
    const fetchYouTubeData = async () => {
      const items = await Promise.all(
        videosList.map(async (item) => {
          // If it's a local video, return its details directly
          if (item.type === "local") {
            return {
              id: item.id,
              type: "local",
              title: item.title || "Local Video",
              author: item.author || "Upload",
              thumbnail: item.thumbnail || "",
              videoUrl: item.videoUrl
            };
          }

          // Otherwise, fetch YouTube oEmbed data
          const videoId = getYouTubeId(item.videoUrl);
          let title = "YouTube Video";
          let author = "";

          try {
            const response = await fetch(
              `https://noembed.com/embed?url=${encodeURIComponent(item.videoUrl)}`
            );
            const data = await response.json();
            if (data.title) title = data.title;
            if (data.author_name) author = data.author_name;
          } catch (err) {
            console.error("Failed to fetch YouTube details:", err);
          }

          const thumbnail = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : "";

          return {
            id: item.id,
            type: "youtube",
            title,
            author,
            thumbnail,
            embedUrl: getYouTubeEmbedUrl(item.videoUrl)
          };
        })
      );

      setMediaItems(items);
      setLoading(false);
    };

    fetchYouTubeData();
  }, []);

  return (
    <>
      <Header />
      <PageNavigation title="Video Gallery" />
      <div className="container my-5 px-4">

        {/* VIDEO GRID */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading videos...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {mediaItems.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4 animate-grid-item">
                <div 
                  className="gallery-card position-relative overflow-hidden bg-dark border-0 cursor-pointer"
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                    height: "320px"
                  }}
                  onClick={() => setSelectedVideo(item)}
                >
                  {/* Thumbnail */}
                  {item.thumbnail ? (
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-100 h-100 object-fit-cover gallery-img" 
                    />
                  ) : (
                    <div className="w-100 h-100 bg-secondary d-flex align-items-center justify-content-center text-white">
                      No Thumbnail
                    </div>
                  )}

                  {/* Play Button Icon */}
                  <div className="position-absolute top-50 start-50 translate-middle z-2 play-icon-wrapper">
                    <div className="play-button bg-white rounded-circle d-flex align-items-center justify-content-center shadow">
                      <span className="text-primary fs-4 ms-1">▶</span>
                    </div>
                  </div>

                  {/* Overlay Details */}
                  <div className="gallery-overlay position-absolute bottom-0 start-0 end-0 p-4 d-flex flex-column justify-content-end text-start">
                    {item.author && (
                      <span className="text-white-50 small mb-1 fw-medium">{item.author}</span>
                    )}
                    <h4 className="text-white fw-bold m-0 text-truncate-2" style={{ fontSize: "1.1rem" }}>
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LIGHTBOX / VIDEO MODAL */}
        {selectedVideo && (
          <div 
            className="modal fade show d-block" 
            tabIndex="-1" 
            style={{ backgroundColor: "rgba(0, 0, 0, 0.85)", zIndex: 1050 }}
            onClick={() => setSelectedVideo(null)}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content bg-dark border-0 position-relative text-white overflow-hidden" style={{ borderRadius: "16px" }}>
                <button 
                  type="button" 
                  className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
                  onClick={() => setSelectedVideo(null)}
                ></button>
                <div className="modal-body p-0">
                  <div className="ratio ratio-16x9">
                    {selectedVideo.type === "youtube" ? (
                      <iframe 
                        src={`${selectedVideo.embedUrl}?autoplay=1`} 
                        title={selectedVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video 
                        src={selectedVideo.videoUrl} 
                        controls 
                        autoPlay 
                        className="w-100 h-100"
                      />
                    )}
                  </div>
                  <div className="p-4 text-start">
                    <h5 className="m-0 fw-bold">{selectedVideo.title}</h5>
                    {selectedVideo.author && (
                      <span className="text-white-50 small d-block mt-1">{selectedVideo.author}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STYLES */}
        <style>{`
          .max-w-600 { max-width: 600px; }
          .tracking-wider { letter-spacing: 1px; }
          .cursor-pointer { cursor: pointer; }
          
          .gallery-card .gallery-img {
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          .gallery-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%);
            height: 50%;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .play-button {
            width: 54px;
            height: 54px;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .gallery-card:hover .play-button {
            transform: scale(1.15);
            background-color: #0d6efd !important;
          }

          .gallery-card:hover .play-button span {
            color: #ffffff !important;
          }

          .gallery-card:hover .gallery-img {
            transform: scale(1.08);
          }

          .text-truncate-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
          }

          .animate-grid-item {
            animation: fadeInUp 0.4s ease-out forwards;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

      </div>
      <Footer />
    </>
  );
};

export default Media;