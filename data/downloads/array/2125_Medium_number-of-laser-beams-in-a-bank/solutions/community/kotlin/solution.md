# Most elegant Kotlin solution

**Author:** gaojude
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4495299/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4495299/)

---


# Code
```
class Solution {
    fun numberOfBeams(bank: Array<String>): Int {
       return bank.map { row -> row.count { it == '1' } }
                  .filterNot { it == 0 }
                  .zipWithNext { curr, next -> curr * next }
                  .sum()
    }
}
```