# Python |  High Speed | Fast O(n^2)

**Author:** Aragorn_
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/745059/](https://leetcode.com/problems/number-of-boomerangs/solutions/745059/)

---

**Python |  High Speed | Fast O(n^2)**

```
class Solution:
    def numberOfBoomerangs(self, points):
        n = 0
        for a,b in points:
            counter = {}
            for x,y in points:
                # NOTE: x,y == a,b can only be registered once, so...
				#       radius=0 never has enough points to make a false triplet
                key = (x-a)**2 + (y-b)**2
                if key in counter:
                    n += 2*counter[key]
                    counter[key] += 1
                else:
                    counter[key] = 1
        return n
```