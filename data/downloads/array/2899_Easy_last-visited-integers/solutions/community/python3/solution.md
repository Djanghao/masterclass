# Easy Python Solution 🐍 || O(N)

**Author:** Arpit_Patel_07
**Votes:** 12
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/4168108/](https://leetcode.com/problems/last-visited-integers/solutions/4168108/)

---

# Code
```
class Solution:
    def lastVisitedIntegers(self, words: List[str]) -> List[int]:
        k,li,ans=0,[],[]
        for i in words:
            if i=='prev':
                k+=1
                if k>len(li):
                    ans.append(-1)
                else:
                    ans.append(li[-k])
            else:
                k=0
                li.append(int(i))
        return ans
```
***Hope it helps...!!*** \uD83D\uDE07\u270C\uFE0F