# scala solution 100% runtime, memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/5410399/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/5410399/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n)
# Code
```
object Solution {
  def minOperations(nums: Array[Int]): Int = {
    val seq = nums.groupBy(identity).map(x => x._2.size).toSeq
    // println(seq)
    countOPeration(0, seq, 0)
  }

  def countOPeration(idx: Int, seq: Seq[Int], count: Int): Int = {
    if (idx == seq.length)count
    else {
      if (seq(idx) == 1) -1
      else countOPeration(idx + 1,seq, count + Math.ceil(seq(idx).toDouble / 3).toInt)
    }
  }
}
```