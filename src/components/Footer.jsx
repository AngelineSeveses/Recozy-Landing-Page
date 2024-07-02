import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer class="bg-green-50 shadow dark:bg-gray-900 ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recozy</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Shop</a>
                        </li>
                  
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
                <ul class="flex flex-wrap mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center items-center">
                         <li>
                        <a href="https://flowbite.com/" class="hover:underline me-4 md:me-6">2023 Recozy™. All Rights Reserved</a>  
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Cookies Setting</a>
                        </li>
                  
                    </ul>
            </div>
        </footer>
    </div>
  )
}
