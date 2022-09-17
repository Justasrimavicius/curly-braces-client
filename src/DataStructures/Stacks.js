class StackConstructor{
    constructor(){
        this.stackItems = [];                                       // Main storage of the stack
    }
        push = function(item){
            this.stackItems.push(item);                             // Push in items to the top
        }
        pop = function(){
            if(this.stackItems.length==0){ return 'underflow' }     // Remove and return last item from the top
            else { return this.stackItems.pop() }                   // Return underflow if no items at top
        }
        peek = function(){
            return this.stackItems[this.stackItems.length-1];       // Show the last item in the Stack without removing it
        }
        isEmpty = function(){
            if(this.stackItems.length==0) { return true }           // Check if stack is empty
            else { return false }
        }
        printStack = function(){                                    // Print the whole stack without modifying it
            let printedStack = '';
            for(let i = 0; i <= this.stackItems.length - 1 ; i++){
                printedStack += this.stackItems[i];
                if(i!=this.stackItems.length-1){
                    printedStack+=', ';
                }
            }
            return printedStack;
        }
}
export default StackConstructor;