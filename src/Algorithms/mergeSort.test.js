const mergeSort = require("./mergeSort");

describe('tests for merge sort',function(){
    it('merge sort on 0 elements',function(){
        const array = [];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([]);
    })
    it('merge sort on 1 element',function(){
        const array = [5];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([5]);
    })
    it('merge sort on unequal number of elements',function(){
        const array = [8,7,6,3,2,9,15,12,16];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([2,3,6,7,8,9,12,15,16])
    })
    it('merge sort on equal number of elements',function(){
        const array = [10,15,13,5,6,9,17,16,19];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([5,6,9,10,13,15,16,17,19])
    })
    // it('merge sort with 100k elements',function(){
    //     const array = [];
    //     while(array.length<100000){
    //         array.push(Math.floor(Math.random()*100000));
    //     }
    //     const sortedArray = mergeSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 1.7s(5 tests)
    // })
    // it('merge sort with 200k elements',function(){
    //     const array = [];
    //     while(array.length<200000){
    //         array.push(Math.floor(Math.random()*200000));
    //     }
    //     const sortedArray = mergeSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 4.4s(5 tests)
    // })
    // it('merge sort with 300k elements',function(){
    //     const array = [];
    //     while(array.length<300000){
    //         array.push(Math.floor(Math.random()*300000));
    //     }
    //     const sortedArray = mergeSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 8.9s(5 tests)
    // })
    // it('merge sort with 400k elements',function(){
    //     const array = [];
    //     while(array.length<400000){
    //         array.push(Math.floor(Math.random()*400000));
    //     }
    //     const sortedArray = mergeSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 15s(5 tests)
    // })
    // it('merge sort with 500k elements',function(){
    //     const array = [];
    //     while(array.length<500000){
    //         array.push(Math.floor(Math.random()*500000));
    //     }
    //     const sortedArray = mergeSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 22.1s(5 tests)
    // })
})