export const api = {
  getTodo(url){
    let data = fetch(url)
               .then(res => res.json())
               .then(response => response)
    return data                     
  },
  sendPost(url, body){
   let data = fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
         'Accept':  'application/json'
      },
      body: JSON.stringify(body)
    })
     .then(res => res.json())
     .then(response => response )
     return data
    },
  updateTodo(url, body){
    let data = fetch(url, {
       method: 'put',
       headers: {
         'Content-Type': 'application/json',
          'Accept':  'application/json'
       },
       body: JSON.stringify(body)
     })
      .then(res => res.json())
      .then(response => response)
      return data
   },
   removeTodo(url){
    let data = fetch(url, {
      method: 'delete'
    })
     .then(res => res.json())
     .then(response => response)
     return data 
   }
}