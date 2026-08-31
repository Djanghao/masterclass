# Python 3   ||   1 line,  sets  ||   T/S:  98%  /  94%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3993410/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3993410/)

---

```
class Solution:
    def canBeEqual(self, s1: str, s2: str) -> bool:

        return ({s1[0], s1[2]} == {s2[0], s2[2]} and
                {s1[1], s1[3]} == {s2[1], s2[3]})
```
[https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/submissions/](http://)l

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).