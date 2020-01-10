const API = 'https://localhost:44375/api/';
const DEFAULT_QUERY = 'Category/Get';

export function  postData(){
    
    return new Promise ((resolve,reject) =>{
        fetch(API + DEFAULT_QUERY,{
            method: "POST" ,
            headers: {
              "Content-Type": "application/json" 
            },
          })
          .then(r =>
            r.json().then(data => {
              resolve(data);
              
            })
          )
          .catch(e => {
            reject("Servise erişilirken bir hata oluştu.");
          });
    }) ;

}


export function  getData(){
    
    return new Promise ((resolve,reject) =>{
        fetch(API + DEFAULT_QUERY,{
            method: "POST" ,
            headers: {
              "Content-Type": "application/json" 
            },
          })
          .then(r =>
            r.json().then(data => {
              resolve(data);
              
            })
          )
          .catch(e => {
            reject("Servise erişilirken bir hata oluştu.");
          });
    }) ;
    
}
