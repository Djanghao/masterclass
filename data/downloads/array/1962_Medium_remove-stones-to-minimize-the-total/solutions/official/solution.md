# Official Solution

**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solution/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solution/)

---

[TOC]

## Solution

---

### Approach: Greedy + Max Heap

**Intuition**

At any given step, which number should we choose? We want to minimize the total number of stones remaining, which means we want to maximize the number of stones we remove at each step, so we should choose greedily choose the largest number at every step.

Every time we complete an operation, the data changes and we need to find the maximum number again. The best data structure for this would be a heap, as it allows us to update the data and always retrieve the maximum value in $$O(\log{}n)$$ time, compared to $$O(n)$$ if we just used an array.

**Algorithm**

1. Initialize a max `heap` from `piles`.

2. Perform the following `k` times:
    - Pop the maximum element from the heap, call it `curr`.
    - Calculate how many stones `remove` should be removed from `curr` after performing the operation. It is the floor of `curr / 2`.
    - Push `curr - remove` onto the heap.

3. Return the sum of the elements in the heap.

**Implementation**

> Note: C++'s `priority_queue` doesn't allow iteration, so we'll track the answer as we perform the heap operations.

<iframe src="https://leetcode.com/playground/gyfjeoqH/shared" frameBorder="0" width="100%" height="412" name="gyfjeoqH"></iframe>

> Python's heapq only implements min heaps, which is why we need to make all the values negative to simulate a max heap.

**Complexity Analysis**

Given $$n$$ as `piles.length`,

* Time complexity: $$O(n + k \cdot \log{}n)$$

    An array can be converted to a heap in linear time ($$O(n)$$) using a method like Python's `heapq.heapify()`. After converting the input to a heap, we perform `k` heap operations. Each heap operation costs $$O(\log{}n)$$, which gives us a time complexity of $$O(n + k \cdot \log{}n)$$.

* Space complexity: $$O(n)$$

    The heap's length is equal to $$n$$, which is all the extra space we use.
    
<br/>

---