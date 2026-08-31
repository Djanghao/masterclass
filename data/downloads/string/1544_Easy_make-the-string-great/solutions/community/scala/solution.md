# Scala FP: tailrec, List stack, without final reverse

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/4976990/](https://leetcode.com/problems/make-the-string-great/solutions/4976990/)

---

# Code
```
object Solution {
  def makeGood(s: String): String = {
    @annotation.tailrec
    def filter(i: Int, stack: List[Char]): String = 
      if (i < 0) stack.mkString
      else if (stack.nonEmpty && (stack.head - s(i)).abs == 32)
        filter(i - 1, stack.tail)
      else
        filter(i - 1, s(i) :: stack)

    filter(s.length - 1, Nil)  
  }
}
```