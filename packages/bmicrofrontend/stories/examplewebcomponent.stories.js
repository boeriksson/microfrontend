import React from 'react'
import {withKnobs, text} from '@storybook/addon-knobs'
import CustomElementWrapper from 'development-utils/custom-element-wrapper/CustomElementWrapper'
import ExampleWebComponent from "../src/index"

export const ExampleWebComponentStory = () => {
    const props = {
        foo: text("foo", "Hello"),
        bar: text("bar", "World"),
    }
    return <CustomElementWrapper clazz={ExampleWebComponent} name={'example-web-component'} {...props}/>
}

export default {
    component: ExampleWebComponentStory,
    title: 'Example Web Component',
    decorators: [withKnobs]
}