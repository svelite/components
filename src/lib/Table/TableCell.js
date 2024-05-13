import { component, html } from "svelite-html"

export default component({
    template: (props = {}, slot) => {
        return html`
            <td class="px-4 py-3 whitespace-nowrap ${props.class}">
                ${ slot }
            </td>
        `
    }
})