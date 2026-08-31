# ‎️‍🔥 DART‎️‍ 🔥100%🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/3376411/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/3376411/)

---

(\u261D \u055E\u0A0A \u055E)
UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.
for explanation :
https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1502238/greedy/
________
https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1500340/c-easy-to-understand-no-change-in-string/

# Code
```
class Solution {
  int minimumMoves(String s) {
      int res=0;
        for(int i=0; i<s.length; i += s[i]== 'X'? 3:1){
            res += s[i] == 'X' ? 1 :0;
        }
        return res;
  }
}
```