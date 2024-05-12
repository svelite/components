import { component, html } from "svelite-html"

export default component({
    template(props = {}, slot) {
        return html`
            <template x-teleport="body">
                <div>
                    <template x-if="${props.open}">
                        <div id="${props.id}" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[61] justify-center items-center w-full md:inset-0 h-full bg-gray-50/10 max-h-full">
                            <div class="relative p-4 w-full max-w-2xl max-h-full">
                                <!-- Modal content -->
                                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                    <!-- Modal header -->
                                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${props.title}</h3>
                                        <button @click="${props.open} = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <!-- Modal body -->
                                    ${slot}
                                </div>
                            </div>
                        </div>
                    </template>    
                    <div x-data x-show="${props.open}" class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-[60]" x-cloak></div>
                </div>
            </template>
        `
    }
})
