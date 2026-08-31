# One single pass solution with sliding window

**Author:** drgavrikov
**Votes:** 1
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5349053/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5349053/)

---

# Approach
In a single pass through the array, we can calculate the total satisfied customers without using the special technique and the maxAdditionalSatisfied customers using the special technique during the specified minutes.

The answer to the problem will be the sum of the total satisfied and maxAdditionalSatisfied customers.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$ additional memory
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun maxSatisfied(customers: IntArray, grumpy: IntArray, minutes: Int): Int {
        var satisfied = 0
        var additionalSatisfied = 0
        var maxAdditionalSatisfied = 0
        (0 until customers.size).forEach { index -> 
            satisfied += customers[index] * (1 - grumpy[index])
            additionalSatisfied += customers[index] * grumpy[index]
            if (index >= minutes) additionalSatisfied -= customers[index - minutes] * grumpy[index - minutes]
            maxAdditionalSatisfied = max(maxAdditionalSatisfied, additionalSatisfied)
        }
        return satisfied + maxAdditionalSatisfied
    }
}
```

Most of my solutions are in\xA0[C++](https://github.com/drgavrikov/leetcode-cpp)\xA0and\xA0[Kotlin](https://github.com/drgavrikov/leetcode-jvm)\xA0on my\xA0Github.
