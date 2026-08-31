# Python 3  ||  8 lines,  w/ explanation and example  ||  T/S: 95% / 80%

**Author:** Spaulding_
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2875356/](https://leetcode.com/problems/minimum-average-difference/solutions/2875356/)

---

```
class Solution:
    def minimumAverageDifference(self, nums: list[int]) -> int:

                                                        # Example: nums = [2, 5, 4, 3, 1, 9, 5, 3]
        n = len(nums)                                   # 
        pref = list(accumulate(nums))                   #           pref = [2, 7,11,14,15,24,29,32]
                                                        #              i:   0  1  2  3  4  5  6  7
                                                        # 
        ans = (pref[-1]//n, n-1)                        #           ans = (32//8,8-1) = (4,7)
  
        for i in range(n-1):                            #      i        1st ave       2nd ave    abs diff    ans
            diff = abs(pref[i]//(i+1) -                 #   \u2013\u2013\u2013\u2013\u2013\u2013\u2013     \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013      \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013   \u2013\u2013\u2013\u2013\u2013\u2013\u2013    \u2013\u2013\u2013\u2013\u2013\u2013
                      (pref[-1] - pref[i])//(n-i-1))    #                                                   (4, 7)

                                                        #      0        2//1 = 2      29//7 = 4      2      (2, 0)
            ans  = min(ans, (diff,i))                   #      1        7//2 = 3      25//6 = 4      1      (1, 1)
                                                        #      2       11//3 = 3      21//5 = 4      1      (1, 1)
        return ans[1]                                   #      3       14//4 = 3      18//4 = 4      1      (1, 1)
                                                        #      4       15//5 = 3      17//3 = 5      2      (1, 1)
                                                        #      5       24//6 = 4       8//2 = 4      0      (0, 5)
                                                        #      6       29//7 = 4       3//1 = 3      1      (0, 5)
                                                        #                                                       |
                                                        #                                             return ans[1]
```
[https://leetcode.com/submissions/detail/854132107/](https://leetcode.com/submissions/detail/854132107/)

I could be wrong, but I think that time is *O*(*N*) and space is *O*(*N*), in which *N* ~ `len(nums)`.