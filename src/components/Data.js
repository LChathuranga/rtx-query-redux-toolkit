import React from 'react'
import { useGetAllProductsQuery, useGetProductQuery } from '../features/apiSlice'

function Data() {
  const {data: allProductsData, error, isError, isLoading: isGetAllProductsDataLoading} = useGetAllProductsQuery();
  const {data: singleProductData} = useGetProductQuery("iphone");

  console.log(allProductsData);
  console.log(singleProductData);
  if (isGetAllProductsDataLoading) {
    return(<h1>Loading ...</h1>)
  }
  return (
    <div>Data</div>
  )
}

export default Data