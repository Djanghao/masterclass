# [Python3] Monostack

**Author:** awice
**Votes:** 9
**Link:** [https://leetcode.com/problems/beautiful-towers-ii/solutions/4083060/](https://leetcode.com/problems/beautiful-towers-ii/solutions/4083060/)

---

Let's try to compute `left[i]` as the largest sum of heights for a tower that has peak at `i` and only goes left.

This tower is composed of sections, each section has height `A[i]` and width `w`, and we can store these sections (with necessarily increasing height) in `stack` and maintain them as we increase `i`.  

In particular, we destroy any section that is higher than `A[i]` by popping from the stack, then we construct a new section with `width`.  `total` keeps track of the total area of the tower.

# Code
```
class Solution:
    def maximumSumOfHeights(self, A: List[int]) -> int:
        n = len(A)
        
        def make(A):
            ans = [0]
            stack = []
            total = 0
            for i in range(n):
                width = 1
                while stack and A[i] <= A[stack[-1][0]]:
                    i0, w0 = stack.pop()
                    total -= A[i0] * w0
                    width += w0
                
                stack.append([i, width])
                total += A[i] * width
                ans.append(total)

            return ans
        
        left = make(A)
        right = make(A[::-1])[::-1]
        return max(left[i] + right[i] for i in range(n + 1))
```