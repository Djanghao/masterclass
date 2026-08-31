# Best Simple Solution Explained

**Author:** darian-catalin-cucer
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/3145368/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/3145368/)

---


```
class Solution:
    def mergeTriplets(self, triplets, T):
        forbidden = set()
        for i, [x, y, z] in enumerate(triplets):
            if x > T[0] or y > T[1] or z > T[2]:
                forbidden.add(i)
        
        a, b, c = 0, 0, 0
        for i, (x, y, z) in enumerate(triplets):
            if i not in forbidden:
                a, b, c = max(a, x), max(b, y), max(c, z)
                
        return [a, b, c] == T
```