# Why my scala memory usage is always so small (100%) ?

**Author:** fulgenssequar
**Votes:** 2
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/351584/](https://leetcode.com/problems/generate-parentheses/solutions/351584/)

---

Not the first time, the speed is only 62.07% but memory is less than 100% :
```
object Solution {
    def generateParenthesis(n: Int): List[String] = {
        def worker(m:Int, n:Int) : List[String] = {
            (m,n) match {
                case ( 0, 0) => List("")
                case (0,n) => List( ")" * n )
                case _ if m==n => worker(m-1,n).map("(" + _)
                case _ if m < n => worker(m-1,n).map("("+_) ++ worker(m,n-1) .map(")"+_)
            }
        }
        worker(n,n)
        
    }
}
```