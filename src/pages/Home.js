import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { Layout } from "../components/Layout";
import { Helmet } from 'react-helmet'



const HomePage = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <title>Tu app de fotos de mascotas</title>      
        <meta name='description' content='Con petgran puedes encontar fotos de animales domésticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) =>{
  return prevProps.categoryId ===props.categoryId
})