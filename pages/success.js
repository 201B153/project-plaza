import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { client } from '../lib/client';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const fetchCollectionData = async () => {
  const query = `*[_type == "product" ] {_id, 
    "manuscriptURL": manuscript.asset->url,
     manuscript
    }`

  const products = await sanityClient.fetch(query)

  // the query returns 1 object inside of an array
  // await setCollection(collectionData[0])
}
// const sortMoviesBy = (item, type) => async (dispatch) => {
//   try {
//     dispatch({
//       type: MOVIES_SORT_REQUEST
//     });
//     const data = await sanityAPI.fetch(
//       `*[_type == 'movie']{                                
//                 _id,                                               
//                 "poster" : poster.asset->url,    
//                 title
//                 } | order( ${item} ${type})`
//     );
//     dispatch({
//       type: MOVIES_SORT_SUCCESS,
//       payload: data
//     });
//   } catch (error) {
//     dispatch({
//       type: MOVIES_SORT_FAIL,
//       payload: error.message
//     });
//   }
// };

const Success = ({ products }) => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [setCartItems, setTotalPrice, setTotalQuantities]);

  // const getUrlFromId = products => {
  //   const [_file, id, extension] = ref.split('-');
  //   return `https://cdn.sanity.io/files/${vfxfwnaw}/${production}/${id}.${webp}`
  // }  

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your Purchase!</h2>
        <div>
          <button type="button" width="300px" className="btn"
          onClick={() => {products}}>
            Download Your Zip File
          </button>
        </div>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions or issue with transactions, please email us at
          <a className="email" href="mailto:PP201b153@gmail.com">
            PP201b153@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Search
          </button>
        </Link>
      </div>
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   return {
//     props: { products }
//   }
// }

export default Success