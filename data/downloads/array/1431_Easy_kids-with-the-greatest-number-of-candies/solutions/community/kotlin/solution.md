# ✅ Easy to understand solution O(n) approach

**Author:** hhhhghhghu
**Votes:** 5
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/4328613/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/4328613/)

---

# Intuition
My initial intuition for solving this problem is to determine whether each child can have the greatest number of candies after receiving additional candies. The most straightforward approach to achieve this is to find the maximum number of candies currently held by any child, and then check if each child reaches or exceeds this maximum after adding the extra candies.
# Approach
1. Find the maximum number of candies among all children.
2. Iterate through each child to check if they reach or exceed the maximum number of candies after adding extraCandies.
3. Form a list of boolean values where each value indicates whether the child reaches the maximum number of candies.

# Complexity
- Time complexity O(n):

- Space complexity O(n):

# Code
```
class Solution {
     fun kidsWithCandies(candies: IntArray, extraCandies: Int): List<Boolean> {
        val maxCandies = candies.maxOrNull() ?: 0
        val ans = List(candies.size) { index ->
            candies[index] + extraCandies >= maxCandies
        }
        return ans
    }
}
```