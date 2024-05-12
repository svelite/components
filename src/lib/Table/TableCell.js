import { html } from "svelite-html"

export default (props = {}) => {
    return html`
        <td class="px-4 py-3 whitespace-nowrap ${props.class}">
            ${ props.body }
        </td>
    
    `
}