"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MaxHeap = function () {
    function MaxHeap(array, predicateFunction) {
        _classCallCheck(this, MaxHeap);

        this.list = array;
        this.sorted = [];
        this.predicateFunction = predicateFunction || function (firstValue, compareValue) {
            return firstValue - compareValue;
        };
    }

    _createClass(MaxHeap, [{
        key: "getLength",
        value: function getLength() {
            return this.list.length;
        }
    }, {
        key: "sort",
        value: function sort() {
            this.maxHeapify();
            while (this.getLength() > 0) {
                this.swap(0, this.list.length - 1);
                this.sorted.push(this.list.pop());
                this.maxHeapify();
            }
            return this.sorted;
        }
    }, {
        key: "maxHeapify",
        value: function maxHeapify() {
            for (var parentIndex = Math.floor(this.list.length / 2); parentIndex >= 0; parentIndex--) {
                var greatestIndex = parentIndex; // Assume parent node is the largest;  

                if (this.hasLeft(parentIndex) && this.predicateFunction(this.list[this.left(parentIndex)], this.list[greatestIndex]) > 0) {
                    greatestIndex = this.left(parentIndex);
                }

                if (this.hasRight(parentIndex) && this.predicateFunction(this.list[this.right(parentIndex)], this.list[greatestIndex]) > 0) {
                    greatestIndex = this.right(parentIndex);
                }

                if (parentIndex != greatestIndex) {
                    this.swap(parentIndex, greatestIndex);
                    this.maxHeapify();
                }
            }
        }
    }, {
        key: "swap",
        value: function swap(index, swapIndex) {
            var temp = this.list[index];
            this.list[index] = this.list[swapIndex];
            this.list[swapIndex] = temp;
        }
    }, {
        key: "hasLeft",
        value: function hasLeft(index) {
            return this.list[this.left(index)];
        }
    }, {
        key: "hasRight",
        value: function hasRight(index) {
            return this.list[this.right(index)];
        }
    }, {
        key: "left",
        value: function left(index) {
            return index * 2 + 1;
        }
    }, {
        key: "right",
        value: function right(index) {
            return index * 2 + 2;
        }
    }]);

    return MaxHeap;
}();

exports.default = MaxHeap;