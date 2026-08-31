# Python 3 & Scala | Heap, Prefix Sum, Greedy | Explanation

**Author:** idontknoooo
**Votes:** 4
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3363520/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3363520/)

---

# Intuition
- Greedy: 
    - Only start moving when prefix sum is less than 0
    - When prefix sum is less than 0, remove the smallest number seen so far (heap)

# Approach
- See commentsh in Python3 code snippet

# Complexity
- Time complexity: $$O(NlogN), N = len(nums)$$, use of heap


- Space complexity: $$O(N), N = len(nums)$$, store data in heap


# Code
<iframe src="https://leetcode.com/playground/jjTPHkpy/shared" frameBorder="0" width="700" height="500"></iframe>