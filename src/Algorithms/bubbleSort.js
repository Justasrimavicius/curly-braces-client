function bubbleSort(array){
    if(array.length==0){                        // cant sort no elements
        return array;
    }
    if(array.length==1){                        // cant sort a single element
        return array;
    }
    for(let i = 0; i < array.length; i++){      // get an element
        for(let j = 0; j < array.length; j++){  // then loop through all of the other elements
            if(array[j]>array[i]){              // compare them. If the second element is larger, change their values.
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }                                           // repeat until the first loop traverses through all arrays elements
    return array;



}

module.exports = bubbleSort;

