// real i


export function createConnection(serverUrl,roomId){


    return (
        function connect(){
            console.log(`connecting to ${roomId} at ${serverUrl}`)
        },
        function disconnect(){

            console.log('disconnected to ${roomId} at ${serverUrl}')

        }
    )

}