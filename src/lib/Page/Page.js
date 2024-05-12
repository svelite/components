import { component, html } from "svelite-html"
import PageHeader from "./PageHeader.js"

export default component({
    template(props, slot) {
        return html`
            <div class="p-3 sm:p-5 mx-auto max-w-screen-xl lg:px-12" x-data='${JSON.stringify(props.data ?? {})}'>
                ${props.title && PageHeader({title: props.title, back: props.back, dir: props.dir}, [props.actions])}
                
                <div class="pt-4 pb-12 overflow-y-auto">
                    ${ slot }
                </div>
            </div>
        `

    }, 
    script: () => {
        document.addEventListener('alpine:init', () => {

            Alpine.magic('api', (el) => {
                return (path) => {
                    return {
                        async post(data, headers = {}) {
        
                            const res = await fetch(path, {
                                method: 'POST',
        
                                credentials: 'same-origin',
                                headers: {
                                    'Content-Type': 'application/json',
                                    ...headers
                                },
                                body: JSON.stringify(data)
                            }).then(res => res.text())
                            console.log(res)
                            return res
                        },
                        async run(data, headers) {
                            let res = await fetch(path, {
                                method: 'POST',
                                credentials: 'same-origin',
                                headers: {
                                    'Content-Type': 'application/json',
                                    ...headers
                                },
                                body: JSON.stringify(data)
                            }).then(res => res.text())
                            res = res.split('<body')[1].split('</body>')[0]
                         
                            document.body.outerHTML = '<body' + res + '</body>'
                        } 
                    }
                }
            })
        })
    }
}) 
