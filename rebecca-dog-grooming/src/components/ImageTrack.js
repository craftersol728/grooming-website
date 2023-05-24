import React, { useRef } from 'react';
import './ImageTrack.css'; // assuming you moved the CSS to ImageTrack.css

const ImageTrack = () => {
  const track = useRef(null);
  if (track.current) {
    track.current.dataset.mouseDownAt = "0";
    track.current.dataset.prevPercentage = "0";
    track.current.dataset.percentage = "0";
  }

  const handleOnDown = (e) => {
    track.current.dataset.mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    track.current.dataset.mouseDownAt = "0";
    track.current.dataset.prevPercentage = track.current.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (track.current.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX;
    if (isNaN(mouseDelta)) return;

    const maxDelta = window.innerWidth / 2;
    if (isNaN(maxDelta)) return;

    const percentage = (mouseDelta / maxDelta) * -100;
    if (isNaN(percentage)) return;

    const nextPercentageUnconstrained = parseFloat(track.current.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        console.log(`mouseDelta: ${mouseDelta}, maxDelta: ${maxDelta}, percentage: ${percentage}, nextPercentageUnconstrained: ${nextPercentageUnconstrained}, nextPercentage: ${nextPercentage}`); // logging variables

    if (isNaN(nextPercentage)) return;

    track.current.dataset.percentage = nextPercentage;

    for (const image of track.current.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
};


  return (
    <div>
      <div
        id="image-track"
        ref={track}
        onMouseDown={handleOnDown}
        onMouseUp={handleOnUp}
        onMouseMove={handleOnMove}
        onTouchStart={handleOnDown}
        onTouchEnd={handleOnUp}
        onTouchMove={handleOnMove}
      >
        {/* your img tags here */}
        <img className="image" src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" draggable="false" alt=""/>
        <img className="image" src="https://plus.unsplash.com/premium_photo-1668062459497-c1940ef494ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" draggable="false" alt="" />
        <img className="image" src="https://images.unsplash.com/photo-1617129724623-84f1d2fd78f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" draggable="false" alt=""/>
        <img className="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" alt=""/>
        <img className="image" src="https://images.unsplash.com/photo-1514373941175-0a141072bbc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" draggable="false" alt=""/>
        <img className="image" src="https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" draggable="false" alt=""/>
        <img className="image" src="https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" draggable="false" alt=""/>
        <img className="image" src="https://images.unsplash.com/photo-1527526029430-319f10814151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" draggable="false" alt=""/>
  </div>
        
      <a id="source-link" className="meta-link" href="https://camillemormal.com" target="_blank" rel="noreferrer">
        <i className="fa-solid fa-link"></i>
        <span>Source</span>
      </a>
    </div>
  );
};

export default ImageTrack;
