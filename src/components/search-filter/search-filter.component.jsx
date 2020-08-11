import React from 'react';
import {Link} from 'react-router-dom';

import './search-filter.styles.scss';

const SearchFilter = ({images, setImages, setGalleryImg}) => {

    const showAllImages = (images,setImages) => {
        setImages([])
        setGalleryImg(images)
    }

    const showDesignImages = (images, setImages) => {
         const data = images.filter((image) => {
            return image.galleryName === 'design'
        }) 
        setImages([])
        setGalleryImg(data)
    }

    const showPatternImages = (images, setImages) => {
        const data = images.filter((image) => {
            return image.galleryName === 'pattern'
        }) 
        setImages([])
        setGalleryImg(data) 
    }

    return(
        <div className='search-filter'>
            <ul style={{'margin' : '0px'}}>
                <li><Link to='/' onClick={(e) => {
                    e.preventDefault()
                    showAllImages(images, setImages)
                }}
                    >All</Link></li>
                <li><Link to='/' onClick={(e) => {
                    e.preventDefault()
                    showDesignImages(images, setImages)
                }}
                    >Design</Link></li>
                <li><Link to='/' onClick={(e) => {
                    e.preventDefault()
                    showPatternImages(images, setImages)
                }}
                    >Patterns</Link></li>
            </ul>
        </div>
    )
}

export default SearchFilter;