import React from 'react'
import ReactDOM from 'react-dom'
import retargetEvents from 'react-shadow-dom-retarget-events'
// import Styles from 'collect-css-loader/runtime/Styles'
import App from './app/App'

class ExampleWebComponent extends HTMLElement {
    shadowRoot
    renderTo
    isMounted
//    removeStyles
    removeListeners

    constructor(props) {
        super()
        this.props = props
        this.shadowRoot = this.attachShadow({mode: 'open'})
        this.renderTo = null
        this.isMounted = false
    }

    propsChangedCallback(props) {
        this.props = props
        this.render()
    }

    connectedCallback() {
        this.mount()
        this.render()
    }

    disconnectedCallback() {
        this.unmount()
    }

    mount() {
        if (!this.isMounted) {
//            this.removeStyles = Styles.get('example-web-component').applyTo(this.shadowRoot)
            this.renderTo = document.createElement('div')
            this.shadowRoot.appendChild(this.renderTo)
            this.removeListeners = retargetEvents(this.shadowRoot)
            this.isMounted = true
        }
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(this.renderTo)
        this.shadowRoot.removeChild(this.renderTo)
        this.renderTo = null
//        this.removeStyles()
        this.removeListeners()
        this.isMounted = false
    }

    render() {
        if (this.isMounted) {
            const {foo, bar} = this.props;
            ReactDOM.render(<App foo={foo} bar={bar}/>, this.renderTo)
        }
    }
}

export default ExampleWebComponent
