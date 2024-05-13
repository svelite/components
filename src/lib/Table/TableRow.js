import { component, html } from "svelite-html"

export default component({
    template: (props = {}, slot) => {
        return html`
            <tr class="border-b dark:border-gray-700">
                ${slot}
            </tr>
        `
    }
})