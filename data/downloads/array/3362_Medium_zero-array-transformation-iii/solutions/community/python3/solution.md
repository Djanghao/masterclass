# Concise Heap Solution in Python3 with Explanation

**Author:** metaphysicalist
**Votes:** 11
**Link:** [https://leetcode.com/problems/zero-array-transformation-iii/solutions/6075689/](https://leetcode.com/problems/zero-array-transformation-iii/solutions/6075689/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to construct the answer by using as few `(l, r)` elements as possible.

Maintain three priority queues, Q, A, and W as follows:

- In Q, all the input `(l, r)` are sorted by `l`.
For position `i`, we move all the available elements from Q to A.
- A is another queue of `(l, r)` sorted by `r` in the descending order. 
A contains the available elements ready to select. If we want to pick up an element, it is better to the most capalable one, which is the one with the largest `r` in A. For this reason, A is sorted by `r` in the descending order. 
- The last queue W contains the currently working elements. When we move to position `i`, the first step is to retire the elements that does not work for `i`. In other words, the elements with $r < i$ should be discarded. For this reason, W is sorted by `r` in the ascending order. Then, we check the working elements is enough to cover `nums[i]`. If `nums[i] > len(W)`, we need pick up more elements from A to W. The answer will be -1 if no valid elements (i.e., $l \\le i \\le r$) can be chosen from A.  


# Approach
<!-- Describe your approach to solving the problem. -->

Q should support efficient `pop()`. Thus I implement Q as a deque that initialized by `nums` sorted by `l`. A and W require both `pop()` and `push()` operations, I employ heap for both. 
      
# Complexity
- Time complexity: The overall complexity is $O(N + M \\log M)$, where $N$ is the length of `nums` and $M$ is the length of `queries`.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def maxRemoval(self, nums: List[int], queries: List[List[int]]) -> int:
        q = deque(sorted(queries))
        available = []
        working = []
        for i in range(len(nums)):
            while q and q[0][0] <= i:
                heappush(available, -q.popleft()[1])
            while working and working[0] < i:
                heappop(working)
            while nums[i] > len(working):
                if available and -available[0] >= i:
                    heappush(working, -heappop(available))
                else:
                    return -1
        return len(available)
```

Thank zsq007 for his/her enlightenment suggestion to improve my code.