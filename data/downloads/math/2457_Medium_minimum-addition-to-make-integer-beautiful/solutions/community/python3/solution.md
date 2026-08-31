# Python 3  ||   6 lines, w/ example   ||   T/S: 98% / 99%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/3004941/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/3004941/)

---

```
class Solution:
    def makeIntegerBeautiful(self, n: int, target: int) -> int:

        sm = lambda n: sum(map(int,list(str(n))))

        zeros, diff = 10, 0                     #  Ex: n = 5617     ; target = 7

        while sm(n + diff) > target:            #   n    zeros   diff  n+diff  sm(n+diff)
                                                # -----  \u2013\u2013\u2013\u2013\u2013  \u2013\u2013\u2013\u2013\u2013  \u2013\u2013\u2013\u2013\u2013\u2013  \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013  
            diff = zeros - n%zeros              # 5617     10      3    5620     13  
                                                # 5617    100     83    5700     12
            zeros*= 10                          # 5617   1000    383    6000      6  <-- less than target
                                                #                 |
        return diff                             #               answer
```
[https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/submissions/848785961/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/submissions/848785961/)

I could be wrong, but I think that time complexity is *O*(log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.

