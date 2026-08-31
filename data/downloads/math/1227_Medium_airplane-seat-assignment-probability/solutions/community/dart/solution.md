# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/4792192/](https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/4792192/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If there is one seat, there is 100% chance of sitting in that seat. If there are more seats, there is a 50% chance that you will be able to sit in your assigned seat. Another way to look at it is justifying that there is a 50/50 chance of you sitting in a seat that is not assigned to you given that there are two possibilities: You could either sit in your assigned seat or you don't.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  double nthPersonGetsNthSeat(int n) {
    if (n == 1) {
        return 1.0;
    }

    return 0.5;
  }
}

```