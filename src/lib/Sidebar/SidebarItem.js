import { html } from "svelite-html"
import Icon from "../Icon/Icon.js"

export default (props = {}) => {
    if(props.href) {
        return html`
            <li>
                <a href="${props.href}"
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    ${props.icon && Icon({name: props.icon})}
                    <span class="ms-3">${ props.body }</span>
                </a>
            </li>
        `
    }

    if(props.action) {
        return html`
            <li>
                <form method="POST" action="?${props.action}">
                    <button class="flex items-center w-full p-2 cursor-pointer text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                        ${props.icon && Icon({name: props.icon})}
                        <span class="ms-3">${ props.body }</span>
                    </button>
                </form>
            </li>
        `
    }

    return html`
        <li>
            <button type="button"
                class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="${props.id}" data-collapse-toggle="${props.id}">
                ${icon && Icon({name: icon})}
                <span class="flex-1 ms-3 text-start whitespace-nowrap">${props.body}</span>
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        
            <ul id="${props.id}" class="hidden py-2 space-y-2">
                ${ props.menu}
            </ul>
        </li>
    `
    
}
