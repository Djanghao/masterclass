# 🔥Python3🔥 EASY Solution

**Author:** abdullayev_akbar
**Votes:** 22
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3083841/](https://leetcode.com/problems/alternating-digit-sum/solutions/3083841/)

---


- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

If You like the Solution, Don't Forget To UpVote Me, Please UpVote! \uD83D\uDD3C\uD83D\uDE4F
# Python3
```
class Solution:
    def alternateDigitSum(self, n: int) -> int:
        s=str(n)
        ans=0
        for i in range(0,len(s),2):
            ans+=int(s[i])
        for i in range(1,len(s),2):
            ans-=int(s[i])
        return ans
```
