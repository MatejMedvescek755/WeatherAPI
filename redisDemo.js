import { Redis } from "ioredis";
const useRedis = async () =>{
    
    const client = new Redis({
        host: "127.0.0.1",
        port: 6379,
        db: 0,
    });

    const data = await client.keys('sample_bicycle:1025');

    if(data?.length !== 0) console.log(data)
    
    else console.log("retard", data)

    client.on('error', err => {console.error(err)})
}

useRedis();