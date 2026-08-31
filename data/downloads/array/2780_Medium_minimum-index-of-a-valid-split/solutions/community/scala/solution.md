# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4297880/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4297880/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def minimumIndex(nums: List[Int]): Int = {
    val n = nums.length
    val (num,freq) = nums.groupBy(identity).mapValues(_.size).toArray.sortBy(- _._2).head
    if(freq * 2 <= n + 1) return -1
    def help(i: Int, freqleft: Int, as: Array[Int]):Int = {
      val cur = freqleft + (if(as(i - 1) == num) 1 else 0)
      if(i == n) - 1
      else if(cur * 2 > i && (freq - cur) * 2 > n - i)  i - 1
      else help(i + 1, cur, as)
    }
    help(1, 0, nums.toArray)
  }
}
```