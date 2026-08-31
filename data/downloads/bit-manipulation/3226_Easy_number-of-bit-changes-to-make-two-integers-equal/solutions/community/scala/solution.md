# [scala] simple

**Author:** user3116J
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5510459/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5510459/)

---

# Code
```
object Solution {
  def minChanges(n: Int, k: Int): Int = {
    def binary(x: Int) = ("0"*30 + x.toBinaryString).takeRight(30)
    binary(n).zip(binary(k)).foldLeft(0) {
      case (-1, _) => -1
      case (s, ('0', '1')) => -1
      case (s, ('1', '0')) => s + 1
      case (s, _) => s
    }
  }
}
```