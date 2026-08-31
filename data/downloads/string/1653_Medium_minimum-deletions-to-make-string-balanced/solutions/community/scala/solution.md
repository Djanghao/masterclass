# Scala Simple Solution

**Author:** AliakseiTamarovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5559021/](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5559021/)

---

# Code
```
object Solution {
    def minimumDeletions(s: String): Int = {
        def minimumDeletionsTail(res: Int, countToChange: Int, position: Int): Int = {
            if(position == s.length) return res

            val changeRes = if(s.charAt(position) == 'a' && countToChange > 0) 1 else 0
            val increaseBCount = if(s.charAt(position) == 'b') 1 else 0

            minimumDeletionsTail(res + changeRes, countToChange + increaseBCount - changeRes, position + 1)
        }

        minimumDeletionsTail(0, 0, 0)
  }
}
```