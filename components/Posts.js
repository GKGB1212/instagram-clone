import React from 'react'
import Post from './Post'

const lst = [
  {
    id: '123',
    username: 'g.kgb',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'The shoe store app is an innovative and visually appealing application with a stunning user interface design. Featuring a variety of immersive 3D models, users can explore and interact with shoes in a lifelike manner. Developed using Flutter, the app provides a seamless and smooth coding experience, ensuring a high-quality user experience.'
  },
  {
    id: '1238',
    username: 'g.kgb',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'SSSSSSSSSSSS'
  }
]
function Posts() {
  return (
    <div className='max-w-md mx-auto mt-10'>
      {
        lst.map((item) => (
          <Post
            key={item.id}
            caption={item.caption}
            username={item.username}
            img={item.img}
            userImg={item.userImg}
            likes={123}
          />
        ))
      }</div>
  )
}

export default Posts