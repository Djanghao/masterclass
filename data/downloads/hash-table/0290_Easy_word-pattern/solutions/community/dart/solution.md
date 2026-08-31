# Dart BEST SOLUTION

**Author:** buildyourdream
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-pattern/solutions/3884025/](https://leetcode.com/problems/word-pattern/solutions/3884025/)

---

```
class Solution {
  bool wordPattern(String pattern, String s) {
      var list = s.split(' ');
      if(pattern.length != list.length) return false;

        var mapK = {};
        var mapV = {};

      for(int i=0;i<list.length;i++){
         var key = pattern[i];
         var value = list[i];

         if(mapK.containsKey(key) || mapV.containsKey(value)){
             if(mapK[key] != value) return false;
             if(mapV[value] != key) return false;
         }else{
             mapK[key] = value;
             mapV[value] = key;
         }
      }
      return true;
  }
}
```