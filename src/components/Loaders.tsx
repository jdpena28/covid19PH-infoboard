import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const override = `
  display: block;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin: auto;
  border-color: violet;
`;


const Loaders = ({loading}:{loading:boolean}) => {
    return (
        <div className='relative h-screen w-[100vw] bg-gray-900 font-primary text-4xl text-gray-200'>
            <RingLoader color={'#9a32ef'} loading={loading} css={override} size={100} />
        </div>
    )
}

export default Loaders
