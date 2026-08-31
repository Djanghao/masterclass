# 🐍 python, simple solution with explanation; O(Nlog(M))

**Author:** smvthirteen
**Votes:** 3
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/3955967/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/3955967/)

---

# Approach
Seeing the word `sorted` gives us the clue for Binary Search Tree.
At each row, we search find the column/index for the first value 1.  

# Complexity
if N is the number of rows and M is the number of columns
- Time complexity: O(N*log(M))

- Space complexity: O(1)

# Code
```
class Solution:
    def leftMostColumnWithOne(self, binaryMatrix: 'BinaryMatrix') -> int:

        def bs(row):
            beg = 0
            end = cols-1

            while beg<=end:
                mid = (beg+end)//2
                if binaryMatrix.get(row, mid)==1:
                    end = mid-1
                else:
                    beg = mid+1
            return beg

        ans = float('inf')
        rows, cols = binaryMatrix.dimensions()
        for row in range(rows):
            ans = min(ans, bs(row))
        if ans == cols:
            return -1
        return ans
```

We can optimize the aforementioned approach.
1) If we find the ans is 0, there is no need to search furthere.
2) if so far `ans` is x, which means so far the smallest column is x. Considering that, when we want to check for a new row, if the value of index x at that row is zero, then answer for this row is bigger than `ans`. So there is no need to search through it. 

```
class Solution:
    def leftMostColumnWithOne(self, binaryMatrix: 'BinaryMatrix') -> int:

        def bs(row):
            beg = 0
            end = ans-2

            while beg<=end:
                if beg>=ans:
                    return float('inf')
                mid = (beg+end)//2
                if binaryMatrix.get(row, mid)==1:
                    end = mid-1
                else:
                    beg = mid+1
            return beg

        rows, cols = binaryMatrix.dimensions()
        ans = cols
        for row in range(rows):
            if binaryMatrix.get(row, ans-1)==1:
                ans = min(ans, bs(row))
            if ans==0:
                return 0
        if ans == cols:
            return -1
        return ans

```