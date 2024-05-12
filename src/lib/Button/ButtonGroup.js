import { component, html } from 'svelite-html'

export default component({
    template({class: klass}, slot) {
        const classes = [
            "flex items-center flex-wrap gap-2",
            klass
        ]
    
        return html`
            <div class="${classes}">
                ${slot}
            </div>
        `  
    }
})