# Python 3   ||   9 lines,  groupby, w/ example   ||   T/S: 95% / 15%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/2919301/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/2919301/)

---

```
class Solution:
    def maxRepOpt1(self, text: str) -> int:                     #  Example:  text = "babbab"

        c = Counter(text)                                       #               c = {'a':2, 'b':4}

        ch, ct = zip(*[(k, sum(1 for _ in g))                   #              ch = ('b','a','b','a','b')
                       for k, g in groupby(text)])              #              ct = ( 1 , 1 , 2 , 1 , 1 )

        n = len(ch)
        
        ans = max(ct[i]+(ct[i]<c[ch[i]]) for i in range(n))     #          ans = max (2 , 2,  3,  2,  2 ) = 3

        for i in range(1, n-1):                                 #       i     sm+(sm<c[ch[i-1]])    ans
                                                                #    \u2013\u2013\u2013\u2013\u2013\u2013\u2013  \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013    \u2013\u2013\u2013
            if ch[i-1] == ch[i+1] and ct[i] == 1:               #       0                            3
                sm = ct[i-1]+ct[i+1]                            #       1       3 + (3 < 4) = 4      4
                ans = max(ans, sm + (sm < c[ch[i-1]]))          #       2                            4
                                                                #       3       3 + (3 < 4) = 4      4
        return ans                                              #       4                            4 <\u2013\u2013 return
```
[https://leetcode.com/problems/swap-for-longest-repeated-character-substring/submissions/1274356397/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/submissions/1274356397/)

I could be wrong, but I think that time is *O*(*N*) and space is *O*(*N*), in which *N* ~ `len(text)`.