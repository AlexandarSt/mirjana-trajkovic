import React from 'react';
// import GALLERY_DATA from '../../localdata/gallery.data';
import {motion} from 'framer-motion';

import './gallery.styles.scss';

const Gallery = ({setSelectedImg, images}) => {

    // const [images, setImages] = useState(GALLERY_DATA);

    return(
        <div className='gallery'>    
            {images.map(image => {
                return (
                <motion.div className='img-wrap' key={image.id}
                layout
                whileHover={{ opacity: 1 }}s
                onClick={() => setSelectedImg(image.imageUrl)}
                >
                    <motion.img src={image.imageUrl} alt="Art"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    />
                </motion.div>
                )  
            })}
        </div>
    )
}

export default Gallery;