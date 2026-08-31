# This is the Template if they ask To print Max/Min string of certain length

**Author:** sank555
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/5390168/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/5390168/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g.  -->
$$O(9*N)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def largestNumber(self, cost: List[int], target: int) -> str:
        N = len(cost)
        s = ""
        @cache
        def helper(i,c):
            if c==0:
                return 0
            if i==N or c<0:
                return -float('inf')
            return max(helper(i+1,c),
            1 + helper(i,c-cost[i]))
        e =helper(0,target)
        if e== -float('inf'):
            return "0"
        for i in range(e):
            for j in reversed(range(1,10)):
                if cost[j-1]<=target and helper(0,target-cost[j-1])==e-i-1:
                    target-= cost[j-1]
                    s+=str(j)
        return s
        
```