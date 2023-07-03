import React from 'react'

const WorksItem = ({item}) => {
  return (
   <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <p className="text__description">{item.text}</p>
   </div>
  );
}

export default WorksItem
