import React from 'react'
import { useEffect, useState } from 'react'
import './Post.css'
import uniqid from 'uniqid';
import Search from './Search';


const Post = ({searchItem}) => {

    //creating states
    const [data, setData] = useState([])
    const [likes, setLikes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchInput, setSearchInput] = useState("")




    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${20}`
        const fetchData = async () => {
            const response = await fetch(url)
            const jsonData = await response.json()
            setData([...data, ...jsonData])

        }
        fetchData()
    }, [currentPage, searchItem])


    const handleLoadMore = () => {
        // debugger
        setCurrentPage(currentPage + 1)
        // setLimit(limit + 20)
        // fetchData()
        console.log("handled")
    }


    const handleLike = (index) => {

    }

    // const handleSearch =(event) =>{
    //     setSearchInput(event.target.value)
    //     console.log(event.target.value)
    // }

    const filteredData = data.filter((item)=>{
        // console.log(typeof item.title)
        // return item.title.toLowerCase().includes(searchItem.toLowerCase());
    })
    console.log(typeof filteredData[1])



    return (
        <>
            <Search setSearchInput={setSearchInput} searchInput={searchInput} />
            

            <div className='posts-rendered'>
                <div className='posts'>
                {console.log(searchItem)}
                    {data.filter((item)=>item.title.toLowerCase().includes(searchInput.toLowerCase())).map((post, index) => (
                        <div className='post-content' key={uniqid()}>
                            <img src={`https://picsum.photos/200?random=${post.id}`} alt="rendered-pic" ></img>
                            <div className='post-text'>
                                <p>User ID: {post.userId}</p>
                                <p className='title'>Title: {post.title}</p>
                                <p>Likes: {likes}</p>
                                <button className='like' id="like-btn" onClick={handleLike}>Like Post</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='load-more'>
                    <button id="loadMoreBtn" onClick={handleLoadMore}>Load more posts</button>
                </div>


            </div>
        </>

    )
}

export default Post


