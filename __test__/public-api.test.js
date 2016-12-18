import MaxHeap from '../index.js';

test('sorts distinct array of ints', () => {
    let array = [8,7,6,5,4,3,2,1];
    let heapArray = new MaxHeap(array);

    expect(array.sort()).toEqual([1,2,3,4,5,6,7,8]);
});

test('sorts non-distinct reverse order array of ints', () => {
    let array = [8,8,8,7,6,5,5,4,3,2,1];
    let heapArray = new MaxHeap(array);

    expect(array.sort()).toEqual([1,2,3,4,5,5,6,7,8,8,8]);
});

test('sorts non-distinct reverse order array of ints', () => {
    let array = [1,8,8,8,7,6,5,2,6,5,4,3,2];
    let heapArray = new MaxHeap(array);

    expect(array.sort()).toEqual([1,2,2,3,4,5,5,6,6,7,8,8,8]);
});

test('can recieve max value from heap', () => {
    let array = [1,2,2,2,2,2,2,2,2,7];
    let heapArray = new MaxHeap(array);

    expect(heapArray.getMax()).toBe(7);
});

test('can use custom sort predicate (objects w/ properties)', () => {
    let array = [{id: 6}, {id: 2}, {id: 5}]
    let heapArray = new MaxHeap(array, (current, next) => {
        return current.id - next.id;
    })
    expect(heapArray.sort()).toEqual([{id: 6}, {id: 5}, {id: 2}]);
});

test('can add item and heap is heapified', () => {
    let array = [8,7,6,5,4,3,2,1];
    let heapArray = new MaxHeap(array);
    heapArray.insert(9);

    expect(heapArray.list).toEqual([9, 8, 6, 7, 4, 3, 2, 1, 5]);
});

