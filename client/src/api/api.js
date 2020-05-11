export const api = {
  sendGet(url){
    
  },
  sendPost(url, body){
   let data = fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
        /*  'Accept':  'application/json' */
      },
      body: JSON.stringify(body)
    })
     .then(res => res.json())
     .then(response => response)
     return data
  }



}