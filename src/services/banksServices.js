const bd = require('../database/models'); 
const {sequelize} = require('../database/models'); 

const services = {

    getBanks: async () => {
        return sequelize.query(`
            SELECT b.id AS bank_id, b.name as bank_name, b.cuit AS bank_cuit, b.address AS bank_address, 
            b.telephone AS bank_telephone, COUNT(bc.Customer_id) AS number_customers
            FROM Bank AS b
            LEFT JOIN Bank_Customer AS bc ON b.id = bc.Bank_id
            GROUP BY b.id;
            `, {
             type: sequelize.QueryTypes.SELECT
        });
    },
    
    createBank: async (bankData) => {

        return {code: 200, message: 'bank created'};
    },

    updateBank: async (bankData) => {

        let updateBank = {};

        if (!bankData.code){
            return {code: 400, message: 'bank code missing'};
        }

        if (bankData.bankTitle) {
            updateBank.bankTitle = bankData.bankTitle;
        }

        if (bankData.nameStore) {
            updateBank.nameStore = bankData.nameStore;
        }

        if (bankData.cuilStore) {
            updateBank.cuilStore = bankData.cuilStore;
        }

        if (bankData.validityStartDate) {
            updateBank.validityStartDate = bankData.validityStartDate;
        }

        if (bankData.validityEndDate) {
            updateBank.validityEndDate = bankData.validityEndDate;
        }

        if (bankData.comments) {
            updateBank.comments = bankData.comments;
        }

        if (bankData.Bank_id) {
            updateBank.Bank_id = bankData.Bank_id;
        }

        if (bankData.type) {
            updateBank.type = bankData.type;
        }

        if (bankData.numberOfQuotas) {
            updateBank.numberOfQuotas = bankData.numberOfQuotas;
        }

        if (bankData.interest) {
            updateBank.interest = bankData.interest;
        }

        if (bankData.discountPercentage) {
            updateBank.discountPercentage = bankData.discountPercentage;
        }

        if (bankData.priceCap) {
            updateBank.priceCap = bankData.priceCap;
        }

        if (bankData.onlyCash) {
            updateBank.onlyCash = bankData.onlyCash;
        }

        if (bankData.bankEnable) {
            updateBank.bankEnable = bankData.bankEnable;
        }
    
    
        await bd.Bank.update(updateBank, { where: { code: bankData.code } });


        return {code: 200, message: 'bank updated'};
    },

    deleteBank: async (bankData) => {
        
        await bd.Bank.destroy(
            {where: { id: bankData.id }}
        );

        return {code:200, message: 'bank deleted'};
    }
      
}

module.exports = services;