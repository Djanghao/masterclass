# EASIEST APPROACH

**Author:** klebitz73
**Votes:** 2
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3849660/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3849660/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
   
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution(object):
    def differenceOfDistinctValues(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: List[List[int]]
        """
        ar = []
        ro = len(grid)
        co = len(grid[0])
        for i in range(len(grid)):
            ls = []
            for j in range(len(grid[i])):
                le = set()
                re = set()
                x = i - 1
                y = j - 1
                while x >= 0 and y >= 0:
                    le.add(grid[x][y])
                    x -= 1
                    y -= 1
                x = i + 1
                y = j + 1
                while x < ro and y < co:
                    re.add(grid[x][y])
                    x += 1
                    y += 1
                ls.append(abs(len(le) - len(re)))
            ar.append(ls)  

        return ar

```