const bd = require('../database/models'); 
const {sequelize} = require('../database/models'); 
const moment = require('moment');
const { Op } = require('sequelize');

const today = moment(); 

const services = {

    getCards: (cardId, reqQuery) => {

        if (reqQuery.purchase){
           return sequelize.query(`
            SELECT 
                c.id,
                c.number,
                c.cardHolderNameInCard,
                COUNT(p.id) AS purchaseCount
            FROM 
                Card c
            LEFT JOIN 
                Purchase p ON c.id = p.Card_id
            GROUP BY 
                c.id
            ORDER BY 
                purchaseCount DESC
            LIMIT 
                ${reqQuery.quantity};
            `, {
            type: sequelize.QueryTypes.SELECT
            });
        }

        const nextDays = reqQuery.days? moment().add(reqQuery.days, 'days') : moment().add(90, 'days');
        return cardId? bd.Card.findByPk(promotionId) : bd.Card.findAll({where: {expirationDate: { [Op.between]: [today, nextDays]}}});
    },
    
    createCard: async (cardData) => {

        return {code: 200, message: 'card created'};
    },

    updateCard: async (cardData) => {

        return {code: 200, message: 'card updated'};
    },

    deleteCard: async (cardData) => {
        
        await bd.Card.destroy(
            {where: { id: cardData.id }}
        );

        return {code:200, message: 'card deleted'};
    }
      
}

module.exports = services;