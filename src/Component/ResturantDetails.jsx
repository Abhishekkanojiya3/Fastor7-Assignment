import React, { useState, useEffect } from 'react';
import './resturantDetail.css';

function RestaurantDetails(props) {
     const {rest} = props;  

  return (
    <>
      {rest ? (
        <div>
        <div className='image'>
        </div>
            
            <footer>
                <div className='outer-div'>
                   <div className='detail-rating'>
                        <div className='returant_details'>
                            <p className='rest_name'>{rest.restaurant_name}</p>
                            <p className='rest_loc'>{rest.location.location_locality}</p>
                        </div>
                        <div className='ratings'>
                            <span>{rest.rating.restaurant_avg_rating}</span>
                        </div>
                   </div>
                    <div className='trending'>

                        <span >4 offers Trending</span>
                    </div>
                    <p className='description'>Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache</p>
                </div>
            </footer>
         </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default RestaurantDetails;