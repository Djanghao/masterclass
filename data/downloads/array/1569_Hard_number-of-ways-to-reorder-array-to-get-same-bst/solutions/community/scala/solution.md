# 9 lines scala dfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3646529/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3646529/)

---

# Code
```
object Solution {
  def MOD = 1_000_000_007
  lazy val triangle = (0 until 1001).foldLeft(List(List(1))){case (l,i) =>
    ((0 +: l.head) zip (l.head :+ 0)).map{case (a,b) => (a+b) % MOD} +: l
  }.reverse.map(_.toVector).toVector
  def dfs(list: List[Int]): Long = {
    lazy val (left,right) = list.tail.partition(_ < list.head)
    if(list.size < 3) 1L else (((dfs(left)*dfs(right)) % MOD) * (triangle(list.size - 1)(left.size))) % MOD
  }
  def numOfWays(nums: Array[Int]): Int = ((dfs(nums.toList) - 1) % MOD).toInt
}
```