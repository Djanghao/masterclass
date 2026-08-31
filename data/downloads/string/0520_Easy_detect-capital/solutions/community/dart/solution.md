# Dart concise solution🔥🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 3
**Link:** [https://leetcode.com/problems/detect-capital/solutions/2982429/](https://leetcode.com/problems/detect-capital/solutions/2982429/)

---


If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Code
```
class Solution {
  bool detectCapitalUse(String word) {
      int cnt = 0;
        for(int c in ascii.encode(word)) if(90 - c >= 0) cnt++;
        return ((cnt==0 || cnt==word.length ) || (cnt==1 && 90 - word.codeUnitAt(0)>=0));
  }
}
```


Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)