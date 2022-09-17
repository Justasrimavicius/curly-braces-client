

function mergeSort(array){ 
    function merge(arr1, arr2){
        let array = [];
        while(arr1.length && arr2.length){              // while there are elements in both arrays     
            if(arr1[0]<arr2[0]){                    
                array.push(arr1.shift());               // push them into the sorted array
            } else {
                array.push(arr2.shift());
            }
        }                                               // concatenate the arr1 and arr2 in case of left over elements,
        return [...array, ...arr1, ...arr2];            // for example, when there are elements in arr1, but no elements in arr2,
    }                                                   // the upper while loop will stop, therefore an element would be lost
                                                        // if not concatenated
                                                        
    if(array.length<2){                             // base cases when sorting isnt needed
        return array;
    }

    const half = array.length/2;        
    const left = array.splice(0,half);

    return merge(mergeSort(left),mergeSort(array)); // keep returning the merge function - it will start off from the smallest
                                                    // numbers, sort them and keep recursing until everyting is sorted
}

module.exports = mergeSort;