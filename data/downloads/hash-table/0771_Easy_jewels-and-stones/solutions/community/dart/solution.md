# One Line Solution (Dart)

**Author:** Chr1stify
**Votes:** 3
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/2817454/](https://leetcode.com/problems/jewels-and-stones/solutions/2817454/)

---

one line btw

# Code
```
class Solution {
  int numJewelsInStones(String jewels, String stones) {
      return stones.split('').where(jewels.contains).length;
  }
}
```