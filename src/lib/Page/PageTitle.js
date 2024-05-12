import { component, html } from "svelite-html"

export default component({
    template(props, slot) {
        return html`
            <h1 class="text-gray-900 dark:text-gray-100 text-3xl font-bold ${props.class}">${ slot }</h1>
        `
    }
})
