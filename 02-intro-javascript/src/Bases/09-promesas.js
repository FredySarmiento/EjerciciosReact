const { getHeroeById } = require("./Bases/08-imp-exp");

/* const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const heroe=getHeroeById(5);
        resolve(heroe);
        //reject('no se pudo encontrar el Héroe')
    },2000)
});

promesa.then((p1)=>{
    console.log('Then de la promesa ', p1)
})
.catch(err=>console.warn(err)); */

const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
        const p1=getHeroeById(id);
        if(p1){
            resolve(p1);
        }else{
            reject('no se pudo encontrar el Héroe')
        }  
       
    },2000)
});

}

getHeroeByIdAsync(3)
.then(console.log)
.catch(console.warn);
