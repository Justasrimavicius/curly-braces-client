import linkedListsConstructor from "./linkedLists";

describe('#insertAtHead',function(){
    it('inserts a node to the beginning of the list(to the head)',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(5);                         // inserts at head
        expect(linkedList.head.data).toBe(5);               // head data should be 5
        expect(linkedList.head.next).toBe(null);            // current length is only 1, so head should point to null
        expect(linkedList.length).toBe(1);                  
        linkedList.insertAtHead(7);                         // insert a new node to head
        expect(linkedList.head.data).toBe(7);               // new head data should be 7
        expect(linkedList.head.next.data).toBe(5);          // new head should point to the previous node
    })
})

describe('#insertAtIndex',function(){
    it('given index is at the start of the linked list',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtIndex(999,0);
        console.log(linkedList)
        expect(linkedList.head.data).toBe(999);
    })
    it('inserts a node at the specified index of a linked list',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(10);
        linkedList.insertAtHead(150);
        linkedList.insertAtHead(1100);

        linkedList.insertAtIndex(75, 1);
        expect(linkedList.head.next.data).toBe(75);
    })
    it('given index is less than 0 or is more than highest current index',function(){
        let linkedList = new linkedListsConstructor();
        expect(linkedList.insertAtIndex(999, -1)).toBe(null);

        linkedList.insertAtHead(5);
        expect(linkedList.insertAtIndex(10001,1)).toBe(null);
    })
})

describe('#print',function(){
    it('prints null in an empty linked list',function(){
        let linkedList = new linkedListsConstructor();
        expect(linkedList.print()).toBe(null);
    })
    it('prints a linked list with a single node',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(3);
        expect(linkedList.print()).toBe('3');
    })
    it('prints a linked list with multiple values',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(3);
        linkedList.insertAtHead(33);
        linkedList.insertAtHead(333);
        expect(linkedList.print()).toBe('333 => 33 => 3')
    })
})

describe('#getByIndex',function(){
    it('when given index is less than zero',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(6);
        expect(linkedList.getByIndex(-1)).toBeNull();
    })
    it('when given index doesnt exist in the linked list',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(6);
        expect(linkedList.getByIndex(2)).toBeNull();
    })
    it('when given index is in the linked list',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(2);
        linkedList.insertAtHead(4);
        linkedList.insertAtHead(6);
        expect(linkedList.getByIndex(1).data).toBe(4);
    })
    it('when given index is 0',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(2);
        linkedList.insertAtHead(4);
        linkedList.insertAtHead(6);
        linkedList.insertAtHead(8);
        expect(linkedList.getByIndex(0).data).toBe(8);
    })
})

describe('#removeHead',function(){
    it('removes node from head of a linked list with multiple values',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(10);
        linkedList.insertAtHead(20);
        linkedList.insertAtHead(30);
        
        linkedList.removeHead();
        expect(linkedList.head.data).toBe(20);
        expect(linkedList.length).toBe(2);
    })
    it('removes node from head of a linked list with 1',function(){
        let linkedList = new linkedListsConstructor();
        linkedList.insertAtHead(10);
        linkedList.removeHead();
        expect(linkedList.head).toBe(null);
    })
    it('removeHead on a linked list with no values',function(){
        let linkedList = new linkedListsConstructor();
        expect(linkedList.removeHead()).toBe(null);
    })
})
describe('#removeAtIndex',function(){
    it('removeAtIndex with a given index less than zero or more than linked list highest index',function(){
        let linkedList = new linkedListsConstructor();
        expect(linkedList.removeAtIndex(-1)).toBe(null);

        linkedList.insertAtHead(2);
        linkedList.insertAtHead(5);
        linkedList.insertAtHead(8);

        expect(linkedList.removeAtIndex(3)).toBe(null);
    })
    it('removes at the middle of the linked list',function(){
        let linkedList = new linkedListsConstructor();
        
        linkedList.insertAtHead(6);
        linkedList.insertAtHead(10);
        linkedList.insertAtHead(14);
        linkedList.insertAtHead(18);
        linkedList.removeAtIndex(2);
        expect(linkedList.getByIndex(2).data).toBe(6);

    })
})