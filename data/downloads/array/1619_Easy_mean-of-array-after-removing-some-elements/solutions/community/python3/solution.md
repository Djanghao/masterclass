# Awesome Logic with shocking Code

**Author:** GANJINAVEEN
**Votes:** 15
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/3257533/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/3257533/)

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
class Solution:
    def trimMean(self, arr: List[int]) -> float:
        n=int(0.05*len(arr))
        for i in range(n):
            arr.remove(min(arr))
            arr.remove(max(arr))
        return sum(arr)/len(arr)
#please upvote me it would encourage me alot
```