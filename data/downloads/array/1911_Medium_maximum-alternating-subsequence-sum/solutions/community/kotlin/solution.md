# O(n), Two flavors! (Functional & Imperative)

**Author:** arocnies
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/4304796/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/4304796/)

---

# Intuition
My original idea was to walk right to left since only the right side can be solved as a sub-problem where we can solve without hidden side-effects on future numbers.

# Approach
Wasted too much thought with the miss-understanding that I would need the sequences instead of just the totals.

I solved using paper and filling in a row for each number (reverse sequence order).
I made columns for if-even and if-odd. Each cell I filled out the value for using the given number as defined by the column (add for even, subtract for odd) plus the opposing sum.

# Complexity
- Time complexity: O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
//    fun maxAlternatingSum(nums: IntArray): Long {
//        val (even, odd) = nums
//            .map { it.toLong() }
//            .foldRight(0L to 0L) { num, (evenSum, oddSum) ->
//                max(num + oddSum, evenSum) to max(evenSum - num, oddSum)
//            }
//        return max(even, odd)
//    }

    fun maxAlternatingSum(nums: IntArray): Long {
        var evenSum = 0L
        var oddSum = 0L
        for (num in nums.reversed()) {
            val newEven = num + oddSum
            if (newEven > evenSum) evenSum = newEven
            val newOdd = evenSum - num
            if (newOdd > oddSum) oddSum = newOdd
        }
        return max(evenSum, oddSum)
    }
}

```