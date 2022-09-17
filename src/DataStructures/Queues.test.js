import QueueConstructor from "./Queues";

describe('Queue testing',function(){

    it('single element pushed in, peek',function(){
        let queue = new QueueConstructor();
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
    })
    it('multiple elements pushed in, peek',function(){
        let queue = new QueueConstructor();
        queue.enqueue(1);
        queue.enqueue(23);
        queue.enqueue(98);

        expect(queue.peek()).toBe(98);
        expect(queue.printQueue()).toBe('1, 23, 98')
    })


    it('pop function',function(){
        let queue = new QueueConstructor();
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.peek()).toBe(4);
        expect(queue.dequeue()).toBe(2);
        expect(queue.printQueue()).toBe('3, 4');
    })

    it('pop on empty stack, isEmpty',function(){
        let queue = new QueueConstructor();
        expect(queue.dequeue()).toBe('empty');
        expect(queue.isEmpty()).toBe(true);
    })
})
