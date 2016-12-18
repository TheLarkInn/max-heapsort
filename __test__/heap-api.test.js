import MaxHeap from '../index.js';

test('heap can calculate left child index based on parent index', () => {
    let array = [8,7,6,5,4,3,2,1];
    let heapArray = new MaxHeap(array);

    expect(heapArray.left(0)).toEqual(1);
});

test('heap can calculate right child index based on parent index', () => {
    let array = [8,7,6,5,4,3,2,1];
    let heapArray = new MaxHeap(array);

    expect(heapArray.right(0)).toEqual(2);
    expect(heapArray.right(2)).toEqual(6);
});

test('heap can swap two items at any index', () => {
    let array = [0,1,2,3,4,5,6];
    let heapArray = new MaxHeap(array);

    heapArray.swap(0, heapArray.getLength()-1);

    expect(heapArray.list).toEqual([6,1,2,3,4,5,0]);
});

test('heap can determine if parent has right child', () => {
    let array = [0,1,2,3,4,5,6,7];
    let heapArray = new MaxHeap(array);

    expect(heapArray.hasRight(3)).toBe(undefined);
});

test('heap can determine if parent has left child', () => {
    let array = [0,1,2,3,4,5,6,7];
    let heapArray = new MaxHeap(array);

    expect(heapArray.hasLeft(3)).toBe(7);
});

test('heap can maxHeapify', () => {
    let array = [7,1,9];
    let heapArray = new MaxHeap(array);

    heapArray.maxHeapify()

    expect(heapArray.list).toEqual([9,1,7]);
});

test('heap can remove highest number', () => {
    let array = [7,1,9];
    let heapArray = new MaxHeap(array);

    heapArray.maxHeapify();
    heapArray.removeMax();

    expect(heapArray.list).toEqual([7,1]);
})