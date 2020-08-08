import React, {useState} from 'react';
import SearchFilter from '../../components/search-filter/search-filter.component';
import PageText from '../../components/page-text/page-text.component';
import Gallery from '../../components/gallery/gallery.component';
import Modal from '../../components/modal/modal.component';
import GALLERY_DATA from '../../localdata/gallery.data';


import './work.styles.scss';

const Work = () => {

    const [selectedImg, setSelectedImg] = useState(null)
    const [images, setImages] = useState(GALLERY_DATA)

    return(
    <div className='work'>
        <PageText name='designs & patterns' above='work' />
        <div className='sf-ga'>
            <SearchFilter images={GALLERY_DATA} setImages={setImages} />
            <Gallery setSelectedImg={setSelectedImg} images={images}/>
            { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    </div>
    )
}    

export default Work;