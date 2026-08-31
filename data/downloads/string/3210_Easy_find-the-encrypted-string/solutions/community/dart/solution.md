# 🟢🔴🟢 Beats 100.00%👏 3 Lines Solutions 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/6040976/](https://leetcode.com/problems/find-the-encrypted-string/solutions/6040976/)

---

```
class Solution {
  String getEncryptedString(String s, int k) {

    StringBuffer encrypted = StringBuffer();
    for(int i = 0; i < s.length; i++) encrypted.write(s[(i + k) % s.length]);
    return encrypted.toString();
    
  }
}
```