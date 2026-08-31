# Scala ( collect, flatmap )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/2726703/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/2726703/)

---

```
object Solution {
    def sortEvenOdd(nums: Array[Int]): Array[Int] = {
        val evens = nums.zipWithIndex
            .collect {case (a, i) if (i % 2 == 0) => a}
            .sorted
        
        val odds = nums.zipWithIndex
            .collect {case (a, i) if (i % 2 == 1) => a}
            .sorted {Ordering.Int.reverse}
        
        val comb = evens zip odds flatMap { o => Array(o._1, o._2) }
        
        evens.length == odds.length match {
            case true => comb
            case _ => evens.length > odds.length match {
                case true => comb :++ (evens takeRight 1)
                case _ => comb :++ (odds takeRight 1)
            }
        }
    }
}
```