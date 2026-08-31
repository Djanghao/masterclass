# 🟢🔴🟢 3 Lines Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/6072357/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/6072357/)

---

```
class Solution {
  bool isSubstringPresent(String s) {
    
    String reverseStr = s.split("").reversed.toList().join();
    for(int i = 1; i < s.length; i++) if(reverseStr.contains(s[i-1]+s[i])) return true;
    return false;

  }
}
```