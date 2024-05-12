import { component, html } from "svelite-html"
import Label from "./Label.js"


export default component({
    template(props, slot) {
        let placeholder = props.placeholder ?? 'Enter ' + props.label + '...'
        let value = props.value ?? ''
    
        return html`
            <div class="w-full">
                ${Label({id: props.id}, props.label)}
                <textarea rows="5" x-model="${props.model ?? props.name}" name="${props.name}" id="${props.id}"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                    placeholder="${placeholder}" ${props.required ? "required" : ''} value="${value}">
                </textarea>
            </div>
        `
    }
})
