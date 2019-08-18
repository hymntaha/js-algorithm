class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root ===null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value){
        if(this.root === null) return false;

        let current = this.root,
        found = false;

        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }

        if(!found) return false;
        return current;
    }

    BFS(){
        var data = [],queue = [], node = this.root;
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        let data = [];
        
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }    
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        let data = [];

        function traverse(node){            
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }    
        traverse(this.root);
        return data;
    }		
}

var tree = new BST();

