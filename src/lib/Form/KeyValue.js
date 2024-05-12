import { component, html } from "svelite-html"
import Table from "../Table/Table.js"
import TableCell from "../Table/TableCell.js"
import TableRow from "../Table/TableRow.js"
import Label from "./Label.js"
import Card from "../Card/Card.js"
import Button from "../Button/Button.js"
import Icon from "../Icon/Icon.js"

export default component({
    template(props = {}) {
        if(props.strict) {
            // return StrictKeyValue(props)
            props.strict = false;
        }
        const value = {
            keys: props.keys,
            value: props.value,
        }
        return html`
            <div x-show='${props.$if}' class="w-full mb-4">
                ${Label({id: props.id},  props.label)}

                <div x-data='keyValue(${value})' x-modelable="value" ${props.model ? `x-model="${props.model}"` : ''}>
                    ${Card([
                        Table({
                            head: [
                                TableCell({body: 'key'}),
                                TableCell({body: 'value'}),
                                TableCell({body: ''}),
                            ],
                            body: [
                                TableRow({
                                    body: [
                                        TableCell({
                                            class: '!p-2',
                                            body: html`
                                                <input class="bg-gray-50 border-gray-300 text-gray-900 focus:ring-teal-600 focus:border-teal-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 border text-sm rounded-lg block w-full px-3 py-2" x-show="!strict" x-model="current.key" placeholder="key">
                                            `
                                        }),
                                        TableCell({
                                            class: '!py-2 !px-0',
                                            body: html`<input class="bg-gray-50 border-gray-300 text-gray-900 focus:ring-teal-600 focus:border-teal-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 border text-sm rounded-lg block w-full px-3 py-2" @keydown.enter.prevent="addPair()" x-model="current.value" placeholder="value">`
                                        }),
                                        TableCell({
                                            class: '!p-2',
                                            body: Button({size: 'sm', onClick: 'addPair()'}, Icon({size: 'xs', name: 'plus'}))
                                        })
                                    ]
                                }),
                                html`<template x-for="(pair, index) in value" :key="index">
                                    <tr>
                                        <td class="p-2"><input type="hidden" x-model="pair.key" :name="'${props.name}.' + index + '.key'"><span class="" x-text="pair.key"></span>:</td>
                                        <td class="py-2 px-0"><input class="bg-gray-50 border-gray-300 text-gray-900 focus:ring-teal-600 focus:border-teal-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 border text-sm rounded-lg block w-full px-3 py-2" placeholder="value" x-model="pair.value" :name="'${props.name}.' + index + '.value'" /></td>
                                        <td class="p-2">
                                            ${Button({ size: 'sm', color: 'red', onClick: 'removePair(index)'}, Icon({size: 'xs', name: 'delete'}))}
                                        </td>
                                    </tr>
                                </template>`
                            ]
                        })
                    ])}
                </div>
            </div>
        `
    },
    script: () => {
        document.addEventListener('alpine:init', () => {

            Alpine.data('keyValue', ({ keys, value, strict }) => ({
                keys,
                value: [],
                current: { key: "", value: '' },
                strict,
                init() {
                    this.keys = keys
                    
                    if(this.keys) {
                        this.current.key = this.keys[0]
                    }
                },
                addPair() {
                    if (!this.current.key) return;
        
                    // overwrite if has this item
                    for(let item of this.value) {
                        if(item.key === this.current.key) {
                            item.value = this.current.value
                            return;
                        }
                    }
                    this.value.push({ key: this.current.key, value: this.current.value });
        
                    if (this.keys) {
                        this.keys = this.keys.filter(x => x !== this.current.key)
                        this.current = { key: this.keys[0], value: '' }
                    } else {
                        this.current = { key: '', value: '' }
                    }
                },
                removePair(index) {
                    if (this.keys && keys.includes(this.pairs[index].key)) {
                        this.keys = [...this.keys, this.pairs[index].key]
                    }
                    this.value.splice(index, 1);
                }
            }))
        });
    }
})