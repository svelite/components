import { component, html } from "svelite-html";

export default component({
    template(props, slot)  {
        return html`
            <label for="${props.id}" class="block mb-2 text-sm font-medium ${props.error ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white'}" ${props.$label ? `x-text="${props.$label}"`: ''}>${slot}</label>
        `
    }
})