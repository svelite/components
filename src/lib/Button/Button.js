import { html, component } from 'svelite-html'

export default component({
    template(props, slot) {
        const colorMap = {
            default: 'bg-teal-700 hover:bg-teal-800 focus:ring-teal-300 text-white font-medium',
            alternative: 'bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-100',
            dark: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 text-white font-medium',
            light: 'bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 text-gray-900',
            green: 'bg-green-700 hover:bg-green-800 focus:ring-green-300 text-white font-medium',
            red: 'bg-red-700 hover:bg-red-800 focus:ring-red-300 text-white font-medium',
            yellow: 'bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 text-white font-medium',
            purple: 'bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 text-white font-medium',
        }

        const outlineMap = {
            default: "text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-800",
            gray: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
            green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800",
            red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900",
            yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
            purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900",
        }

        const sizeMap = {
            sm: 'gap-1.5 px-3 py-2 text-xs',
            md: 'gap-2 px-5 py-2.5 text-sm',
            lg: 'gap-3 px-6 py-3 text-base'
        }

        const classes = [
            "whitespace-nowrap inline-flex items-center rounded-lg focus:outline-none focus:ring-4",
            props.outline ? outlineMap[props.color ?? 'default'] : colorMap[props.color ?? 'default'],
            sizeMap[props.size ?? 'md'],
            props.class
        ].join(' ')

        if (props.href) {
            return html`
                <a href="${props.href}" type="${props.type ?? 'button'}" class="${classes}">
                    ${slot ?? ''}
                </a>
            `
        }

        return html`
            <button type="${props.type ?? 'button'}" ${props.onClick && html`@click="${props.onClick}"`} class="${classes}">
                ${slot ?? ''}
            </button>
        `
    }
})
