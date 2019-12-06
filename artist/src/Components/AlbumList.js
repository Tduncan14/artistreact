import React from 'react'



const AlbumList = ({albums}) =>{


  console.log(albums)



  const ShowList = (albums) => (

   albums ? albums.map((item,index)=>(
   <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
  )): null

  )
 


 
 

 return (
    <div className="albums_list">
      {

    ShowList(albums)
      }
    </div>
 )




 }


export default AlbumList;




