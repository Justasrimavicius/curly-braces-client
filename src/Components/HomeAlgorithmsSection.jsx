import React from 'react';

function HomeAlgorithmsSection() {
    return (
        <div className='home-algorithms-section'>
            <h1 className='home-section-main-h1'>Algorithms</h1>
            <div className='sorting-algorithms'>
                <h3>Sorting algorithms</h3>
                <div className='a-text'>
                    The first algorithms worth knowing about are sorting algorithms.
                    There are a lot of sorting algorithms. Some of them work only on linear data(example - arrays), some work on 
                    non-linear data, and some on both. Here are some sorting algorithms examples:
                    <ul>
                        <li><strong>Bubble sort</strong>     - iterates through an array and replaces elements in order.</li>
                        <li><strong>Selection sort</strong>  - finds the minimum element in an array, puts it at a new array. Repeats.</li>
                        <li><strong>Merge sort</strong>      - uses Divide and Conquer aproach. Splits data into smaller peaces, then compares those peaces and merges them back together. </li>
                        <li><strong>Tree sort</strong>       - turns a linear data structure to a binary search tree and traverses it.</li>
                    </ul>
                    Now, some sorting algorithms more in depth.
                    <div className='bubble-sort'>
                        <h5>Bubble sort</h5>
                        <span>Bubble sort is the most primitive sorting algorithm. It iterates through elemenets and replaces them if they dont match
                            the criteria of sorting(sorting ascendingly or descendingly).
                            Going more in depth, here are the pluses and minuses of bubble sort:
                            <h6>Positives</h6>
                            <ul>
                                <li>Very simple to implement.</li>
                                <li>Sorts it in the original array, therefore minimal space expanditure.</li>
                            </ul>
                            <h6>Negatives</h6>
                            <ul>
                                <li>Uses nested loops, therefore is slow with big amounts of data.</li>
                            </ul>
                            <h6>Big O notation</h6>
                            Big O notation is an important aspect of algorithms - it shows how efficient it is in time and space ways.
                            This notation is expressed as O(x), where x is the given data number, which is often refered as n.
                            The time complexity for bubble sort is O(n*n). It nested loops, therefore, worst case scenario, it will have to loop
                            through the data twice.
                            Space complexity for buble sort is O(1) - it does not need any more allocated space, it changes the original array.<br></br>
                            <strong><em>Time complexity: O(n*n)</em></strong><br></br>
                            <strong><em>Space complexity: O(1)</em></strong>
                        </span>
                            <h6>Bubble sort in javscript</h6>
                            <img src={require('../Photos/bubbleSort.png')} width='100%' height='auto' alt='bubble-sort-javascript'></img>
                    </div>
                    <div className='merge-sort'>
                        <h5>Merge sort</h5>
                        <span>Merge sort is a more advanced algorithm. It splits the given array in half until the smallest units are reached. 
                            Then it compares units and combines them in a sorting manner.
                            <h6>Positives of merge sort</h6>
                            <ul>
                                <li>Time efficient</li>
                                <li>Consistent run time</li>
                            </ul>
                            <h6>Negatives of merge sort</h6>
                            <ul>
                                <li>Takes up a lot of space for storing sub-arrays</li>
                                <li>Is slower for smaller tasks compared to other algorithms</li>
                            </ul>
                            <h6>Big O notation</h6>
                            <strong><em>Time complexity: O(n*log(n))</em></strong><br></br>
                            <strong><em>Space complexity: O(n)</em></strong>
                        </span>

                            <h6>Merge sort in javscript</h6>
                            <img src={require('../Photos/mergeSort.png')} width='100%' height='auto' alt='merge-sort-javascript'></img>
                    </div>
                </div>
            </div>

            <div className='searching-algorithms'>
                <h3>Searching algorithms</h3>
                <div className='a-text'>
                    Searching algorithms are the next type of algorithms worth knowing.
                    Some searching algorithms work only with sorted data structures(jump search, binary search, ...), others work for any order.
                    Examples of searching algorithms:
                    <ul>
                        <li><strong>Linear search</strong>     - checks each elements in a list until the needed element is found.</li>
                        <li><strong>Binary search</strong>      - searches elements in a sorted data structure(binary tree, array).</li>
                        <li><strong>Jump search</strong>      -  works only on sorted data structures. Jumps through a fixed amount of elements, goes back one element if it has jumped pass the needed element.</li>
                    </ul>
                    <div className='binary-search'>
                        <h5>Binary search</h5>
                        <span>
                            Binary search is a great algorithm for element searching in sorted data structures. It can work by searching an array(middle point beeing the root) 
                            or a binary tree(the node on level 0 beeing the root). On both of these structures, going left means lower values and going right means higher values.
                            <h6>Positives of binary search</h6>
                            <ul>
                                <li>Fast search time.</li>
                                <li>Doesnt need additional space.</li>
                            </ul>
                            <h6>Negatives</h6>
                            <ul>
                                <li>Works only with sorted data.</li>
                            </ul>
                            <h6>Big O notation</h6>
                            <strong><em>Time complexity: O(log(n))</em></strong><br></br>
                            <strong><em>Space complexity: O(1)</em></strong><br></br>
                        </span>

                            <span>Mainly for binary trees, binary search has different variants: breadth first(preoder, inorder, postorder) and depth first(level order) traversals.
                            In the data structures section level traversal was already shown, which is the hardest, therefore i will not be implementing breadth first traversals here.
                            </span>
                            <h6>Binary search for sorted data in an array</h6>
                            <img src={require('../Photos/binarySearch.png')} width='100%' height='auto' alt='bubble-sort-javascript'></img>
                    </div>
                    
                </div>
            </div>
            <div style={{height:'6vh'}} className='filler-for-footer'></div>
        </div>
    );
}

export default HomeAlgorithmsSection;