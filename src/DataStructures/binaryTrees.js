import QueueConstructor from "./Queues";

class nodeConstructor{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class binaryTreeConstructor{
    constructor(){
        this.root=null;
    }

    insert = function(data){
        let newNode = new nodeConstructor(data);


        if(this.root==null){
            return this.root=newNode;
        } else {
            function insertNewNode(nodeToInsert, referenceHeadNode){
                if(nodeToInsert.data < referenceHeadNode.data){

                    if(referenceHeadNode.left == null){
                        referenceHeadNode.left=nodeToInsert;
                        return;
                    } else if(referenceHeadNode.left != null){
                        return insertNewNode(nodeToInsert, referenceHeadNode.left);
                    }
                
                } else if(nodeToInsert.data > referenceHeadNode.data){

                    if(referenceHeadNode.right == null){
                        referenceHeadNode.right=nodeToInsert;
                        return;
                    } else if(referenceHeadNode.right != null){
                        return insertNewNode(nodeToInsert, referenceHeadNode.right);
                    }
                }

                }

            insertNewNode(newNode,this.root);
            }
        }

        levelTraversal = function(){
            let queue = new QueueConstructor();
            let traversedData = '';

            if(this.root==null){
                return traversedData;
            }
            // traversedData+= ` ${this.root.data}`;
            queue.enqueue(this.root);
            return traverseByLevel(queue.dequeue());

            function traverseByLevel(referenceHead){
                if(referenceHead.left){
                    queue.enqueue(referenceHead.left);
                }
                if(referenceHead.right){
                    queue.enqueue(referenceHead.right);
                }
                
                // for semanticity
                if(traversedData==''){
                    traversedData+=`${referenceHead.data}`;
                } else {
                    traversedData+=` ${referenceHead.data}`;
                }

                if(queue.isEmpty()){
                    return traversedData;
                }

                return traverseByLevel(queue.dequeue());
            }
        }

        // this function is purely for this project to create the visuals
        levelTraversalForVisuals = function(){
            let changeColorObj = []; // nodes with their data(id in the dom) and color will be stored here in order

            let queue = new QueueConstructor();
            let traversedData = '';

            if(this.root==null){
                return traversedData;
            }
            changeColorObj.push({id:`${this.root.data}`,color:'green'});
            traversedData+= ` ${this.root.data}`;
            queue.enqueue(this.root);

            traverseByLevel(queue.dequeue());

            const Queue = document.querySelector('.queue'); // the visual queue block
            const outputLine = document.querySelector('.level-traversal-output');
            
            let coloringInterval = setInterval(() => {
                let colorChangeOperation = changeColorObj.shift();
                if(!document.querySelector(`[data-id='${colorChangeOperation.id}']`)){
                    return clearInterval(coloringInterval);
                }
                if(colorChangeOperation.color=='orange'){
                    const queueItem = document.createElement('div');
                    queueItem.classList.add('queue-block');
                    queueItem.innerText=`${colorChangeOperation.id}`;
                    Queue.append(queueItem);
                } else {
                    const allQueueItems = Queue.childNodes;
                    allQueueItems.forEach(element=>{
                        if(element.innerText==colorChangeOperation.id){
                            element.remove();
                        }
                    })
                    outputLine.innerText+=` ${colorChangeOperation.id}`
                }

                document.querySelector(`[data-id='${colorChangeOperation.id}']`).style.backgroundColor=`${colorChangeOperation.color}`;
                if(changeColorObj.length==0){
                    clearInterval(coloringInterval);
                }
            }, 1500);

            function traverseByLevel(referenceHead){
                if(referenceHead.left){
                    changeColorObj.push({id:`${referenceHead.left.data}`,color:'orange'});
                    queue.enqueue(referenceHead.left);
                }
                if(referenceHead.right){
                    changeColorObj.push({id:`${referenceHead.right.data}`,color:'orange'});
                    queue.enqueue(referenceHead.right);
                }
                
                if(queue.isEmpty()){
                    return traversedData;
                }
                changeColorObj.push({id:`${queue.peekFirst().data}`,color:'green'});

                return traverseByLevel(queue.dequeue());
            }
        }

    }


export default binaryTreeConstructor;