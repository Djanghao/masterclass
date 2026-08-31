# Typescript Solution, MaxPriorityQueue

**Author:** jyo142
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-stack/solutions/5090064/](https://leetcode.com/problems/max-stack/solutions/5090064/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In addition to keeping track of the actual stack, the tricky part of the problem is to keep track of the max element and be able to retrieve that max element efficiently. If we use a max heap (MaxPriorityQueue library) we can do just that.

However we also need to be able to keep track of when we remove an element from the MaxPriorityQueue (dequeue the max) so that we do not accidently peek/pop an element that is already removed. Same logic for removing from the stack, we do not want to peekMax, popMax an element that is already removed.

# Approach
<!-- Describe your approach to solving the problem. -->
- On every push, we push the element to the stack and also enqueue the element onto the max heap
- On a pop, we want to get the first element (from the top, end of the stack array) that has not been removed yet and add that value to the removedIndexes and return the value.
- On a top, same logic as pop to get the first element that has not been removed yet and return that value.
- On a peekMax, we want to get the first element from the max heap that has not been removed yet and return that value.
- On a popMax, same as peekMax, we want to get the first element from the max heap that has not been removed yet and add it to the removedIndexes and return that value.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- **push(x):**
    - Appending to the stack: O(1)
    - Enqueueing into the max heap: O(log n), where n is the number of elements in the max heap.
    - So, the overall runtime of push(x) is O(log n).
- **pop():**
    - Finding the topmost non-removed element in the stack: O(1) (average case, considering the typical use case)
    - Removing from the stack: O(1)
    - So, the overall runtime of pop() is O(1).
- **top():**
    - Finding the topmost non-removed element in the stack: O(1) (average case, considering the typical use case)
    - So, the overall runtime of top() is O(1).
- **peekMax():**
    - Accessing the front element of the max heap: O(1)
    - Dequeueing from the max heap until finding a non-removed index: O(k), where k is the number of removed elements after the top element.
    - So, the overall runtime of peekMax() depends on the number of removed elements after the top element, but in the average case, it would be close to O(1).
- **popMax():**
    - Dequeueing from the max heap: O(log n) (amortized)
    - Finding the topmost non-removed element in the stack: O(1) (average case, considering the typical use case)
    - Removing from the stack: O(1)
    - So, the overall runtime of popMax() is O(log n).
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- **Stack (this.stack)**: O(n).
- **Max Heap (this.maxHeap)**: O(n).
- **Set of Removed Indexes (this.removedIndexes)**: O(n).

# Code
```
class MaxStack {
    private maxHeap;
    private stack;
    private removedIndexes;
    constructor() {
        this.stack = [];
        this.maxHeap = new MaxPriorityQueue((a,b) => {
            b.value - a.value
        });
        this.removedIndexes = new Set<number>();
    }

    push(x: number): void {
        this.stack.push(x);
        this.maxHeap.enqueue({ value: x, index: this.stack.length - 1}, x);
    }

    pop(): number {
        let stackTopIndex = this.stack.length - 1
        while (this.removedIndexes.has(stackTopIndex)) {
            stackTopIndex--;
        }
        this.removedIndexes.add(stackTopIndex);
        return this.stack[stackTopIndex];
    }

    top(): number {
        let stackTopIndex = this.stack.length - 1
        while (this.removedIndexes.has(stackTopIndex)) {
            stackTopIndex--;
        }
        return this.stack[stackTopIndex];
    }

    peekMax(): number {
        let topMax = this.maxHeap.front().element;
        while (this.removedIndexes.has(topMax.index)) {
            this.maxHeap.dequeue();
            topMax = this.maxHeap.front().element;
        }
        return topMax.value;
    }

    popMax(): number {
        let topMax = this.maxHeap.dequeue().element;
        while (this.removedIndexes.has(topMax.index)) {
            topMax = this.maxHeap.dequeue().element;
        }
        this.removedIndexes.add(topMax.index)
        return topMax.value;
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
```