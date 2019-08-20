function hash(key, arrayLen):
   let total = 0;
   for (let char of key){
	let value = char.charCodeAt(0) - 96
	total = (total + value) % arrayLen;
   }
   return total;
}

// Constant time hashing
function hash(key,arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
	let char = key[i]
	let value = char.charCodeAt(0) - 96
	total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

//HashTable
class HashTable{
    constructor(size=53){
	this.keyMap = new Array(size);
    }

    _hash(key){
	let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % arrayLen;
         }  
         return total;
      }
     set(key,value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
     }	
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i] === key){
                    return this.keyMap[index][i]
                }
            }
         }
        return undefined;
     }	
}
