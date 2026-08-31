# Scala FP: tailrec with List stack

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-k-digits/solutions/5007213/](https://leetcode.com/problems/remove-k-digits/solutions/5007213/)

---

# Code
```
object Solution {
  def removeKdigits(num: String, k: Int): String = {
    val len = num.length

    @annotation.tailrec
    def loop(n: Int, i: Int, stack: List[Char]): String =
      if (n == 0) {
        val res = stack.reverse.mkString + num.drop(i)
        if (res.forall(_ == '0')) "0" else res.dropWhile(_ == '0')
      } else if (stack.nonEmpty && (i == len || stack.head > num(i)))
        loop(n - 1, i, stack.tail)
      else
        loop(n, i + 1, num(i) :: stack)

    loop(k, 0, Nil)
  }
}
```