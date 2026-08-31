# straightforward python solution

**Author:** marsapril
**Votes:** 5
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/3115698/](https://leetcode.com/problems/best-meeting-point/solutions/3115698/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
key idea is the best x location and the best y location are independent thus we can find x first and then find y, and then sum them together.

in case different homes sharing the same x or y location, we will firstly loop to calcualte all one dimension homes.
```
e.g. given:
[[1,0,0,0,1],
[0,0,0,0,0],
[0,0,1,0,0]]

we could have:
homes_x = [2,0,1]
homes_y = [1,0,1,0,1]
```



# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(max(m, n)^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(mn)

# Code
```
class Solution:
    def minTotalDistance(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        homes_x = [0 for i in range(m)]
        homes_y = [0 for i in range(n)]

        # find all homes
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1: 
                    homes_x[i] += 1
                    homes_y[j] += 1

        def findMinDistance(leng, homes):
            res = float('inf')
            for x in range(leng):
                distance = 0
                for i in range(len(homes)):
                    distance += abs(x-i) * homes[i]
                res = min(res, distance)
            return res

        res_x = findMinDistance(m, homes_x)
        res_y = findMinDistance(n, homes_y)

        return int(res_x + res_y)

```