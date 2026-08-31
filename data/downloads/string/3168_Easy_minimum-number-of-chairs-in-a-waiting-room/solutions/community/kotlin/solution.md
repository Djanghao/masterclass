# One Liner

**Author:** votrubac
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5243569/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5243569/)

---

**Kotlin**
```kotlin
fun minimumChairs(s: String): Int {
    return s.runningFold(0) { acc, ch -> acc + if (ch == 'E') 1 else -1 }.max()
}  
```

**Python**
```python
class Solution:
    def minimumChairs(self, s: str) -> int:
        return max(accumulate(1 if ch == "E" else -1 for ch in s))
```
