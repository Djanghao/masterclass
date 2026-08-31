# Scala Solution

**Author:** jordan_lee
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotate-array/solutions/1835571/](https://leetcode.com/problems/rotate-array/solutions/1835571/)

---

```
object Solution {
    def rotate(nums: Array[Int], k: Int): Unit = {
        val size = nums.size
        val new_nums = nums.drop(size - (k%size)) ++ nums.take(size - (k%size))
        for (i <- 0 until size) {
            nums(i) = new_nums(i)
        }
    }
}