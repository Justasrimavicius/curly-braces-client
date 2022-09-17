import StackConstructor from "./Stacks";

describe('stack testing',function(){

    it('single element pushed in, peek',function(){
        let stack = new StackConstructor();
        stack.push(1);
        expect(stack.peek()).toBe(1);
    })
    it('multiple elements pushed in, peek',function(){
        let stack = new StackConstructor();
        stack.push(1);
        stack.push(23);
        stack.push(98);

        expect(stack.peek()).toBe(98);
        expect(stack.printStack()).toBe('1, 23, 98')
    })


    it('pop function',function(){
        let stack = new StackConstructor();
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.peek()).toBe(4);
        expect(stack.pop()).toBe(4);
        expect(stack.printStack()).toBe('2, 3');
    })

    it('pop on empty stack, isEmpty',function(){
        let stack = new StackConstructor();
        expect(stack.pop()).toBe('underflow');
        expect(stack.isEmpty()).toBe(true);
    })
})
