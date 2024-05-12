import { html } from "svelite-html"

export default (props = {}) => {
    return html`
        <tr class="border-b dark:border-gray-700">
            ${props.body}
        </tr>
    `
}