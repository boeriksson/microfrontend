const path = require('path')
module.exports = {
    stories: ['../packages/**/*.stories.js'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs'
    ],
    webpackFinal: async (config, {configType}) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        const newRules = config.module.rules.filter(rule => !rule.test.test('.css')) // Remove css rules
        config.module.rules = newRules

        // Return the altered config
        return config
    }
}
