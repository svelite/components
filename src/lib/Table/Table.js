import { component, html } from "svelite-html"

export default component({
    template: (props = {}, slot) => {
        return html`
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-start text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            ${props.head}
                        </tr>
                    </thead>
                    <tbody>
                        ${slot}
                    </tbody>
                </table>
            </div>    
        ` 
    }    
})