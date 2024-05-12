import { component, html } from "svelite-html"

export default component({
    template(props = {}, slot) {
        const value = props.value ?? {}

        value.errors = {}
    
        return html`
            <form x-form="${props.onSubmit}"
                method="POST" 
                action="${props.action ?? '#'}">
                ${slot}
            </form>
        `    
    },
    script() {
        function formDataToJSON(formData) {
            let result = {};
            for (let entry of formData.entries()) {
                if (entry[0].includes('.')) {
                    const keys = entry[0].split('.');
                    let currentObj = result;
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        if (i === keys.length - 1) {
                            // Last key, assign the value
                            currentObj[key] = entry[1];
                        } else {
                            // Check if the current key exists as an object, if not, create it
                            if (!currentObj[key]) {
                                // Check if the next key is a number, if so, initialize an array
                                currentObj[key] = isNaN(keys[i + 1]) ? {} : [];
                            }
                            // Update current object reference
                            currentObj = currentObj[key];
                        }
                    }
                } else {
                    result[entry[0]] = entry[1];
                }
            }
            return result;
        }
        
        document.addEventListener('alpine:init', () => {
            console.log('alpine:init ' + 'form')
            Alpine.directive('form', (el, { value, modifiers, expression}, {evaluate}) => {
                console.log('alpine:directive ' + 'form', el, {value, modifiers, expression})
        
                Alpine.bind(el, {
                    'x-on:submit': async (event) => {
                        event.preventDefault()
                        if(expression) {
                            return evaluate(expression)
                        } 
        
                        const formData = new FormData(el);
                        const method = el.getAttribute('method') || 'POST';
                        const path = el.getAttribute('action')
                        
                        const response = await fetch(window.location.pathname + path, {
                            method,
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(formDataToJSON(formData))
                        }).then(res => {
                            if(res.redirected) {
                                window.history.pushState({}, {}, res.url)
                            }
                            return res.text()
                        })
        
                        const bodyStartIndex = response.indexOf('<body');
                        const bodyEndIndex = response.indexOf('</body>');
                        const body = response.slice(bodyStartIndex, bodyEndIndex + '</body>'.length);
        
                        document.body.outerHTML = body
                    }
                })
            })
        })
        
    }
})

// <span x-show="errors._" x-text="errors._"></span>
