# 275: Time 98.1%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 12
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/3235216/](https://leetcode.com/problems/h-index-ii/solutions/3235216/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The problem is a follow-up to the H-Index problem with the added constraint that the input array is sorted in ascending order. As a result, we can take advantage of this property to optimize the solution.

The basic idea is to use binary search to find the h-index. Since the array is sorted in ascending order, we can use the index to represent the citation count. For example, citations[3] means the number of papers that have at least 4 citations.

Let's take the example [0, 1, 3, 5, 6] and the length of the array n = 5. We start by initializing the left and right pointers to 0 and n - 1, respectively. The mid index is (left + right) // 2 = 2. The corresponding citation count is citations[2] = 3. Since there are 3 papers with at least 3 citations, and the remaining two papers have no more than 3 citations, the h-index is 3.

If citations[2] is less than n - 2, then we need to move the left pointer to mid + 1, and if citations[2] is greater than or equal to n - 2, then we need to move the right pointer to mid - 1. We repeat the process until left > right.

The time complexity of the algorithm is O(log n), and the space complexity is O(1).

# Complexity
- Time complexity:
98.1%

- Space complexity:
75.12%

# Code
```
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        n = len(citations)
        left, right = 0, n - 1
        while left <= right:
            mid = (left + right) // 2
            if citations[mid] == n - mid:
                return n - mid
            elif citations[mid] < n - mid:
                left = mid + 1
            else:
                right = mid - 1
        return n - left

```

Note that we return n - left instead of n - mid because left may not be at the exact position of the h-index. However, we know that left is the smallest index that satisfies citations[left] >= n - left, so n - left is the correct answer.