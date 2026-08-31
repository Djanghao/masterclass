# Basic Practice - binary search in general paradigm | Python

**Author:** wxy0925
**Votes:** 7
**Link:** [https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/2507284/](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/2507284/)

---

1- Code
```
class Solution:
    def matrixMedian(self, grid: List[List[int]]) -> int:
        
        m, n = len(grid), len(grid[0])
        
        # 1. write a boolean fn to produce order/monotonicity
        def fulfill(s):
            res = 0
            for row in grid:
                res += bisect.bisect_right(row, s)
            return res >= m * n // 2 + 1
        
        # 2. locate search space and do search range shrinkage, do proper return
        low, high = 0, 10 ** 6 + 1
        while low < high:
            mid = low + (high - low) // 2
            if fulfill(mid):
                high = mid
            else:
                low = mid + 1
        return high
```

2- Video Explanation: [Click Here](https://youtu.be/cEKnzRyaf_M;)

3- Analysis and Time Complexity
"""
Method: standard binary search


Idea: we want to find a value minimal s such that there are m * n // 2 + 1
matrix/grid elements that are less than or equal to s.


Procedure/Paradigm:

1- First we write a function fulfull(s) which is boolean and returns
if there are at least m * n // 2 + 1 elements in grid that are <= s

2- We use binary search to find minimal such s.

For this paradigm of binary search, please check out the binary search playlist
to see more explanations, deeper details and applications.


The interesting point here is that: for step 1- above, we can also use binary search. The reason is simple: each row of the matrix is sorted. As such, we can
use binary search to check how many items in each row are <= s, then add them together to get the number of items in the whole matrix that are <= s.

given a row, say [1,1,2], we can use bisect_right to get how many items in it 
that are <= s,

for example, bisect_right([1, 1, 2], 1) is 2; bisect_right([1, 1, 2], 2) is 3;
bisect_right([1, 1, 2], 3) is 3.



Time Complexity:

   m * log(n) * log(10 ** 6 + 1 - 0 ) <~ m * log(n) * log(10 ** 6)
   <~ m * log(n) * 6 * log(10) <~ m * log(n) * 6 * 4 <~ m * log(n) 

"""