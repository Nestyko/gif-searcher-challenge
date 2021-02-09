import React from 'react';

import "../styles.css";

const Image = ({ image }) => {

    const { images: { preview_gif: { url } }} = image;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 image">
            <div className="card">
                <img src={url} className="card-img-top" />
            </div>
        </div>
    );
}

export default Image;