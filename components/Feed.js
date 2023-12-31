import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestion from './Suggestions'

function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-5 md:max-w-3xl xl:max-w-4xl mx-auto gap-x-10 mt-10'>
            <section className='md:col-span-3'>
                {/*Stories */}
                <Stories/>
                {/* Post */}
                <Posts/>
            </section>
            <section className='hidden xl:inline-grid md:col-span-2 pl-7'>
                {/* Mini profile */}
                <div>
                    <MiniProfile/>
                    <Suggestion/>
                </div>
                {/* Suggestion */}
            </section>
        </main>
    )
}

export default Feed