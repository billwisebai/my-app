import React from 'react';
import './ImgLayout.css';

const ImgLayout = () => {
    const imgList = [
        {"url": "https://images.pexels.com/photos/11376797/pexels-photo-11376797.jpeg"},
        {"url": "https://images.pexels.com/photos/10433031/pexels-photo-10433031.jpeg"},
        {"url": "https://images.pexels.com/photos/18607904/pexels-photo-18607904/free-photo-of-vineta-auf-dem-stormthaler-see.png"},
        {"url": "https://images.pexels.com/photos/17715085/pexels-photo-17715085/free-photo-of-brown-bear.jpeg"},
        {"url": "https://images.pexels.com/photos/18137869/pexels-photo-18137869/free-photo-of-chinese-pavilion-in-by-pond.jpeg"},
        {"url": "https://images.pexels.com/photos/8869973/pexels-photo-8869973.jpeg"},
        {"url": "https://images.pexels.com/photos/10433031/pexels-photo-10433031.jpeg"},
        {"url": "https://images.pexels.com/photos/18607904/pexels-photo-18607904/free-photo-of-vineta-auf-dem-stormthaler-see.png"},
        {"url": "https://images.pexels.com/photos/18137869/pexels-photo-18137869/free-photo-of-chinese-pavilion-in-by-pond.jpeg"},
        {"url": "https://images.pexels.com/photos/8869973/pexels-photo-8869973.jpeg"},
    ];
    const imgItems = imgList.map((item) => 
        <div className="image-box" >
            <img src={item.url} alt="" />
        </div>
    )
    return(
        <>
            <div className='page'>
                <div className="waterfall-width-column">
                    {imgItems}
                </div>
            </div>

        </>

    )
}

export default ImgLayout