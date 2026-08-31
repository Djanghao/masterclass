# [scala] - recursive

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/2690126/](https://leetcode.com/problems/minimize-xor/solutions/2690126/)

---

```scala
def minimizeXor(num1: Int, num2: Int): Int =
  remove(num2.toBinaryString.count(_ == '1'), 0, num1, 1 << 30)

def remove(cnt: Int, result: Int, num: Int, mask: Int): Int =
  if (cnt <= 0) result
  else if (num == 0) add(cnt, result, 1)
  else if ((num & mask) > 0) remove(cnt - 1, result | mask, num ^ mask, mask >> 1)
  else remove(cnt, result, num, mask >> 1)

def add(cnt: Int, result: Int, mask: Int): Int =
  if (cnt <= 0) result
  else if ((result & mask) > 0) add(cnt, result, mask << 1)
  else add(cnt - 1, result ^ mask, mask << 1)
```