import {component, html} from 'svelite-html'
import PageTitle from "./PageTitle.js"
import Icon from '../Icon/Icon.js'


export default component({
    template(props, slot) {
        return html`
            <div class="flex items-center justify-between mt-2">
                <div>
                    ${props.back && html`
                        <a href="${props.back}" class="-ms-2 flex items-center text-xs text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300">
                            ${Icon({
                                name: props.dir === 'rtl' ? 'chevron-right' : 'chevron-left',
                                size: 'sm'
                            })}
                            ${props.backText ?? 'Back'}
                        </a>
                    `}
                    ${props.title && PageTitle([props.title])}
                </div>

                <div>
                    ${ slot }
                </div>
            </div>

        `
    }
})
