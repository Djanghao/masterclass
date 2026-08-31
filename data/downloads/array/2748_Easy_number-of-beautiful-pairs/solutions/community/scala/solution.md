# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3734629/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3734629/)

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
  def countBeautifulPairs(nums: Array[Int]): Int = {
    def gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)

    (for{i <- 0 until nums.length
        j <- i + 1 until nums.length
        if(gcd(nums(i).toString.head.toInt - 48, nums(j).toString.last.toInt - 48)) == 1}yield 1).size

  }
}


```