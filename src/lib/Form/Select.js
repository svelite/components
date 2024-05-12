import { component, html } from "svelite-html"
import Label from "./Label.js"

export default component({
    template(props, slot) {
        let placeholder = props.placeholder ?? 'Choose ' + props.label + '...'
        let value = props.value ?? ''
        let disabled = props.disabled ?? ''

        return html`
            <div class="w-full">
                ${Label({id: props.id}, props.label)}
                <select ${props.onChange ? `@change="${props.onChange}"` : ''} ${disabled ? "disabled" : ''} x-model="${props.model ?? props.name}" name="${props.name}" id="${props.id}"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500">
                    <option value="" disabled selected>${ placeholder }</option>
                    ${props.items.map(item => {
                        let key = (typeof item === 'object') ? item.key : item
                        let text = (typeof item === 'object') ? item.text : item

                        return html`
                            <option ${value === key && 'selected'} value="${key}">${ text }</option>
                        `
                    })}
                </select>
            </div>
        `
    }
})

