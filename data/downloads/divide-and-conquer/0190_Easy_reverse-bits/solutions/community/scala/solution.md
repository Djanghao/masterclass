# Scala

**Author:** miketav2016
**Votes:** 4
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/1017982/](https://leetcode.com/problems/reverse-bits/solutions/1017982/)

---

```
def reverseBits(x: Int): Int = {
import scala.annotation.tailrec
    @tailrec
    def reverse(in: Int, n: Int = 32, out: Int = 0): Int =
      if (n == 0) out
      else reverse(in >>> 1, n - 1, (out << 1) | (in & 1)) //magic

    reverse(x)
  }
```