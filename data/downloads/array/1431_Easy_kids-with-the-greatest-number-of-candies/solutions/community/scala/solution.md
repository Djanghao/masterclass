# Kids With the Greatest Number of Candies

**Author:** ALIHAN22
**Votes:** 1
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/5598572/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/5598572/)

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
    def kidsWithCandies(candies: Array[Int], extraCandies: Int): List[Boolean] = {
        var maxcandies = candies.max
        candies.map(candy => candy + extraCandies >= maxcandies).toList
    }       
}
```