# Scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/4575109/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/4575109/)

---

# Code
```
object Solution {
    import scala.annotation.tailrec
    def cycleLengthQueries(n: Int, queries: Array[Array[Int]]): Array[Int] = {
        @tailrec def getPathUp(n: Int, path: List[Int] = List.empty): List[Int] = 
            if(n <= 1) n :: path
            else getPathUp(n / 2, n :: path)

        def forQuery(p: Int, q: Int): Int = {
            val toUpP = getPathUp(p)
            val toUpQ = getPathUp(q)
            val toDrop = (toUpP zip toUpQ).count{case (a,b) => a == b}
            toUpP.size - toDrop + toUpQ.size - toDrop + 1
        }
        
        queries.map(arr => forQuery(arr(0), arr(1)))
    }
}
```