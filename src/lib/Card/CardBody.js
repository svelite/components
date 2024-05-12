import { component, html } from "svelite-html"

export default component({
    template({class:klass}, slot) {
        return html`
            <div class="p-6 ${klass}">
                ${ slot }
            </div>
        `
    }
})