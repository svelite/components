import { component, html } from "svelite-html"
import Label from "./Label.js"
import Icon from "../Icon/Icon.js"
// import { t } from "#ctx"

export default component({
    template(props = {}) {
        return 'TODO'
    //     return html`
    //     <div class="w-full mb-4">
    //         ${Label({id: props.id}, props.label)}
    //         <div x-data="imageUploader({value: '${props.value ?? ''}'})" x-modelable="value" x-model="${props.model}" class="group max-w-sm relative rounded-lg h-auto min-h-[240px] max-h-[320px] border border-gray-200 bg-gray-100 dark:bg-gray-700 dark:border-gray-600">
    //             <div x-show="preview || value">
    //                 <img x-show="preview && !value" class="opacity-80 group-hover:opacity-100 rounded-lg object-cover w-full h-full" :src="preview" alt="">
    //                 <img x-show="value" class="rounded-lg object-cover w-full h-full" :src="'/files/' + value" alt="">
    //                 <input type="hidden" name="${props.name}" :value="value"/>
    //                 <div class="transition top-0 start-0 bg-transparent group-hover:bg-black/50 flex w-full h-full justify-center items-center gap-2 absolute">
    //                     <button x-show="!value" @click="onFileUpload" type="button" class="opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800">
    //                         ${Icon({name: 'upload'})}
    //                         ${t('image.upload')}
    //                     </button>
    //                     <button @click="onFileRemove" type="button" class="opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
    //                         ${Icon({name: 'times'})}
    //                         ${t('image.remove')}
    //                     </button>
    //                 </div>
    //             </div>
    //             <div x-show="!preview && !value" class="flex absolute h-full w-full items-center flex-col justify-center">
    //                 <div class="relative flex items-center justify-center text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800">
    //                     <span>${t('image.choose')}</span>
    //                     <input @change="onFileChange" type="file" class="absolute top-0 bottom-0 opacity-0 left-0 right-0">
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // `

    },
    script: () => {
        document.addEventListener('alpine:init', () => {
            console.log('image Uploader')
            Alpine.data('imageUploader', ({value}) => ({
                preview: '',
                value: null,
                file: null,
                onFileChange(e) {
                    const file = e.target.files[0];
                    if (file) {
                        this.file = file
        
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            this.preview = e.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                },
                onFileRemove(e) {
                    this.preview = '';
                    this.value = null;
                    
                },
                async onFileUpload(e) {
                    const formData = new FormData()
                    formData.set('file', this.file)
        
                    const res = await fetch('/api/file/upload', {
                        method: 'POST',
                        headers: {
                            // 
                        },
                        body: formData
                    }).then(res => res.json())
                    this.value = res.id
                },
                init(el) {
                    console.log('image init: ', {el, value})
                    if(value) {
                        this.value = value
                    }
                },
            }))
        });
    }
})