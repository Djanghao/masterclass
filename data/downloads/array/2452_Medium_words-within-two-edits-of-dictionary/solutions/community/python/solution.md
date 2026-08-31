# Python 3  ||   8 lines   ||    T/S: 42% / 76%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2757855/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2757855/)

---

```
class Solution:
    def twoEditWords(self, queries: List[str], dictionary: List[str]) -> List[str]:

        N, ans = range(len(queries[0])), []

        f = lambda x,y: sum(x[i] != y[i] for i in N) < 3  # boolean function that returns whether
                                                          # x and y are within two edits
        for q in queries:                                 
            for d in dictionary:
                if f(q,d):
                    ans.append(q)
                    break
        return  ans
```
[https://leetcode.com/submissions/detail/833022066/](https://leetcode.com/submissions/detail/833022066/)
