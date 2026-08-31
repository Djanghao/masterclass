# Beats 100% of solutions (using foldleft)

**Author:** johnyk
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/5117213/](https://leetcode.com/problems/sum-multiples/solutions/5117213/)

---

# Code
```
object Solution {
    def sumOfMultiples(n: Int): Int = {
        (1 to n).foldLeft(0) {
            case (acc, num) if num%3==0 || num%5==0 || num%7==0 => acc + num
            case (acc, _) => acc
        }
    }
}
```