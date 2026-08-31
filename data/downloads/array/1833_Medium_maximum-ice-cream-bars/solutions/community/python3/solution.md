# Simplest_python.py

**Author:** jyot_150
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3006016/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3006016/)

---

# Code
```
class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        cn=0
        for i in sorted(costs):
            if i<=coins:
                cn+=1
                coins-=i
        return cn
```
![ alt text for screen readers](https://i.imgflip.com/2ly29v.jpg "Text to show on mouseover")