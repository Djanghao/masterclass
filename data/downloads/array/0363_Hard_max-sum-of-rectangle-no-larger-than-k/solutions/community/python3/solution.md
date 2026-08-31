# Solution In Python

**Author:** AY_
**Votes:** 9
**Link:** [https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2488882/](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2488882/)

---

The bisect_left() method is provided by the bisect module, which returns the left-most index to insert the given element, while maintaining the sorted order.
The insort function is the second step that does the real insertion process. The function returns the list after the element has been inserted in the rightmost index without altering the sorted order.

```
class Solution:
    def maxSumSubmatrix(self, matrix: List[List[int]], k: int) -> int:
        ans = float("-inf")
        m, n = len(matrix), len(matrix[0])
        for i in range(n):
            lstSum = [0] * m
            for j in range(i, n):
                currSum = 0
                curlstSum = [0]
                for t in range(m):
                    lstSum[t] += matrix[t][j]
                    currSum += lstSum[t]
                    pos = bisect_left(curlstSum, currSum - k)
                    if pos < len(curlstSum):
                        if curlstSum[pos] == currSum - k:
                            return k
                        else:
                            ans = max(ans, currSum - curlstSum[pos])
                    insort(curlstSum, currSum)
        return ans

```