# [Python3] greedy

**Author:** ye15
**Votes:** 13
**Link:** [https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844338/](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844338/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/b9fe03c491aa04ce243646bccf4b5ccab15f2d53) for solutions of biweekly 140. 

```
class Solution:
    def validSequence(self, word1: str, word2: str) -> List[int]:
        n = len(word2)
        last = [-1]*n
        j = n-1
        for i, ch in reversed(list(enumerate(word1))): 
            if j >= 0 and ch == word2[j]: 
                last[j] = i 
                j -= 1
        j = cnt = 0 
        ans = []
        for i, ch in enumerate(word1): 
            if j < n: 
                if ch == word2[j] or cnt == 0 and (j == n-1 or i+1 <= last[j+1]): 
                    if ch != word2[j]: cnt = 1
                    ans.append(i)
                    j += 1
        return ans if j == n else []
```