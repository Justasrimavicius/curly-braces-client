class linkedListNode{                   // this class will be the node constructor
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}

class linkedListsConstructor{
    constructor(){
        this.head = null;                                           // the head(the start) of the linked list
        this.length = 0;
    }

    insertAtHead = function(data){                                  // // time complexity of inserting at head is O(1)
        const newNode = new linkedListNode(data, this.head);        // first, create a new node with the given data and a pointer to our current head
        this.head = newNode;                                        // assign our head to the newly created node
        this.length++;                                              // increment the length
    }
    getByIndex = function(index){                                   // // time complexity of getting by index is O(n)
        if(index < 0 || index > this.length-1){                     // first, check if the given index is less than zero or more than max linked list length
            return null;
        } else {
            let current = this.head;                                // if it isnt, get a starting point of our linked lists(starts at head)
            for( let i = 0; i < index; i++){                        // go through each linked list. When given index is found, return the node
                current = current.next;
            }
            return current;
        }
    }
    insertAtIndex = function(data,index){
        if(index < 0 || (index > this.length-1 && this.length>=1)){ // first, if given index is less than zero or length is more than max length of linked list
            return null;                                            // return - cant insert at that index.
        }
        if(index == 0){                                             // when given index is 0, insertAtIndex becomes insertAtHead.
           return this.insertAtHead(data);
        }

        let previousNode = this.getByIndex(index-1);                // otherwise, get one node before the one we want to insert
        if(previousNode==null){                                     // if it doesnt exist,
            return null;                                            // return
        }
        const newNode = new linkedListNode(data, previousNode.next);// if it does, create a new node that points to the node after where we want to insert our new node
        previousNode.next = newNode;                                // and make the previous node point to the new node

        this.length++;                                              // increment the length of linked list
    }
    removeHead = function(){
        if(this.length==0){                                         // first, if the length of a linked list is 0, the head does not exist
            return null;                                            // therefore we return
        }
        
        this.head=this.head.next;                                   // else, we make the node, that goes after current head, the head.
        this.length--;                                              // decrement the length

    }
    removeAtIndex = function(index){
        if(index < 0 || index > this.length-1){                     // similarly to inserting at index, we cant remove at an index below 0 or above max length
            return null;
        }

        let previousNode = this.getByIndex(index-1);                // we get the previous node of the one we want to remove
        previousNode.next = this.getByIndex(index).next;            // make that previous node point to the node that goes after the one we want to remove
        length--;                                                   // decrement the length

    }

    print = function(){
        let printedList = '';
        let currentNode = this.head;                                // get the starting point - the head

        if(this.length==0){                                         // if the length is 0(could also be if the head is null), there is nothing to print. Return
            return null;
        }
        while(currentNode){                                         // while there is a current node(it isnt null)
            printedList+=currentNode.data;                          // we add the data of that node to printedList
            if(currentNode.next){                                   // if there is a node afterwards, just so it is a bit prettier, we add an arrow(for pure visuals)
                printedList+=' => ';                    
            }

            currentNode=currentNode.next;                           // move forward to the next node
        }
        return printedList;
    }
}


export default linkedListsConstructor;