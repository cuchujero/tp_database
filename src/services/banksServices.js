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