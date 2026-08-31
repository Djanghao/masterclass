# Python - Faster than 100% - Same as 1944. Number of Visible People in a Queue

**Author:** baraheyl
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/2082482/](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/2082482/)

---


``` 
class Solution:
    def seePeople(self, heights: List[List[int]]) -> List[List[int]]:
        r,c = len(heights), len(heights[0])
        res = [[0 for i in range(c)] for j in range(r)]
        
        for i in range(r):
            stack = []
            for j in range(c - 1, -1, -1):
                equal = False
                while stack and stack[-1] <= heights[i][j]:
                    if stack[-1] == heights[i][j]:
                        equal = True #edge case: [[4,2,1,1,3]]
                    stack.pop()
                    res[i][j] += 1
                if stack and not equal:
                    res[i][j] += 1
                stack.append(heights[i][j])
        for j in range(c):
            stack = []
            for i in range(r - 1, -1, -1):
                equal = False
                while stack and stack[-1] <= heights[i][j]:
                    if stack[-1] == heights[i][j]:
                        equal = True
                    stack.pop()
                    res[i][j] += 1
                if stack and not equal:
                    res[i][j] += 1
                stack.append(heights[i][j])
        return res
