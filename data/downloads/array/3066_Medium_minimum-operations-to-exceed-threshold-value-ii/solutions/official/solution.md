# Official Solution

**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solution/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solution/)

---

[TOC]

## Solution

---

### Overview 

We are given an array `nums` and an integer `k`. We repeatedly have to apply the following operation until all elements of `nums` are greater than or equal to `k`:

1. Remove the two smallest numbers `x` and `y` from `nums` from the array.
2. Add a new element `min(x, y) * 2 + max(x, y)` back into `nums`. The placement of this element doesn't matter.

We have to find out how many of the above operations are needed to make all elements in `nums` greater than or equal to `k`.

> Note that the described operation can only be applied if `nums` contains at least two elements.

### Approach: Priority Queue

#### Intuition

For a straightforward approach, we can simulate the operations by maintaining a list that holds the current elements of `nums`. Then, we can scan through all elements of `nums` in this list and take out the two smallest integers. If these integers are not greater than or equal to `k`, then we know we have to keep applying the operation, so we can append `min(x, y) * 2 + max(x, y)` to our list. We can maintain a counter and repeat this operation until the two smallest integers are greater than or equal to `k` (if the two smallest integers are greater than or equal to `k`, then so are the rest of the elements, and we can stop applying the operations).

However, this simulation is time-consuming. Scanning through `nums` and finding the two smallest integers before each operation takes $O(N)$ time. To find the two smallest integers more efficiently, we can use a priority queue (min-heap) instead of a list.

In a min heap, the smallest element is at the top of the tree and can be removed in $O(\log N)$ time. Thus, for each operation, we can remove from the top of the heap twice to get the two smallest integers `x` and `y`, and then add back into our heap `min(x, y) * 2 + max(x, y)`. Note that adding elements into our heap also takes $(\log N)$ time. Thus, using a heap will improve our operation time from $O(N)$ to $O(\log N)$.

Furthermore, checking for our stopping condition is also quicker. With a min heap, we can access the smallest element in $O(1)$ time. Until this smallest element is greater than or equal to `k`, we know we have to keep applying the operation. 

> Note: For large values of `x` and `y`, assigning `min(x, y) * 2 + max(x, y)` to an integer will lead to an integer overflow for typed languages. In our implementation, we use larger data types (i.e. `long`) to prevent this case.

#### Algorithm

- Create a min heap `minHeap` and initialize it with the elements in `nums`. Note that initializing heaps with `nums` directly will take advantage of the $O(N)$ time of heapify. Manually pushing each element of `nums` into `minHeap` will take a total of $O(N \log N)$.
- Create a counter variable `numOperations` to keep track of the number of operations applied so far.
- While the top element (minimum element) of our `minHeap` is less than `k`:
    - Remove the top element of the `minHeap` twice, and save them in `x` and `y`.
    - Add `min(x, y) * 2 + max(x, y)` to `minHeap`
    - Increment `numOperations`.
- Return `numOperations`.

#### Implementation

<iframe src="https://leetcode.com/playground/bhbja6kP/shared" frameBorder="0" width="100%" height="412" name="bhbja6kP"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time Complexity: $O(N \log N)$

    In the worst case, we have to apply $N$ operations because each operation reduces the heap size by 1 (removing two elements and adding one). Each heap operation takes $O(\log N)$ time, resulting in an overall time complexity of $O(N \log N)$.

* Space Complexity: $O(N)$

    At the start, our heap contains all elements from `nums`, so the space complexity is $O(N)$.

---