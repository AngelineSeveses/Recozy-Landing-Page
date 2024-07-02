import React from 'react'
import { MainButton } from '../components/Button'

const Gallery = () => {
  return (
    <div>
         <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:pt-56">
            <h2 class="font-urbanist mb-4 text-5xl tracking-tight font-medium leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Discover our furniture collection</h2>
                <p class="my-4 text-lg text-gray-500">Don't just take our word for it - see what actual users of our service have to say about their experience.</p>
                <MainButton>Show More</MainButton>
                <div class="grid grid-cols-2 gap-2 py-5">
                    <div>
                        <img class="h-auto max-w-full " src="./images/fur.png" alt=""></img>
                    </div>
                    <div>
                        <img class="h-auto max-w-full " src="./images/niture.png" alt=""></img>
                    </div>
                    
                </div>
            </div>

    </div>
  )
}

export default Gallery