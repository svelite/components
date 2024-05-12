import { component, getScripts } from 'svelite-html'
import * as Components from '../lib/index.js'

const scripts = getScripts(Components)


export default (props, slot) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/main.css">
    <script defer src="https://unpkg.com/alpinejs"></script>
    <title>Document</title>
</head>
<body class="bg-gray-50 dark:bg-gray-800">
    ${slot}
    <script>${scripts}</script>
</body>
</html>
`
}