# scala solution with tailrec

**Author:** Anamorphism
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1363206/](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1363206/)

---

```scala
object Solution {
    def findIntegers(n: Int): Int = {
        val aux = Array.ofDim[Int](32)
        for(i <- 0 until 32) {
            if(i == 0) {
                aux(i) = 1
            } else if(i == 1) {
                aux(i) = 2
            } else {
                aux(i) = aux(i - 1) + aux(i - 2)
            }
        }
        
        @scala.annotation.tailrec
        def loop(i: Int, isPrevBitOne: Boolean, acc: Int): Int = {
            if(i < 0) {
                acc
            } else {
                val leadingBit = n & (1 << i)
                if(leadingBit == 0) {
                    loop(i - 1, false, acc)
                } else if(isPrevBitOne) {
                    acc + aux(i) - 1
                } else {
                    loop(i - 1, true, acc + aux(i))
                }
            }
        }
        
        loop(30, false, 0) + 1
    }
}
```