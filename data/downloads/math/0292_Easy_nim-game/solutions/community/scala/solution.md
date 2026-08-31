# Scala O(1) solution

**Author:** dima_latsiuha
**Votes:** 1
**Link:** [https://leetcode.com/problems/nim-game/solutions/1102061/](https://leetcode.com/problems/nim-game/solutions/1102061/)

---

1)
```
  def canWinNim(n: Int): Boolean = {
    n % 4 != 0
  }
```

2)
```
  // Recursion -> Time Limit Exceeded
  def canWinNim(n: Int): Boolean = {
    if (n <= 0) false
    else if (n <= 3) true
    else !(canWinNim(n - 1) && canWinNim(n - 2) && canWinNim(n - 3))
  }
```