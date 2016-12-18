export default class MaxHeap {
    constructor(array, predicateFunction) {
        this.list = array;
        this.sorted = [];
        this.predicateFunction = predicateFunction || function(firstValue, compareValue, array) {
            return firstValue - compareValue;
        }
    }

    getLength() { return this.list.length }

    sort() {
        this.maxHeapify();
        while(this.getLength() > 0) {
            this.removeMax();
            this.maxHeapify();
        }
        return this.sorted;
    }

    getMax() {
        this.maxHeapify();
        return this.list[0];
    }

    removeMax() {
        this.swap(0, this.list.length - 1);
        this.sorted.push(this.list.pop());
    };

    maxHeapify() {
        for (let parentIndex = Math.floor(this.list.length / 2); parentIndex >= 0; parentIndex--) { 
            let greatestIndex = parentIndex; // Assume parent node is the largest;  
            
            if ( this.hasLeft(parentIndex) && this.predicateFunction(this.list[this.left(parentIndex)], this.list[greatestIndex]) > 0 ) {    
                greatestIndex = this.left(parentIndex);
            }

            if ( this.hasRight(parentIndex) && this.predicateFunction(this.list[this.right(parentIndex)], this.list[greatestIndex]) > 0 ) {
                greatestIndex = this.right(parentIndex);
            }

            if (parentIndex != greatestIndex) {
                this.swap(parentIndex, greatestIndex);
                this.maxHeapify();
            }
        }
    }

    insert(value) {
        this.list.push(value);
        this.maxHeapify();
    }

    swap(index, swapIndex) {
        let temp = this.list[index];
        this.list[index] = this.list[swapIndex];
        this.list[swapIndex] = temp; 
    }

    hasLeft(index) {
        return this.list[this.left(index)];
    } 
    
    hasRight(index) {
        return this.list[this.right(index)];
    } 

    left(index) {
        return (index * 2) + 1;
    }

    right(index) {
        return (index * 2) + 2;
    }
}

