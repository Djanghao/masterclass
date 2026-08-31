# Scala code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/5182642/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/5182642/)

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
  def sumEvenAfterQueries(nums: Array[Int], queries: Array[Array[Int]]): Array[Int] = {
    var sum = nums.filter(_ % 2 == 0).sum
    val ans = new Array[Int](queries.length)
    
    for (i <- queries.indices) {
      val query = queries(i)
      val value = query(0)
      val index = query(1)
      
      if (nums(index) % 2 == 0) {
        sum -= nums(index)
      }
      
      nums(index) += value
      
      if (nums(index) % 2 == 0) {
        sum += nums(index)
      }
      
      ans(i) = sum
    }
    
    ans
  }
}

```