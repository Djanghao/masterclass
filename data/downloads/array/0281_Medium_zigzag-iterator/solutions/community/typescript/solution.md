# Solution using queues approach

**Author:** codesandtags
**Votes:** 0
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/5034635/](https://leetcode.com/problems/zigzag-iterator/solutions/5034635/)

---

# Intuition

This problem could be solve by merging both values in the begining in only 1 queue, however the idea is to simulate the iterator.

# Approach

By following the `queue pointers` strategy, we can scale up the problem from 2 vectors until `n` vectors if we want to merge.

The idea is to `enqueue` the vectors with each index, and everytime we `dequeue` a vector, if its index is less thatn the last element, then we `enqueue` again and we continue with the next `vector`. 

# Complexity
- Time complexity: O(1)

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class ZigzagIterator {
    queue;

    constructor(v1: number[], v2: number[]) {
        this.queue = [];

        if (v1.length > 0) {
            this.queue.push([v1, 0]);
        }

        if (v2.length > 0) {
            this.queue.push([v2, 0]);
        }
    }

    next(): number {
		const [arr, index] = this.queue.shift();
        const value = arr[index];

        if (index < arr.length - 1) {
            this.queue.push([arr, index + 1]);
        }

        return value;
    }

    hasNext(): boolean {
		return this.queue.length > 0;
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * while (obj.hasNext()) ret.push(obj.next());
 */
```