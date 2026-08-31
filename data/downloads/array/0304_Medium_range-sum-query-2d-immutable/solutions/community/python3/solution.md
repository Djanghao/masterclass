# Python Easy with explanation ✅

**Author:** constantine786
**Votes:** 88
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2104244/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2104244/)

---

For this, we first need to calculate the **prefix sum array** for the matrix.

Something like this :

**Prefix Sum of matrix with each cell=1**

<img src="https://assets.leetcode.com/users/images/14109f49-e7ae-4e53-bc53-148e5f60877c_1654215908.2260733.png" width=200/>


Now, let's say we want to find the sum of following region:

**Region(Answer)**

<img src="https://assets.leetcode.com/users/images/0aea4bfa-0ffc-4f39-9343-c940e2ae1036_1654216134.4848273.png" width=200/>

So we first need the sum from each of the following regions:

1. **Region(A)**
<img src="https://assets.leetcode.com/users/images/06bd526d-17e1-4474-886f-cc9b3e6a5eb6_1654216261.9611187.png" width=200/>


2. **Region(B)**
<img src="https://assets.leetcode.com/users/images/dd31bd1a-c130-4e17-a5a5-d3e9148c3477_1654216305.3489735.png" width=200/>

3. **Region(C)**
<img src="https://assets.leetcode.com/users/images/6dc28313-648f-48fe-a4b7-b73f7d843b80_1654216353.8426402.png" width=200/>


4. **Region(D)**
<img src="https://assets.leetcode.com/users/images/9395743f-ab67-4e31-acbf-b153094d3fb4_1654216433.38144.png" width=200/>

Then we calculate the following for required answer:

> ***Region(Answer) = Region(A) - Region(B).- Region(C) + Region(D)***

Below is my implementation:

```
class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        self.dp=[[0] * (len(matrix[0])+1) for _ in range(len(matrix)+1)]
        
		# calculate prefix sum
        for r in range(len(self.dp)-1):
            for c in range(len(self.dp[0])-1):
                self.dp[r+1][c+1]=matrix[r][c] + self.dp[r][c+1] + self.dp[r+1][c] - self.dp[r][c]
        
    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return self.dp[row2+1][col2+1] - self.dp[row1][col2+1] - self.dp[row2+1][col1] + self.dp[row1][col1]
                
```

**Time - O(m * n)** - for the constructor
**Space - O(m * n)** - for storing the prefix sum array


--- 


***Please upvote if you find it useful***