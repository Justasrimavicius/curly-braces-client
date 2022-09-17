import React from 'react';
import { useState } from 'react';

import Alert from './Alert';

function TestForm() {
    const [alert, setAlert] = useState(null);

    function checkForm(){
        let tempInputCounter = 0;
        let tempCheckedCounter = 0;
        let checkedBoxes = 0;
        const inputs = document.querySelectorAll(`[name^='q']`);
        for(let i = 0; i < inputs.length; i++){
                tempInputCounter++;
                if(inputs[i].checked==true){
                    tempCheckedCounter++;
                    checkedBoxes++;
                }
                if(tempInputCounter == 4 && tempCheckedCounter > 1){
                    setAlert(`You can't select more than one answer!`);
                    return;
                } else if(tempInputCounter==4){
                    tempInputCounter=0;
                    tempCheckedCounter=0;
                }

                
                if(i==inputs.length-1){
                    if(checkedBoxes!=10){
                        setAlert(`You must answer all of the questions!`);
                        return;
                    }
                }
            }

            const form = document.querySelector('.home-test-section form');
            const idInput = document.createElement('input');
            idInput.name='userID';
            idInput.value=`${document.location.href.slice(-24)}`;
            form.append(idInput);


            form.submit();
        }


    return (
        <form noValidate method='post' action='https://curly-braces-server.herokuapp.com/test'>
            <div className='question'>
                <h3>Question 1: What is big O notation?</h3>
                <label>It shows how your code time and space complexity grows when given data gets bigger. THIS
                    <input type='checkbox' name='q1-1'></input>
                </label>
                <label>It is a pizza recipe.
                    <input type='checkbox' name='q1-2'></input>
                </label>
                <label>It shows us the biggest O possible.
                    <input type='checkbox' name='q1-3'></input>
                </label>
                <label>Describes the best case scenario for time and space complexity of our algorithm.
                    <input type='checkbox' name='q1-4'></input>
                </label>
            </div>


            <div className='question'>
                <h3>Question 2: What big O notation of O(n*log(n)) means time-wise?</h3>
                <label>That the algorithm takes n times log(n) time, where n stands for seconds.
                    <input type='checkbox' name='q2-1'></input>
                </label>
                <label>The algorithms time complexity is proportional with the size of given data in n*log(n) correlation. THIS
                    <input type='checkbox' name='q2-2'></input>
                </label>
                <label>That the time for this algorithm to finish isnt correlated with the given data.
                    <input type='checkbox' name='q2-3'></input>
                </label>
                <label>It means that the algorithm is the most efficient there can ever be.
                    <input type='checkbox' name='q2-4'></input>
                </label>
            </div>

            <div className='question'>
                <h3>Question 3: What is breadth first traversal?</h3>
                <label>Binary traversal method, when you first go all the way left, then root, then right.
                    <input type='checkbox' name='q3-1'></input>
                </label>
                <label>Binary traversal method, when you first read the root, then left, then right.
                    <input type='checkbox' name='q3-2'></input>
                </label>
                <label>Binary traversal method, when you first read the left, then right, then root.
                    <input type='checkbox' name='q3-3'></input>
                </label>
                <label>Binary traversal method, when you read nodes by level. THIS
                    <input type='checkbox' name='q3-4'></input>
                </label>
            </div>

            <div className='question'>
                <h3>Question 4: Ways that these traversal methods traverse a binary tree: preorder; inorder; postorder.</h3>
                <label>left,right,root; right,root,left; root,left,right.
                    <input type='checkbox' name='q4-1'></input>
                </label>
                <label>left,right,root; left,root,right; root,left,right.
                    <input type='checkbox' name='q4-2'></input>
                </label>
                <label>root,left,right; left,root,right; left,right,root. THIS
                    <input type='checkbox' name='q4-3'></input>
                </label>
                <label>root,left,right; root,right,left; left,root,right.
                    <input type='checkbox' name='q4-4'></input>
                </label>
            </div>

            <div className='question'>
                <h3>Question 5: Which binary traversal method - preorder, inorder, postorder or level order - prints sorted data?</h3>
                <label>Preorder.
                    <input type='checkbox' name='q5-1'></input>
                </label>
                <label>Postorder.
                    <input type='checkbox' name='q5-2'></input>
                </label>
                <label>Level order.
                    <input type='checkbox' name='q5-3'></input>
                </label>
                <label>Inorder. THIS
                    <input type='checkbox' name='q5-4'></input>
                </label>
            </div>

            <div className='question'>
                <h3>Question 6: Why is merge sort better then bubble sort?</h3>
                <label>Because it uses nested loops.
                    <input type='checkbox' name='q6-1'></input>
                </label>
                <label>Because it is a lot faster with large data. THIS
                    <input type='checkbox' name='q6-2'></input>
                </label>
                <label>Because it does not use a lot of space.
                    <input type='checkbox' name='q7-3'></input>
                </label>
                <label>It is not better.
                    <input type='checkbox' name='q7-4'></input>
                </label>
            </div>

            <div className='question'>
                <h3>Question 7: Stack data structure usage or example.</h3>
                <label>Undo/go back button. THIS
                    <input type='checkbox' name='q7-1'></input>
                </label>
                <label>Maintaining playlists in media players.
                    <input type='checkbox' name='q7-2'></input>
                </label>
                <label>Website request responding.
                    <input type='checkbox' name='q7-3'></input>
                </label>
                <label>Waiting lists(in hospitals, various apps, restaurants, etc.).
                    <input type='checkbox' name='q7-4'></input>
                </label>
            </div>

            <div className='question'>
                <h3>Question 8: Queue data structure usage or example.</h3>
                <label>Serving web requests. THIS
                    <input type='checkbox' name='q8-1'></input>
                </label>
                <label>Used in depth-first-search binary tree traversal.
                    <input type='checkbox' name='q8-2'></input>
                </label>
                <label>Filling a pringles can/eating from a pringles can.
                    <input type='checkbox' name='q8-3'></input>
                </label>
                <label>Undo/go back button.
                    <input type='checkbox' name='q8-4'></input>
                </label>
            </div>

            <div className='question'>
                <h3>Question 9: Why linear binary search is better then a simple for loop, if data is sorted?</h3>
                <label>It is better space-wise.
                    <input type='checkbox' name='q9-1'></input>
                </label>
                <label>It does not need to iterate through all of the elements in the worst case scenario. THIS
                    <input type='checkbox' name='q9-2'></input>
                </label>
                <label>They are equal in all scenarios.
                    <input type='checkbox' name='q9-3'></input>
                </label>
                <label>They are equal in worst case scenarios.
                    <input type='checkbox' name='q9-4'></input>
                </label>
            </div>

            <div className='question'>
                <h3>Question 10(basically, free points): What are good ideas for making an algorithm overall better?</h3>
                <label>Including nested loops.
                    <input type='checkbox' name='q10-1'></input>
                </label>
                <label>Storing data in sub-arrays unnecessarily.
                    <input type='checkbox' name='q10-2'></input>
                </label>
                <label>Not stoping the looping/checking conditions when the algorithm has done its job.
                    <input type='checkbox' name='q10-3'></input>
                </label>
                <label>Doing everything that was mentioned above even though it is not needed. THIS
                    <input type='checkbox' name='q10-4'></input>
                </label>
            </div>

            <button type='button' onClick={()=>{checkForm()}}>Finish</button>
            {alert ? <Alert message={alert} setAlert={{setAlert}}/> : null}
        </form>
    );
}

export default TestForm;