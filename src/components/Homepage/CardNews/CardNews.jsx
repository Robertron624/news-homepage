import React from 'react'

const miniNews = [
  {
    title: 'Hydrogen VS Electric Cars',
    description: 'Will hydrogen-fueled cars ever catch up to EVs?',
    id: '1'
  },
  {
    title: 'The Downsides of AI Artistry',
    description: 'What are the possible adverse effects of on-demand AI image generation?',
    id: '2'
  },
  {
    title: 'Is VC Funding Drying Up?',
    description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    id: '3'
  },
]

const CardNews = () => {
  return (
    <div className='cards__container'>
      <p className='cards__title'>New</p>
      {miniNews.map((miniNew) => (
        <div key={miniNew.id}>
          <p>{miniNew.title}</p>
          <p>{miniNew.description}</p>
        </div>
      ))}
    </div>
  )
}

export default CardNews