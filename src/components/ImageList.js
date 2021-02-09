import React from 'react';
import Image from './Image';

const ImageList = ({ images }) => {
    return (
        <div className="col-12 p-5 row">
            { images.length > 0 ? images.map(image => (
                <Image
                    key={image.id}
                    image={image}
                />
            )) : <p>No gif found according to search</p>}

        </div>
    );
}

export default ImageList;