import React from 'react'

const StickyIcon1 = () => {
  return (


    <div className='animate-opacity '>
    <div className='ml-2 inner-div fixed bottom-72 z-10 right-2  '>
        <a href="https://www.facebook.com/">
            <img
              className="w-12 h-12 hover:animate-spin transition-transform"
              src="./images/facebook.webp"
              alt=""
            />
            </a>
              <a href="https://www.instagram.com/">
              <img
              className="w-12 h-12 my-4 hover:animate-spin transition-transform"
              src="./images/instagram.webp"
              alt=""
            />
            </a>
        <a href="https://www.youtube.com/"><img
              className="w-12 h-12 my-4 hover:animate-spin transition-transform"
              src="\public\images\youtube.webp"
              alt=""
            /></a>
            <a href="https://twitter.com/"><img
              className="w-10 h-8 hover:animate-spin transition-transform"
              src="public/images/logo-black.png.twimg.1920.png"
              alt=""
            /></a>
    </div>
</div>

  );
};

export default StickyIcon1