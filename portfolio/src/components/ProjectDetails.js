import React from 'react';
import Navigation from './Navbar';
import { useParams } from "react-router-dom";
import { detailsPages } from '../details-pages';


function ProjectDetails() {
  const { id } = useParams();

  const page = detailsPages[id];
    console.log(page?.contentEN)


  if (!page) {
    return <div className='container mt-5 pt-5'>Page not found {id}</div>;
  }
  return <div className='container mt-5 pt-5'>
        {page?.contentEN?.map((block, index) => {
        switch (block.type) {

          case "h1":
            return <h1 key={index}>{block.text}</h1>;

          case "paragraph":
            return <p key={index}>{block.text}</p>;

          case "image":
            return (
              <img
                key={index}
                src='./img/VAT-Overview.png'
                className={block.class}
                alt=""
                style={{ maxWidth: "100%" }}
              />
            );

          default:
            return null;
        }
      })}
    </div>
}

export default ProjectDetails;