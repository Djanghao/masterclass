# Python 3 || 10 lines,  Counter, iter || T/S: 97% / 99%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4920054/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4920054/)

---

```
class Solution:
    def maximumLengthSubstring(self, s: str) -> int:

        lftLst = iter(s)
        ans, left = 0, next(lftLst)
        ctr = defaultdict(int)

        for rght in s: 

            ctr[rght]+= 1

            while ctr[rght] == 3: 
                ctr[left]-= 1
                left = next(lftLst)

            ans = max(ans, sum(ctr.values()))

        return ans
```
[https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/submissions/1212749113/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/submissions/1212749113/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(s)`. 

(5/1/24 edit: Note the code iterates over each character in `s` once, which gives the *O*(*N*) TC. Also, `len(ctr)` is always <= 3, which gives the *O*(1) SC.)