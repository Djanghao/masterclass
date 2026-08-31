# Python 3   ||   3 lines,  pairwise   ||   T/S: 93% / 79%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/4637047/](https://leetcode.com/problems/number-of-changing-keys/solutions/4637047/)

---

Here's the plan:

- We iterate through `s` by pairs. 

- For each pair (*a*, *b*), we determine whether the characters are different, not including case.
- We return the number of such pairs as the answer.
```
class Solution:
    def countKeyChanges(self, s: str, ans = 0) -> int:

        for a,b in pairwise(s.lower()):
            ans+= a != b

        return ans
```
____
*Aug 25,2024 addendum*:
See discussion below. Thanks to [@Hafid](/u/hafid-hub) for his suggestion below that should make everyone happy.
```
class Solution:
    def countKeyChanges(self, s: str, ans = 0) -> int:

        for a,b in pairwise(s):
            ans+= a.lower() != b.lower()

        return ans
```
_____

[https://leetcode.com/problems/number-of-changing-keys/submissions/1366981028/](https://leetcode.com/problems/number-of-changing-keys/submissions/1366981028/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(s)`.
'''