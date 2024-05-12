import { createApp } from 'svelite-html'
import path from 'path'

export const config = {    
    pages: path.resolve('./src/pages'),
    routes: path.resolve('./src/routes.js'),
    static: path.resolve('./static'),
    middlewares: [],
    css: {
        path: './styles',
        tailwindcss: {
            content: ['./src/**/*.js']
        }
    }
}

createApp(config).start(3000)
