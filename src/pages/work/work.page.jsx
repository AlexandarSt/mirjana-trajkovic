import React, {useState, useEffect, useRef} from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

import SearchFilter from '../../components/search-filter/search-filter.component';
import PageText from '../../components/page-text/page-text.component';
import Gallery from '../../components/gallery/gallery.component';
import Modal from '../../components/modal/modal.component';
import GALLERY_DATA from '../../localdata/gallery.data';

import './work.styles.scss';


const Work = () => {

    const [selectedImg, setSelectedImg] = useState(null)
    const [images, setImages] = useState([])
    const [galleryImg, setGalleryImg] = useState(GALLERY_DATA)

    let imagesPerPage = 8
    let arrayOfImages = []
    let ref = useRef(imagesPerPage)

    const loopWithSlice = (start, end) => {
        const slicedImages = galleryImg.slice(start, end)
        arrayOfImages = images.concat(slicedImages)
        setImages(arrayOfImages)  
        console.log(arrayOfImages)
      }
    
    useEffect(() => {
        loopWithSlice(0, imagesPerPage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        imagesPerPage = 8
        ref.current = imagesPerPage 
        loopWithSlice(0, imagesPerPage)
    }, [galleryImg])

    const handleShowMore = () => {
        loopWithSlice(ref.current, ref.current + imagesPerPage)
        ref.current += imagesPerPage
    }

    const props = {
        setImages,
        setGalleryImg,
    }

    return(
    <div className='work'>
        <PageText name='designs & patterns' above='work' />
        <div className='sf-ga'>
            <SearchFilter images={GALLERY_DATA} {...props}/>
            <Gallery
                setSelectedImg={setSelectedImg}
                images={images}
            />
            { 
               images.length === galleryImg.length ? '' : <button className='loadmore' onClick={handleShowMore}>Load more</button>
            }
            { selectedImg && (
            <Modal
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
            />
            )}
        </div>
    </div>
    )
}    

export default Work;