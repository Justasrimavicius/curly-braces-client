import binarySearch from "./binarySearch";

describe('binary search testing',function(){
    it('on 0 elements',function(){
        let array = [];
        expect(binarySearch(array,9)).toEqual('Array empty.');
    })
    it('on 1 element',function(){
        let array = [5];
        expect(binarySearch(array,5)).toEqual('Element found.');
        expect(binarySearch(array,1)).toEqual('Element not found.')
    })
    it('on multiple elements',function(){
        let array = [5,6,9,11,12,13,20,22];
        expect(binarySearch(array,9)).toEqual('Element found.');
    })
    it('on 100k elements',function(){
        let array = [];
        for(let i = 1; i <= 100000; i++){
            array.push(i);
        }
        expect(binarySearch(array,1)).toEqual('Element found.');
    })
})