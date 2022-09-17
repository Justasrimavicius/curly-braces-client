function binarySearch(array,searchValue){
    if(array.length==0){                                                        // no explanation needed
        return 'Array empty.';
    }
    if(array.length==1){                                                        // here too
        if(array[0]==searchValue){
            return `Element found.`;
        } else {
            return 'Element not found.';
        }
    }

    const midPoint = Math.round(array.length/2);
    if(array[midPoint-1]==searchValue){                                           // after getting the midpoint, check if it is
        return `Element found.`;                                                // the value we need
    } else {
        if(array[midPoint]>searchValue){                                        // if not, check if we need to go left
            return binarySearch(array.slice(0,midPoint),searchValue);           // (if its lower)
        } else {
           return binarySearch(array.slice(midPoint,array.length),searchValue); // or right(if its higher)
        }
    }

    
}

module.exports = binarySearch;