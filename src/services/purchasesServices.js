const bd = require('../database/models'); 

const services = {

    getPurchases: (purchaseId) => {
        return purchaseId? bd.Purchase.findByPk(purchaseId, {include:[{association:'card'},{association:'paymentSummary'}]}) : bd.Purchase.findAll({include:[{association:'card'},{association:'paymentSummary'}]});
    },
    
    createPurchase: async (purchaseData) => {
        return {code: 200, message: 'purchase created'};
    },

    updatePurchase: async (purchaseData) => {
        return {code: 200, message: 'purchase updated'};
    },

    deletePurchase: async (purchaseData) => {
        
        await bd.Purchase.destroy(
            {where: { id: purchaseData.id }}
        );

        return {code:200, message: 'purchase deleted'};
    }
      
}

module.exports = services;