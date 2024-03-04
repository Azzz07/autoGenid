// const cds = require('@sap/cds');

// // module.exports = cds.service.impl(async function () {
// debugger
// class ms extends cds.ApplicationService{
//     async init(){
//         const { tab } = this.entities;
//         debugger
//         this.before('NEW', tab, async req => {
//             debugger
//             const { id } = await SELECT.one (id) .from (tab)
//             req.data.id = id + 1
//         })
//     }
    
// }
// // });
// module.exports = ms


const cds = require('@sap/cds');
const { log } = require('console');
const { response } = require('express');

module.exports = cds.service.impl(async function init() {
    let {
        tab
    } = this.entities;

    this.before('READ', tab, async (req) => {
        req.query.SELECT.orderBy = [{ ref: ['id'], sort: 'asc' }];
    })

    this.on('POST', tab, async (req) => {
        debugger;
        try {
            const { maxID } = await SELECT.one`max(id) as maxID`.from(tab);
            req.data.id = maxID + 1;
            await INSERT.into(tab).entries(req.data);
            return req.data;
        } catch (error) {
            console.log("error ==> ", error);
        }
    })
})