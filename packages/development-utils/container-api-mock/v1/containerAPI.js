export default {
    //Notifications
    showInformation: ({message, header, scope = 'PAGE'}) => {
        console.log('api.showInformation called: ', message, header, scope)
    },
    showManageableProblem: ({message, header, scope = 'PAGE'}) => {
        console.log('api.showManageableProblem called: ', message, header, scope)
    },
    showError: ({message, header, scope = 'PAGE'}) => {
        console.log('api.showError called: ', message, header, scope)
    },

    showWarning: ({message, header, scope = 'PAGE'}) => {
        console.log('api.showWarning called: ', message, header, scope)
    },
    showSuccess: ({message, header, scope = 'PAGE'}) => {
        console.log('api.showSuccess called: ', message, header, scope)
    },

    //Loading
    startLoadingMessage: ({message}) => {
        console.log('api.startLoadingMessage called: ', message)
    },

    stopLoadingMessage: ({message}) => {
        console.log('api.stopLoadingMessage called: ', message)
    },

    //Navigation
    navigateToAsset: (id, orderRowId) => {
        console.log('api.navigateToAsset called: ', id, orderRowId)
    },

    navigateToEquipment: (id, equipmentHash, source) => {
        console.log('api.navigateToEquipment called: ', id, equipmentHash, source)
    },

    navigateToFamily: () => {
        console.log('api.navigateToFamily called')
    },

    navigateToBenefits: () => {
        console.log('api.navigateToBenefits called')
    },

    navigateToCustomer: (customerId) => {
        console.log('api.navigateToCustomer called: ', customerId)
    },

    navigateToBilling: (id) => {
        console.log('api.navigateToBilling called: ', id)
    },

    navigateToStartPage: () => {
        console.log('api.navigateToStartPage called')
    },

    navigateToOach: ({accountRowId, assetId, invoiceId}) => {
        console.log('api.navigateToOach called: ', accountRowId, assetId, invoiceId)
        return Promise.resolve()
    }
}
