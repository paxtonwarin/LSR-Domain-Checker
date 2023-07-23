const domains = require('./domains.js')
const request = require('./request.js')
const fs = require('fs').promises;
let result = {}
let counter = 0
async function waitTime(time){
    return new Promise((resolve, reject) => {
        setTimeout((time) => {
            resolve()
        })
    })
}
async function saveResult(){
    await fs.writeFile('result.json', JSON.stringify(result, null, 2))
}
async function go(){
for (domainIndex in domains){
    const domain = domains[domainIndex]
    const data = await request(domain)
    console.log(domain)
    result[domain] = {
        CategoryName: data.a.archive_info.filter.categoryName,
        CategoryDescription: data.a.archive_info.filter.categoryDescription
    }
    counter++
    if(counter == domains.length){
        await saveResult()
    }


}
}
go()