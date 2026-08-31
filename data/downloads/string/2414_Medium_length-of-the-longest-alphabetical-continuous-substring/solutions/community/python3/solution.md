# Python3    ||  9 lines, pairwise || T/S:  68% / 93%

**Author:** Spaulding_
**Votes:** 7
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2594370/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2594370/)

---

Here's the plan:
1. We create `pairs`, the set of 25 pairs of the consecutive character pairs

1. We iterate through the pairs in `s`, counting string pairs that are elements in `pairs`. Each time we encounter a pair not in in `pairs` we compare it with the current maximum-length encountered and reset `count`.
2. We return the maximum count.

```
class Solution:
    def longestContinuousSubstring(self, s: str) -> int:

        pairs = set(pairwise(ascii_lowercase))
        count = mx = 1

        for p in pairwise(s):
            
            if p in pairs:
                count+= 1

            else:
                mx = max(mx, count)
                count = 1
        
        return max(mx, count)
```

[https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/submissions/1288478220/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/submissions/1288478220/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(s)`.