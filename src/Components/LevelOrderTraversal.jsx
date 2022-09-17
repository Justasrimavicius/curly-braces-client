import React from 'react';
import binaryTreeConstructor from '../DataStructures/binaryTrees';
function LevelOrderTraversal() {
    let alreadyTraversing = false;
    return (
        <div className='aligning-div'>
            <div className='level-order-traversal-explanation'>
                <h3>Level order traversal</h3>
                <div>
                    <strong>Recap:</strong><br></br>
                    The circles below are nodes. They either point to left, right or nothing.<br></br>
                    A node contains 2, 1 or 0 pointers and data.<br></br>
                    <strong>Color meanings:</strong><br></br>
                    <em style={{textDecoration:'underline'}}>Orange</em> color means the node has been stored in a queue.<br></br>
                    <em style={{textDecoration:'underline'}}>Green</em> color means the node has been read(data is outputed).<br></br>
                    The steps of a level order traversal are as follows:
                    <ol>
                        <li>Go to root node. Read the root node.</li>
                        <li>Store left node, store right node.</li>
                        <li>Read the root node, left(first added) node from queue, store its left and right nodes in queue.</li>
                        <li>Read the right(second added) node from queue, store its left and right nodes in queue.</li>
                        <li>Repeat the reading data from node and storing its left and right nodes.</li>

                    </ol>
                </div>
            </div>
            <div className='level-order-traversal'>
                <div className='level-order-traversal-data-visualisation'>
                    <div className='queue'></div>
                    <div className='level-traversal-output'>Output: </div>
                </div>
                <div className='binary-tree'>
                    <div className='level0'>
                        <div className='root' data-id='20'>20</div>
                    </div>
                    <div className='level1'>
                        <div className='left-subtree' data-id='10'>10</div>
                        <div className='right-subtree' data-id='30'>30</div>
                    </div>
                    <div className='level2'>
                        <div className='left left-subtree' data-id='3'>3</div>
                        <div className='right left-subtree' data-id='15'>15</div>
                        <div className='left right-subtree' data-id='25'>25</div>
                        <div className='right right-subtree' data-id='35'>35</div>
                    </div>
                    <div className='level3'>
                        <div className='left left-subtree left-left-subtree' data-id='1'>1</div>
                        <div className='right left-subtree left-left-subtree' data-id='4'>4</div>
                        <div className='left left-subtree left-right-subtree' data-id='12'>12</div>
                        <div className='right left-subtree left-right-subtree' data-id='17'>17</div>
                        <div className='left right-subtree right-left-subtree' data-id='22'>22</div>
                        <div className='right right-subtree right-left-subtree' data-id='27'>27</div>
                    </div>
                    <button onClick={()=>{
                        if(alreadyTraversing)return;
                        else{
                        alreadyTraversing=true;
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

                        binaryTree.levelTraversalForVisuals();

                        setTimeout(() => {
                            alreadyTraversing=false;
                            document.querySelectorAll('[data-id]').forEach(element=>{
                                element.style.backgroundColor='aliceblue';
                            })
                            document.querySelector('.level-traversal-output').innerText='Output: ';
                        }, 41000);
                        }
                    }}>Start traversing</button>
                </div>
        

            </div>
            <div style={{textAlign:'center',marginBottom:'20px'}}>This is how a binary search tree looks like. There are various traversal methods(the method shown above
                is level, or breadth-first, traversal), but the tree structure does not change - it can have only 1, 2 or 
                0 children and data.
            </div>
            <div>All of the code can be found on <a href='https://github.com/Justasrimavicius/curly-braces/tree/main/client/src'>https://github.com/Justasrimavicius/curly-braces/tree/main/client/src</a></div>
        </div>

    );
}

export default LevelOrderTraversal;