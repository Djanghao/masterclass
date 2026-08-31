# 🟢🔴🟢  Beats 100.00%👏 Simple Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/6136367/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/6136367/)

---

```
class Solution {
  bool canBeEqual(String s1, String s2) {
    
    List<String> str1 = s1.split("");

    if(s1[0] != s2[0]) {
        str1[0] = s1[2];
        str1[2] = s1[0];
    }    

    if(s1[1] != s2[1]) {
        str1[1] = s1[3];
        str1[3] = s1[1];
    }   

    return str1.join() == s2;
    
  }
}
```