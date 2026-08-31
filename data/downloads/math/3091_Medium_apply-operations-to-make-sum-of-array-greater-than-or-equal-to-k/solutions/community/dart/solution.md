# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4938812/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4938812/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Prioritize by incrementing first, then duplicating last. Increment steps is calculated by taking the sqare root of `k` and rounding down. Duplication steps is calculated by dividing `k` by the currentNumber after incrementing and rounding up. There is a case where if `k` is a perfect square, the return the `minimum steps - 1`. Otherwise just return minimum steps.

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
    int minOperations(int k) {
        if (1 >= k) {
            return 0;
        }

        var minSteps = 0;
        var currentNumber = 1;

        final incrementSteps = sqrt(k).floor();
        minSteps = incrementSteps - 1;
        currentNumber += incrementSteps;

        final duplicateSteps = (k / currentNumber).ceil();
        minSteps += duplicateSteps;

        if (isPerfectSquare(k)) {
            return minSteps - 1;
        }

        return minSteps;

    }

    bool isPerfectSquare(int cand) {
        final r = sqrt(cand).floor();
        return r * r == cand;
    }
}

// k = 11
// [1]
// [4] -> 3 times
// [4, 4, 4] -> 2 times

// [5] -> 4 times
// [5, 5, 5] -> 2 times

// [6] -> 5 times
// [6, 6] -> 1 times

// base case where if 1 >= k, return 0

// k = 10
// [1]
// [5] -> 4 times
// [5, 5] -> 1 times

// [4] -> 3 times
// [4, 4, 4] -> 2 times

// [3] -> 2 times
// [3,3,3,3] -> 3 times

// k = 19
// [1]
// [5] -> 4 times
// [5,5,5,5] -> 3 times

// [6] -> 5 times
// [6,6,6,6] -> 4 times

// [4] -> 3 times
// [4,4,4,4,4] -> 4 times

// initial observation: we increment first before duplicating

// lets say k = 11
// sqrt(11) = 3.316, round down = 3
// it is between 3 and 4 since 3^2 = 9 and 4^2 = 16
// if we floor it and add it to 1, we can then duplicate it afterwards

// 11 / 4 = 2.75, round up = 3
// 3 - 1 + 3 = 5, minimum steps

// k = 25
// sqrt(25) = 5
// 5 - 1 = 4 steps to increment
// [1]
// [5] -> 4 steps
// 25 / 5 = 5
// 5 - 1 = 4 steps to duplicate
// [5,5,5,5,5] -> 4 steps
// total of 8 steps
```