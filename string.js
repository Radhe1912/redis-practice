const client = require('./client')

async function init(){
    await client.set('msg:4', 'hiiiiiiii')
    const result = await client.get('msg:4');
    // await client.expire('msg:4', 10);
    console.log("Result -> ", result);
}

init();