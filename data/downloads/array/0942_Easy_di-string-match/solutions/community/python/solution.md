# python3 easy and fast solution in O(N) time complexity

**Author:** Underdog2000
**Votes:** 8
**Link:** [https://leetcode.com/problems/di-string-match/solutions/1077194/](https://leetcode.com/problems/di-string-match/solutions/1077194/)

---

```class Solution:
    def diStringMatch(self, S: str) -> List[int]:
        n=len(S)
        result=[]
        initial=0
        final=n
        for i in range(n):
            if S[i]=='I':
                result.append(initial)
                initial=initial+1
            else:
                result.append(final)
                final=final-1
        result.append(final)
        return result
