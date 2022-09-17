import React from 'react';
import LevelOrderTraversal from './LevelOrderTraversal.jsx';

require('../Photos/Stacks.png')


function HomeDataStructuresSection() {



    return (
        <div className='home-dataStructures-section'>
            <h1 className='home-section-main-h1'>Data structures</h1>
            <div className='linear-ds'>
                <div className='stacks'>
                    <h3>Stacks</h3>
                    <div className='ds-text'>
                        Stacks are one of the two main data structures, that everyting else is built on in CS. A great analogy
                        for them is a stack of books: When you stack books one on top of the other, you take it out from the top - 
                        stacks are based on First In Last Out principle.
                    </div>
                    <h6 className='implementation'>Implementation</h6>
                    <div className='ds-text'>
                        Stacks in javascript can be basic arrays. Basic operations of stacks include: 
                        <ul>
                            <li>push()</li>
                            <li>pop()</li>
                            <li>isEmpty()</li>
                            <li>printStack()</li>
                        </ul>
                        Check out how all of them look like in a class constructor:
                        <img src={require('../Photos/Stacks.png')} height='auto' width='100%' alt='stacks-implementation'></img>
                        <h6 className='testing-h6'>Testing of this stack implementation on <a href='https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/Stacks.test.js'>https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/Stacks.test.js</a></h6>
                    </div>
                </div>
                <div className='queues'>
                    <h3>Queues</h3>
                    <div className='ds-text'>
                        Queues are another very important data structure for understanding CS. they work based on First in First out principle.
                        A cinema queue is an amazing analogy for queues - the first person that comes to the line gets served.
                    </div>
                    <h6 className='implementation'>Implementation</h6>
                    <div className='ds-text'>
                        Queues in javascript can also, just like stacks, be basic arrays. Operations of queues are:
                        <ul>
                            <li>enqueue()</li>
                            <li>dequeue()</li>
                            <li>peek()</li>
                            <li>isEmpty()</li>
                        </ul>
                        Check out how all of them look like in a class constructor:
                        <img src={require('../Photos/Queues.png')} height='auto' width='100%' alt='queues-implementation'></img>
                        <h6 className='testing-h6'>Testing of this queue implementation on <a href='https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/Queues.test.js'>https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/Queues.test.js</a></h6>
                    </div>
                </div>
                <div className='linked-lists'>
                    <h3>Linked lists</h3>
                    <div className='ds-text'>
                        Linked lists are a bit different than previous data structures mentioned. They are a linear series of data, called nodes,
                        with a pointer to the next node. An analogy for linked lists is a treasure hunt - you start by having a hint which leads
                        to the next clue - just like a node leads to the next node.
                        <strong> The start of a linked list is called a HEAD. it then points to a node, which contains data and a link to another node.
                        </strong>
                            <p style={{marginTop:'10px'}}>
                            When the end is reached, the last node points to NULL.
                            There are 3 variants of linked lists: singly linked, doubly linked and circular. Singly linked lists can point to only the following node,
                            doubly linked lists, you guessed it, can point to the next node and to the previous node, and circular lists last node points to the beginning.
                            In the implementation code below, only the singly linked list is shown.
                            </p>
                    </div>
                    <h6 className='implementation'>Implementation</h6>
                    <div className='ds-text'>
                        Implementation of a linked list is a bit complicated because of it not having indexes. A linked list should be able to:
                        <ul>
                            <li>Insert at head</li>
                            <li>Insert at given index</li>
                            <li>delete head</li>
                            <li>delete at given index</li>

                        </ul>
                        These functions(and helper functions, just like print()) in javascript look like this:
                        <img src={require('../Photos/linkedLists1.png')} height='auto' width='100%' alt='linked-lists-implementation1'></img>
                        <img src={require('../Photos/linkedLists2.png')} height='auto' width='100%' alt='linked-lists-implementation2'></img>
                        <h6 className='testing-h6'>Testing of this linked list implementation on <a href='https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/linkedLists.test.js'>https://github.com/Justasrimavicius/curly-braces/blob/main/client/src/DataStructures/linkedLists.test.js</a></h6>
                    </div>
                </div>
                <div className='binary-tress'>
                    <h3>Binary trees</h3>
                    <div className='ds-text'>
                        Binary trees, unlike stacks, queues or arrays, are not a linear data structure. Just like a linked list, it does not
                        have indexes - it works by having a node, a left pointer and a right pointer.<br></br>
                        <strong><em>A binary tree node can have 0, 1 or 2 children - it can point to the left, right or not point to anything(it does not have any children).</em></strong>
                        You can traverse(go through nodes) of a binary tree in multiple ways: in-order, pre-order, post-order, or level-order:
                        <ul>
                            <li>In-order traversal is going to the left subtree first, then the root, than going to the right.</li>
                            <li>Pre-order traversal is going to the root first, than going to the left, and then to the right.</li>
                            <li>post-order traversal is going to the left first, than going to the right, and then to the root.</li>
                            <li>level-order traversal goes through nodes by level starting at head(level 0), going to the first left children and then to the right children(level 1), so on and so forth..</li>
                        </ul>
                    </div>
                    <h6 className='implementation'>Implementation</h6>
                    <div className='ds-text'>
                        In order to better understand binary trees, here is a visual representation of how they work:
                        <LevelOrderTraversal />
                    </div>
                </div>
            </div>
        <div style={{height:'6vh'}} className='filler-for-footer'></div>
        </div>
    );
}

export default HomeDataStructuresSection;