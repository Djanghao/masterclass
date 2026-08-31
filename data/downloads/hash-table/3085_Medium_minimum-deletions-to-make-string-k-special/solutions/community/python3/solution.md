# Python 3 || 7 lines, Counter || T/S: 98% / 29%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4889943/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4889943/)

---

Here's the plan:


1. We use `Counter` to determine the counts of the characters as the list `vals`.

1. We construct a function `minimumDeletions` that, given a range [*num... num+k*], determines the minimum count of deletions to ensure that  character counts remaining after these deletions are in that interval.

1. We evaluate the function for each element in `vals` and return the the minimum result. 


```
class Solution:
    def minimumDeletions(self, word: str, k: int) -> int:

        def deletions(num: int, res = 0)-> int:

            for v in vals:
                if v < num: res+= v
                if v > num+k: res+= v - num- k

            return res     
        

        vals = Counter(word).values()
        
        return min(map (deletions,vals))
```
[https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/submissions/1206582720/](https://leetcode.com/problems/find-trending-hashtags/submissions/1206775504/)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(word)`. (Recall `len(vals.keys())` <= 26)