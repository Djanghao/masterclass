# [Scala] 4-liner, list pattern matching

**Author:** Abastro
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1888576/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1888576/)

---

Too simple, to be honest. Why would this need explanation?
4-liner is a bit underdog though. Anyone going for one-liner?

```scala
  def minDeletion (nums: Array[Int]): Int = {
    def minDel: List[Int] => Int = {
      case Nil => 0; case _ :: Nil => 1 // resulted length must be even
      case x :: y :: xs => if (x == y) 1 + minDel (y :: xs) else minDel (xs)
    }; minDel (nums.toList) }
```