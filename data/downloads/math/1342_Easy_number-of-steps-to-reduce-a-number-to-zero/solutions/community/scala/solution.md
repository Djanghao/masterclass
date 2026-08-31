# Tailrec + Match-Case solution

**Author:** Dizilisk
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/4378356/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/4378356/)

---

# Code
```
object Solution {
    def numberOfSteps(num: Int): Int = {
        def loop(step: Int, res: Int): Int = {
            if (res == 0) step
            else {
            val x = res match {
                case _ if (res % 2 == 0) => res / 2
                case _  => res - 1
            }
  			loop(step + 1, x)
            }
        }
        loop(0, num)
    }
}
```