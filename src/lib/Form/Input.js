import { component, html } from 'svelite-html'
import Label from "./Label.js"

export default component({
    template(props = {}) {
        
        let placeholder = props.placeholder ?? 'Enter ' + props.label + '...'
        let value = props.value ?? ''

        return html`
            <div class="w-full">
                ${props.label && Label({ id: props.id, $label: props.$label, error: !!props.error }, props.label)}
                <input type="${props.type ?? 'text'}" ${props.model ? `x-model="${props.model}"` : ''} name="${props.name}" id="${props.id}"
                    class="${props.error ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:bg-gray-700 dark:placeholder-red-500 dark:border-red-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-teal-600 focus:border-teal-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'} border text-sm rounded-lg block w-full p-2.5 "
                    placeholder="${placeholder}" ${props.required ? "required" : ''} value="${value}">
                ${props.error && html`<p class="mt-2 text-sm text-red-600 dark:text-red-500">${props.error}</p>`}
            </div>
        `
    }
})