import binaryTreeConstructor from "./binaryTrees";

describe('constructs a binary search tree',function(){
    it('only 1 element inserted(to root)',function(){
        let binaryTree = new binaryTreeConstructor();
        binaryTree.insert(5);
        expect(binaryTree.root.data).toBe(5);
    })
    // other tests were made in the DOM - a tree was constructed, elemenets inserted and the tree console logged
    // to check the left and right nodes
})

describe('breadth-first(level) traversal of a binary search tree',function(){
    it('empty tree',function(){
        let binaryTree = new binaryTreeConstructor();
        const data = binaryTree.levelTraversal();
        expect(data).toBe('');
    })
    it('nodes are inserted by level',function(){
        let binaryTree = new binaryTreeConstructor();

        binaryTree.insert(20);
        binaryTree.insert(10);
        binaryTree.insert(30);
        binaryTree.insert(5);
        binaryTree.insert(15);
        binaryTree.insert(25);
        binaryTree.insert(35);

        const traversedData = binaryTree.levelTraversal();
        expect(traversedData).toBe('20 10 30 5 15 25 35')
    })
    it('nodes inserted randomely',function(){
        let binaryTree = new binaryTreeConstructor();

        binaryTree.insert(50);
        binaryTree.insert(10);
        binaryTree.insert(7);
        binaryTree.insert(22);
        binaryTree.insert(40);
        binaryTree.insert(30);
        binaryTree.insert(1);

        const traversedData = binaryTree.levelTraversal();
        expect(traversedData).toBe('50 10 7 22 1 40 30')
    })
    it('all nodes have 2 children',function(){
        let binaryTree = new binaryTreeConstructor();

        binaryTree.insert(50);
        binaryTree.insert(75);
        binaryTree.insert(25);
        binaryTree.insert(38);
        binaryTree.insert(63);
        binaryTree.insert(12);
        binaryTree.insert(88);

        const traversedData = binaryTree.levelTraversal();
        expect(traversedData).toBe('50 25 75 12 38 63 88')
    })
    it('nodes inserted according to the binary tree on the page(at home, data structures section)',function(){
        let binaryTree = new binaryTreeConstructor();

        binaryTree.insert(20);
        binaryTree.insert(10);
        binaryTree.insert(30);
        binaryTree.insert(3);
        binaryTree.insert(15);
        binaryTree.insert(25);
        binaryTree.insert(35);
        binaryTree.insert(1);
        binaryTree.insert(4);
        binaryTree.insert(12);
        binaryTree.insert(17);
        binaryTree.insert(22);
        binaryTree.insert(27);

        let traversedData = binaryTree.levelTraversal();
        expect(traversedData).toBe('20 10 30 3 15 25 35 1 4 12 17 22 27')
    })
})