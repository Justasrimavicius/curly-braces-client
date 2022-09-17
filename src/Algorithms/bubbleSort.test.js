const bubbleSort =  require("./bubbleSort");

describe('Bubble sort algorithm tests',function(){
    it('0 elements',function(){
        const array = [];
        expect(bubbleSort(array)).toEqual([]);
    })
    it('1 element',function(){
        const array = [1];
        expect(bubbleSort(array)).toEqual([1]);
    })
    it('multiple elements',function(){
        const array = [2,3,7,4,1,15,17,10];
        expect(bubbleSort(array)).toEqual([1,2,3,4,7,10,15,17]);
    })
    //     it('bubble sort with 100k elements',function(){
    //     const array = [];
    //     while(array.length<100000){
    //         array.push(Math.floor(Math.random()*100000));
    //     }
    //     const sortedArray = bubbleSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 12.3s(5 tests)
    // })
    //     it('bubble sort with 200k elements',function(){
    //     const array = [];
    //     while(array.length<200000){
    //         array.push(Math.floor(Math.random()*200000));
    //     }
    //     const sortedArray = bubbleSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 47.5s(5 tests)
    // })
    //     it('bubble sort with 300k elements',function(){
    //     const array = [];
    //     while(array.length<300000){
    //         array.push(Math.floor(Math.random()*300000));
    //     }
    //     const sortedArray = bubbleSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 107.3s(5 tests)
    // })
    //     it('bubble sort with 400k elements',function(){
    //     const array = [];
    //     while(array.length<400000){
    //         array.push(Math.floor(Math.random()*400000));
    //     }
    //     const sortedArray = bubbleSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 190.1s(5 tests)
    // })
    //     it('bubble sort with 500k elements',function(){
    //     const array = [];
    //     while(array.length<500000){
    //         array.push(Math.floor(Math.random()*500000));
    //     }
    //     const sortedArray = bubbleSort(array);
    //     expect(sortedArray).toEqual('Big chunk of sorted data')
    //     // TIME: 299.3s(5 tests)
    // })
})