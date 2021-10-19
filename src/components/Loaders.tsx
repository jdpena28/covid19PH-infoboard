import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const override = `
  position: absolute;
  top:40%;
  left:0;
  right:0;
  margin:auto;
  border-color: violet;
`;


const Loaders = ({loading}:{loading:boolean}) => {
    return (
        <RingLoader color={'#9a32ef'} loading={loading} css={override} size={130} />
    )
}

export default Loaders
