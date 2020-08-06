import React from 'react';
import {Link} from 'react-router-dom';

import './search-filter.styles.scss';

const SearchFilter = () => {
    return(
        <div className='search-filter'>
            <ul style={{'margin' : '0px'}}>
                <li><Link>All</Link></li>
                <li><Link>Design</Link></li>
                <li><Link>Patterns</Link></li>
            </ul>
        </div>
    )
}

export default SearchFilter;