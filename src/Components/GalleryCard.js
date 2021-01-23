import React, { useState } from "react";

function GalleryCard() {
  const [image, setImage] = useState();
  const [visible, setVisible] = useState("hidden");
  function hide(e) {
    setVisible("visible");

    setImage(e.target.src);
  }
  function hideagain() {
    setVisible("hidden");
  }
  return (
    <>
      <span style={{ visibility: visible }} class="image-span">
        <img
          style={{ display: visible }}
          class="visible-image"
          onClick={hideagain}
          src={image}
        ></img>
      </span>
      <div class="message new">
        <div id="card_gallery">
          <span id="gallery">
            <img
              onClick={hide}
              src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0&w=243&h=153"
            ></img>
            <img
              onClick={hide}
              src="http://thewowstyle.com/wp-content/uploads/2015/07/Natural-World-Wallpaper-HD-.jpg"
            ></img>
            <img
              onClick={hide}
              src="http://wallpapersdsc.net/wp-content/uploads/2016/10/River-Images.jpg"
            ></img>
            <img
              onClick={hide}
              src="http://thewowstyle.com/wp-content/uploads/2015/07/natural-water-bridge-hd-pictures.jpg.jpg"
            ></img>
            <img
              onClick={hide}
              src="https://images3.alphacoders.com/111/111207.jpg"
            ></img>
            <img
              onClick={hide}
              src="https://cdn.lolwot.com/wp-content/uploads/2015/12/10-of-the-most-awe-inspiring-landscapes-in-the-world-7.jpg"
            ></img>
          </span>
        </div>
      </div>
    </>
  );
}

export default GalleryCard;
