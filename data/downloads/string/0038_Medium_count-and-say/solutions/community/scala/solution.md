# Scala || Recursion and FoldLeft || Beats 100%

**Author:** ASRagab
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-and-say/solutions/5842050/](https://leetcode.com/problems/count-and-say/solutions/5842050/)

---

# Approach 

We only need to keep the previous string around, and count and say the numbers there, `foldLeft` will allow us to accumulate and update a single string.

# Code
```scala []
import scala.annotation.tailrec

object Solution {
    def countAndSay(n: Int): String =
        @tailrec 
        def helper(rem: String, acc: List[String] = Nil): String =
            if rem.isEmpty then acc.reverse.mkString
            else
                val (head, rest) = rem.span(_ == rem.head)
                helper(rest, s"${head.size}${head.head}" :: acc)
        
        (1 until n).foldLeft("1") { case (acc, _) => helper(acc)}
}
```

![Screenshot 2024-09-27 at 11.38.19\u202FPM.png](./images/0.png)