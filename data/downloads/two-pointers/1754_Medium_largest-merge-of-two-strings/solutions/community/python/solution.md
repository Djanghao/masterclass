# Python 3   ||  4 lines, string solution, w/ example  || T/S: 50% / 54%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/2790828/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/2790828/)

---

```
class Solution:
    def largestMerge(self, word1: str, word2: str) -> str:  
                                                        # Ex: word1 = brsw        word2 = ehrap

        w1, w2, ans = list(word1), list(word2), ''      # <--    w1 = [b,r,s,w]      w2 = [e,h,r,a,p]

        while w1 and w2:                                #  w1           w2           ans
            ans+= w1.pop(0) if w1 > w2 else w2.pop(0)   #  \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013    \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013    \u2013\u2013\u2013\u2013\u2013
                                                        #  [b,r,s,w]    [h,r,a,p]    e
                                                        #  [b,r,s,w]    [r,a,p]      eh
                                                        #  [b,r,s,w]    [a,p]        ehr
                                                        #  [r,s,w]      [a,p]        ehrb
                                                        #  [s,w]        [a,p]        ehrbr
                                                        #  [w]          [a,p]        ehrbrs
                                                        #  []           [a,p]        ehrbrsw

        return  ans + ''.join(w1) + ''.join(w2)         # <-- ehrbrsw + ''.join([]) + ''.join([a,p]) = ehrbrswap
```
[https://leetcode.com/problems/largest-merge-of-two-strings/submissions/1297949469/](https://leetcode.com/problems/largest-merge-of-two-strings/submissions/1297949469/)

I could be wrong, but I think that time complexity is *O*(*M* + *N*) and space complexity is *O*(*M* + *N*), in which *M* ~ `len(word1)` and *N* ~ `len(word2`.