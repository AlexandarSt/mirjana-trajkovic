import React from 'react';
import SearchFilter from '../../components/search-filter/search-filter.component';
import PageText from '../../components/page-text/page-text.component';
import Gallery from '../../components/gallery/gallery.component';


import './work.styles.scss';

const Work = () => (
    <div className='work'>
        <PageText name='designs & patterns' above='work' />
        <div className='sf-ga'>
            <SearchFilter />
            <Gallery />
        </div>
    </div>
)

export default Work;