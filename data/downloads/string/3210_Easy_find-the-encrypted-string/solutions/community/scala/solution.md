# 1-line scala solution

**Author:** user3116J
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5446964/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5446964/)

---

# Code
```
object Solution {
  def getEncryptedString(s: String, k: Int): String = {
    (s + s).drop( k % s.size ).take(s.size)
  }
}
```