# Python  3 ||   2 lines, string methods  || T/S:  99%  /  99%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/2786685/](https://leetcode.com/problems/maximum-69-number/solutions/2786685/)

---

```
class Solution:
    def maximum69Number (self, num: int) -> int:
	
        return int(str(num).replace("6", "9",1))
```
[https://leetcode.com/problems/maximum-69-number/submissions/586879923/](https://leetcode.com/problems/maximum-69-number/submissions/586879923/)

I could be wrong, but I think that time complexity is *O*(log *N*) and space complexity is *O*(log *N*), in which *N* ~ `num`.