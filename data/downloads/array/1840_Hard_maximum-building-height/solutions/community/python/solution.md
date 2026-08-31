# Presumably fast solution, nothing to compare to

**Author:** mbeceanu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-building-height/solutions/2837537/](https://leetcode.com/problems/maximum-building-height/solutions/2837537/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is enough to look for maximum heights at each restricted buinding and at the maximum points between each pair of consecutive restricted buildings.

# Approach
<!-- Describe your approach to solving the problem. -->
I did it in three passes: first from left to right to establish maximum bounds coming from the left, then from right to left to establish maximum bounds coming from the right, and once more to establish maximum heights between restricted buildings.

# Complexity
- Time complexity: Linear.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: Linear.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution(object):
    def maxBuilding(self, n, restrictions):
        """
        :type n: int
        :type restrictions: List[List[int]]
        :rtype: int
        """
        h=[(1,0)]
        restrictions.sort(key=lambda x:x[0])
        for rest in restrictions:
            tmp=min(rest[1], h[-1][1]+rest[0]-h[-1][0])
            h.append((rest[0], tmp))
        if len(restrictions)==0 or restrictions[-1]!=n:
            h.append((n, h[-1][1]+n-h[-1][0]))
        l=len(h)
        for i in range(l-2, -1, -1):
            tmp=min(h[i][1], h[i+1][1]+h[i+1][0]-h[i][0])
            h[i]=(h[i][0], tmp)
        ans=0
        for i in range(l-1):
            tmp=(h[i+1][1]+h[i][1]+h[i+1][0]-h[i][0])>>1
            if tmp>ans:
                ans=tmp
        return ans


        
```