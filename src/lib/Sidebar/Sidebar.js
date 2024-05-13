import { component, html } from "svelite-html"

export default component({
    template: (props, slot) => {

        const closeClasses = props.dir === 'rtl' ? 'translate-x-full' : '-translate-x-full'
        const openClasses = ''

        return html`
            <aside @click=" sidebar= false"
                class="fixed top-0 start-0 z-40 w-64 h-screen pt-14 transition-transform bg-white border-e border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                :class='sidebar ? "${openClasses}" : "${closeClasses}"'
                x-cloak
                aria-label="Sidenav">
                <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
    
                    <ul class="space-y-2">
                        ${slot}
                    </ul>
                </div>
                ${props.footer ?? ''}
            </aside>
        `
    }
})