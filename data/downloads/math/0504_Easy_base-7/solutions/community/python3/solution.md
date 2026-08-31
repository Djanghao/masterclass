# Python 3   ||   7 lines,  modular arithmetic   ||   T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/base-7/solutions/3645829/](https://leetcode.com/problems/base-7/solutions/3645829/)

---

```
class Solution:
    def convertToBase7(self, num: int) -> str:

        if num == 0: return '0'

        ans, n = '', abs(num)

        while n:
            n, m = divmod(n,7)
            ans+=str(m)

        if num < 0: ans+= '-'

        return ans[::-1]
```
[https://leetcode.com/problems/base-7/submissions/587231651/](https://leetcode.com/problems/base-7/submissions/587231651/)

I could be wrong, but I think that time complexity is *O*(log*N*) and space complexity is *O*(log*N*), in which *N* ~`int(num)`.