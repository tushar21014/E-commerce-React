import React from "react"
 import { usePagination } from 'use-pagination-hook'
import { tushar } from "./Mainitems";

 const ExampleComponent = () => {
   const { current, pages, display, next, previous } = usePagination({ items: props.items, size: props.size });

   return (
     <>
       <p>Currently on page {current} of {pages}</p>
       <ul>
        {tushar.map(row => {
          <li>{row.Title}</li> 
       })}
       </ul>
       <button onClick={next}>Next Page</button>
       <button onClick={previous}>Previous Page</button>
       <p>{count}</p>
     </>
    )
  }