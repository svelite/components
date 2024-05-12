import { Button, Form, Image, Input, KeyValue, Markdown, Page, PageHeader } from "../lib/index.js"

export default () => {
    return Page({}, [
        PageHeader({title: 'Hello'}, [
            Button({}, "Add Item")
        ]),
        Form([
            Image({label: 'Image'}),
            KeyValue({label: 'Image'}),
            Markdown({label: 'Image'}),
            Input({label: 'Image'}),
            Button({type: 'submit', color: 'default'}, 'Submit')
        ])
    ])
}