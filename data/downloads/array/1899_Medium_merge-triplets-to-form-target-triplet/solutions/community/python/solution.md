# Simple and clean Greedy Python solution

**Author:** techie_sis
**Votes:** 5
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/1280409/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/1280409/)

---

Idea here is to check only that pairs who have all variable less than target variables.
So that while chossig we don't break current condtion.

Rule - "Don't take the pair which cause maximum in one of the 3 places will be greater that what we need to get,"

1. Iterate over all triplets once again and update maximums. only for set who follow above rule.
2. Check that what we have in the end is equal to what we want.


```
class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        
        a, b, c = 0, 0, 0
        for i, (x, y, z) in enumerate(triplets):
                if not(  x > target[0] or y > target[1] or z > target[2]):
                     a, b, c = max(a, x), max(b, y), max(c, z)
                        
        return [a, b, c] == target
            
```
TC=O(n)