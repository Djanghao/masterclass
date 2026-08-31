# JavaScript solution

**Author:** linfongi
**Votes:** 61
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/55011/](https://leetcode.com/problems/reverse-bits/solutions/55011/)

---

    var reverseBits = function(n) {
      var result = 0;
      var count = 32;
    
      while (count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
      }
      return result;
    };