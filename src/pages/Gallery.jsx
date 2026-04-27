import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  
  // Generate array of photo paths
  const photos = Array.from({ length: 39 }, (_, i) => ({
    id: i + 1,
    src: `${import.meta.env.BASE_URL}contest_${i + 1}.jpeg`,
    alt: `Nathan's Nathan's Contest Photo ${i + 1}`
  }))

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>PHOTO GALLERY</h1>
        <p>Moments of glory, determination, and hot dog consumption</p>
      </div>

      <div className="gallery-grid">
        {photos.map(photo => (
          <div 
            key={photo.id} 
            className="gallery-item"
            onClick={() => setLightbox(photo.src)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <div className="gallery-overlay">
              <span>View Full Size</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-content">
            <img src={lightbox} alt="Full size" />
            <button className="lightbox-close" onClick={() => setLightbox(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
