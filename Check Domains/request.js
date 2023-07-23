const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = async function(domain){
    return new Promise(async (resolve, reject) => {
        const response = await fetch('https://production-archive-proxy-api.lightspeedsystems.com/archiveproxy', {
            method: 'POST',
            body: JSON.stringify({"query":"\nquery getDeviceCategorization($itemA: CustomHostLookupInput!, $itemB: CustomHostLookupInput!){\n  a: custom_HostLookup(item: $itemA) {\n    request {\n      host\n    }\n    cat\n    action\n    source_ip\n    archive_info {\n      filter {\n        categoryName\n        transTime\n        categoryDescription\n        reason\n        isSafetyTable\n        isTLD\n      }\n      rocket {\n        categoryName\n        categoryDescription\n      }\n    }\n  }\n  b: custom_HostLookup(item: $itemB) {\n    request {\n      host\n    }\n    cat\n    action\n    source_ip\n    archive_info {\n      filter {\n        categoryName\n        transTime\n        categoryDescription\n        reason\n      }\n      rocket {\n        categoryName\n        categoryDescription\n      }\n    }\n  }\n}","variables":{"itemA":{"hostname":`${domain}`,"getArchive":true},"itemB":{"hostname":`${domain}`,"getArchive":true}}}),
            headers: {
            "authority": "production-archive-proxy-api.lightspeedsystems.com",
            "method": "POST",
            "path": "/archiveproxy",
            "scheme": "https",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/json",
        "Sec-Ch-Ua": "'Not/A)Brand';v='99', 'Google Chrome';v='115', 'Chromium';v='115'",
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": "Windows",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "X-Api-Key": "onEkoztnFpTi3VG7XQEq6skQWN3aFm3h"
            }
        })
        const data = await response.json();
        resolve(data.data)
    })

}