
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingtime] = useState(0)

  const handleAddToBookmark = blog => {
    const NewBookmarks = [...bookmarks, blog];
    setBookmarks(NewBookmarks);

  }

  const handleMarekAsRead = time => {
    setReadingtime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarekAsRead={handleMarekAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>

    </>
  )
}

export default App
