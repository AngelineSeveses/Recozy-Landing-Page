import React from 'react'
import { MainButton } from '../components/Button';

const About = () => {
  return (
    <div>
          <div class="bg-green-50 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
            <div>
                  <img src="./images/about.png" alt="image"></img>
                </div>
                <div class="flex flex-col justify-center">
                    <h1 class="font-urbanist mb-4 text-5xl tracking-tight font-medium leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">The Best Furniture Manufacturer</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    Recozy offers a collection of stylish and functional furniture that complements lifestyles and enhances home aesthetics, curated with a commitment to quality and design.
                    </p>
                    
                    <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                       <MainButton>Know More</MainButton>
                    </div>
                </div>
            </div>
        </div>


        <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h1 class="font-urbanist mb-4 text-5xl tracking-tight font-medium leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">We didn't reinvent the wheel</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
          
        </div>
    
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="./images/una.jpeg" alt="office content 1"></img>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="./images/pangalawa.jpeg" alt="office content 2"></img>
        </div>
    </div>
</section>


    </div>
  )
}

export default About