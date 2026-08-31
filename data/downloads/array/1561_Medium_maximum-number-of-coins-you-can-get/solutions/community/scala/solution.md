# Greedy

**Author:** user8076uV
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4326378/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4326378/)

---

# Intuition
Alice always gets the biggest pile, so the best we can do is get the second biggest pile and give Bob the smallest.

# Approach
Greedy choice

# Complexity
- Time complexity:
$$O(n\\log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
    def maxCoins(piles: Array[Int]): Int = {
        val secondLargestPiles = (1 until piles.length by 2).map(piles.sortWith(_ > _))
        val excludingBobs = xs.take(piles.length / 3)
        return excludingBobs.sum
    }
}
```