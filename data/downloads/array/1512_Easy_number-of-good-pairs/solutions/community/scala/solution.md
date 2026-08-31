# Scala 97% faster 100% less memory usage recursion solution

**Author:** tarasbabii18
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/1129452/](https://leetcode.com/problems/number-of-good-pairs/solutions/1129452/)

---

```
object Solution {
    def numIdenticalPairs(nums: Array[Int]): Int = {
        def recursion(nums: Array[Int], res: Int): Int = {
          if (nums.isEmpty) {
            res
          }
          else {
            val tail = nums.tail
            recursion(tail, res + tail.count(_ == nums.head))
          }
        }
        recursion(nums, 0)
    }
}
```