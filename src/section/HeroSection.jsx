import React from 'react'
import { MainButton } from '../components/Button'

 const HeroSection = () => {
  return (
    <div>
        <section class="pt-10 bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div class="flex flex-col justify-center">
                    <h1 class="font-urbanist mb-4 text-8xl tracking-tight leading-none text-gray-900 md:text-8xl lg:text-8xl dark:text-white">The Home of Recozy</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    Our wide selection of furniture pieces are designed to bring both style and comfort to any space.
                    </p>
                    
                    <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                       <MainButton>Shop Now</MainButton>
                    </div>
                    
                    <div>
                      
                    <dl class="grid max-w-screen-md gap-8 mx-auto pt-6 text-gray-900 sm:grid-cols-3 dark:text-white">
                    <div class="flex flex-wrap pb-8 justify-center items-center mt-8 text-gray-900 sm:justify-between">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">300+</dt>
                        <dd class="font-light text-black-500 dark:text-gray-400">Designs created</dd>
                    </div>
                    <div class="flex flex-wrap pb-8 justify-center items-center mt-8 text-gray-900 sm:justify-between">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">300+</dt>
                        <dd class="font-light text-black-500 dark:text-gray-400">Designs created</dd>
                    </div>
                    <div class="flex flex-wrap pb-8 justify-center items-center mt-8 text-gray-900 sm:justify-between">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">300+</dt>
                        <dd class="font-light text-black-500 dark:text-gray-400">Designs created</dd>
                    </div>
                </dl>
                    </div>
                </div>
                <div>
                  <img src="./images/recozy.png" alt="image"></img>
                 
                </div>
            </div>

            <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-400 uppercase">As Featured in</span>
            <div class="flex flex-wrap pb-8 justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <a href="#" class=" mb-2 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <img class="h-11" viewBox="0 0 120 41" fill="none" src="./images/webflow.png" alt="image"></img>             
                </a>
                <a href="#" class=" mb-2 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <img class="h-11" viewBox="0 0 120 41" fill="none" src="./images/relume.png" alt="image"></img>             
                </a>
                <a href="#" class=" mb-2 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <img class="h-11" viewBox="0 0 120 41" fill="none" src="./images/webflow.png" alt="image"></img>             
                </a>  
                <a href="#" class=" mb-2 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <img class="h-11" viewBox="0 0 120 41" fill="none" src="./images/relume.png" alt="image"></img>             
                </a> 
               
            </div>
        </div> 

        </section>



            </div>
  )
}

export default HeroSection

