# [Python3] stack

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/2861437/](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/2861437/)

---


```
class Solution:
    def seePeople(self, heights: List[List[int]]) -> List[List[int]]:
        m, n = len(heights), len(heights[0])
        ans = [[0] * n for _ in range(m)]
        for i in range(m): 
            stack = []
            for j in range(n): 
                prev = -inf
                while stack and heights[i][stack[-1]] < heights[i][j]: 
                    if prev < heights[i][stack[-1]]: ans[i][stack[-1]] += 1
                    prev = heights[i][stack.pop()]
                if stack and prev < heights[i][stack[-1]]: ans[i][stack[-1]] += 1
                stack.append(j)
        for j in range(n): 
            stack = []
            for i in range(m): 
                prev = -inf 
                while stack and heights[stack[-1]][j] < heights[i][j]: 
                    if prev < heights[stack[-1]][j]: ans[stack[-1]][j] += 1
                    prev = heights[stack.pop()][j]
                if stack and prev < heights[stack[-1]][j]: ans[stack[-1]][j] += 1
                stack.append(i)
        return ans 
```