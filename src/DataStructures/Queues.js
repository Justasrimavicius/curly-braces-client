class QueueConstructor{
    constructor(){
        this.queueItems = [];                                       // Main storage of the queue
    }
    enqueue = function(item){
        this.queueItems.push(item);                                 // Push in items to the top
    }
    dequeue = function(){
        if(this.queueItems.length==0){ return 'empty' }             // Remove and return first item enqueued(at the start of queue)
        else { return this.queueItems.shift() }                     // Return empty if no items in queue
    }
    peek = function(){
        return this.queueItems[this.queueItems.length-1];           // Show the last item in the queue without removing it
    }
    peekFirst = function(){
        return this.queueItems[0];
    }
    isEmpty = function(){
        if(this.queueItems.length==0) { return true }               // Check if queue is empty
        else { return false }
    }
    printQueue = function(){                                        // Print the whole queue without modifying it
        let printedQueue = '';                                      // Function for better understanding of the concept
        for(let i = 0; i <= this.queueItems.length - 1 ; i++){
            printedQueue += this.queueItems[i];
            if(i!=this.queueItems.length-1){
                printedQueue+=', ';
            }
        }
        return printedQueue;
    }
}
export default QueueConstructor;