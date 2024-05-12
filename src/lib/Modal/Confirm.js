import { component, html } from "svelite-html"
// import { t } from "#ctx"
import Icon from "../Icon/Icon.js"

export default component({
    template({yesText = 'Yes, I\'m sure', noText = 'No, cancel'}) {
        return html`

        <div x-data tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[61] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" :class="$store.confirm.open ? 'flex' : 'hidden'" x-cloak>
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button @click="$store.confirm.resolve(false)" type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        ${Icon({ name: 'info-circle', size: 'xl', class: 'mx-auto mb-4 text-gray-400 dark:text-gray-200' })}
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            <span x-text="$store.confirm.message"></span>
                        </h3>
                        <button @click="$store.confirm.resolve(true)" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            ${yesText}
                        </button>
                        <button @click="$store.confirm.resolve(false)" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            ${noText}
                        </button>
                    </div>
                </div>
            </div>
        </div>        
        <div x-data x-show="$store.confirm.open" class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-[60]" x-cloak></div>
        `
    },
    script: () => {
        document.addEventListener('alpine:init', () => {
            console.log('confirm')
        
            Alpine.store('confirm', {
                open: false,
                message: '',
                resolve: null,
                async show(message) {
                    this.message = message
                    this.open = true
                    return new Promise(resolve => {
                        this.resolve = (value) => {
                            this.open = false
                            resolve(value)
                        }
                    })
                }
            })
        });
    }
})
