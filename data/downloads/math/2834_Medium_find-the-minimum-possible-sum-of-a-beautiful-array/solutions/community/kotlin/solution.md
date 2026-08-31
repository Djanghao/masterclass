# 🎉✨With explanation! Best Solution! Beats 100%. Space - O(1).🎆 2 Approach!

**Author:** Tehronshoh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/5629136/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/5629136/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
What do we need? We need to find the minimum sum of N positive numbers from a set of unique numbers, such that for any pair of numbers from this set, their sum does not equal the target.
- All numbers from **1 to (target / 2)** should be in our set, because for any x and y in this range, x + y is always less than or equal to the target, which satisfies our conditions.
- All numbers from **(target / 2) + 1 until target** should not be in our set, because for every number in this range, there is another number from the previous range whose sum equals the target. This does not satisfy the conditions.
- All numbers from **target + 1 to unfinity** satisfy our conditions.

# Approach 1
We find the sum of the first N numbers from these two sequences: **1 to (target / 2)** and **target + 1 until unfinity**
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Approach 2
We find the sum of the first N numbers with formula: 
**S = n * (n + 1) / 2** 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minimumPossibleSum(n: Int, target: Int): Int {
        var size = 0
        var number = 1
        var sum = 0L

        while(size != n && number <= (target / 2)) {
            sum = (sum + number)
            size++
            number++
        }

        number = target
        sum %= 1000000007L
        while(size != n) {
            sum = (sum + number)
            size++
            number++
        }

        return (sum % 1000000007L).toInt()
    }
}
```