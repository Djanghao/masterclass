# scala easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/3383298/](https://leetcode.com/problems/mice-and-cheese/solutions/3383298/)

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
    def miceAndCheese(reward1: Array[Int], reward2: Array[Int], k: Int): Int = {
        val (a, b) = (reward1 zip reward2).map(n => (n._1 - n._2, n._1,n._2)).sortBy(- _._1).map(n => (n._2, n._3)).splitAt(k)
        a.map(_._1).sum + b.map(_._2).sum
    }
}
```