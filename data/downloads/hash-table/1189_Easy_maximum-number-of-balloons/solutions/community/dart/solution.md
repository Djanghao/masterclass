# Simple Dart Map Solution.

**Author:** rajmandloi1232
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/3339196/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/3339196/)

---


# Code
```
class Solution {
  int maxNumberOfBalloons(String text) {
      Map map = {
          'b':0,
          'a':0,
          'l':0,
          'o':0,
          'n':0,
      };
      for(int i=0;i<text.length;i++){
          if(map[text[i]] != null) map[text[i]]++;
      }

      int count = 0;
      while(map['b'] > 0 && map['a'] > 0&& map['l'] > 1&& map['o'] > 1&& map['n'] > 0){
           count++;
        map['a']--;
        map['b']--;
        map['l']-= 2;
        map['n']--;
        map['o']-= 2;
      }

      return count;
  }
}
```