# Official Solution

**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solution/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solution/)

---

[TOC]

## Solution

---

### Approach : Priority Queue

#### Intuition

We are given an integer array `nums` and a number `k`. The goal is to maximize a starting score of 0 by performing an operation exactly `k` times. In each operation, we choose an index `i`, add `nums[i]` to the score, and replace `nums[i]` with `nums[i] / 3`.

We can solve this using a max heap, which allows us to access the largest element in the array efficiently. We need to select the largest number, add it to the score, and then replace it with one-third of its value, doing this `k` times.

First, we build a max heap from the numbers in `nums`. For each operation, we extract the largest number, add it to the score, and replace it with its one-third value. We then push this new value back into the heap. Repeating this process `k` times ensures that the score is maximized.

#### Algorithm

1. Initialize an integer `ans` to store the total score:
2. Create a max-heap (priority_queue) given by `pq` and push necessary elements of the array `nums` into the heap.
3. Repeat the following steps `k` times:
    - Extract the largest element from the heap using `pq.top()`, and remove it from the heap using `pq.pop()`.
    - Add this largest element to `ans` to update the total score.
    - Push the one-third value of the largest element (rounded up) into the heap.
4. Return the value of `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/NvNNTsLs/shared" frameBorder="0" width="100%" height="242" name="NvNNTsLs"></iframe>

#### Complexity Analysis

Let $n$ be the size of the given `nums` array.

- Time complexity: $O(k \log n + n \log n)$

    Initially, in worst case inserting all $n$ elements into the max-heap takes $O(n \log n)$ time. 
    
    Each of the $k$ operations involves extracting the largest element from the heap and inserting a new value back into it, both of which take $O(\log n)$ time. Performing $k$ such operations results in a time complexity of $O(k \log n)$.

    Therefore, total time complexity is given by $O(k \log n + n \log n)$.

- Space complexity: $O(n)$

    The space complexity is dominated by the size of the max-heap, which contains at most $n$ elements. Therefore, the space complexity is $O(n)$.

---