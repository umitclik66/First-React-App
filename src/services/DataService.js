const API = 'https://localhost:44375/api/';
const DEFAULT_QUERY = ''; 

export default class  DataService{
 

   postData(method,obj) {
    
        return new Promise ((resolve,reject) =>{
            fetch(API + DEFAULT_QUERY +  method ,{
                method: "POST" ,
                headers: {
                  "Content-Type": "application/json" 
                },
                body: JSON.stringify(obj)
              })
              .then(r => 
                r.json().then(data => {
                  resolve(data);
                  
                })
              )
              .catch(e => {
                console.log("Hata",e);
                reject("Servise erişilirken bir hata oluştu.");
              });
        }) ;
    }

}

 