# Sort and Count

**Author:** tr1nity
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/3522624/](https://leetcode.com/problems/sum-in-a-matrix/solutions/3522624/)

---



```py
class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        m, n = len(nums), len(nums[0])
        res = 0
        # sort each row
        for num in nums: num.sort()
        # for each column, 
        for j in range(n):
            # we look for the highest number
            mx = 0
            for i in range(m): mx = max(mx, nums[i][j])
            # then add that number to the score
            res += mx
        return res
```



```
class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        res = 0
        # we first sort the rows, then transpose the input
        # in this way, we can just use max to find the higher number
        for col in zip(*[sorted(row) for row in nums]):
            # [
            #     (1, 2, 3, 1), 
            #     (2, 4, 5, 2), 
            #     (7, 6, 6, 3)
            # ]
            res += max(col)
        return res
```

**p.s. Join us on the LeetCode The Hard Way Discord Study Group for timely discussion! Link in bio.**