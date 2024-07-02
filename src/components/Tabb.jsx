import React from 'react'
import { MainButton } from './Button'

const Tabb = () => {
  return (
    <div>
        <section class="bg-center bg-no-repeat bg-gray-400 bg-blend-multiply"
        style={{
          backgroundImage: "url(./images/cta.png)",
          backgroundSize: "cover", // Add this line to resize the background image
        }}>
   <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Let's find more that brings us together.</h2>
            <p class="mb-8 font-light text-white sm:text-xl">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <MainButton>Shop Now</MainButton>
            </div></div>
    </div>
</section>
    </div>
  )
}

export default Tabb