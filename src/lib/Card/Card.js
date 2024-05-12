import { component, html } from "svelite-html"

export default component({
    template({ class: klass }, slot) {
        return html`
            <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ${klass}">
                ${slot}
            </div>
        `
    }
}) 
