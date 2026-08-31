# Simple Pattern Match

**Author:** Kalz337
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/5181536/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/5181536/)

---


# Code
```
object Solution {
    def evenOddBit(n: Int): Array[Int] = 
      (0 until 32).foldLeft(Array(0,0)){case (acc,i) => 
      (i&1, n & (1<<i)) match 
        case (_,0) => acc
        case (0,_) => Array(acc(0)+1,acc(1))
        case (1,_) => Array(acc(0),acc(1)+1)
        case _     => acc
      }
}
```