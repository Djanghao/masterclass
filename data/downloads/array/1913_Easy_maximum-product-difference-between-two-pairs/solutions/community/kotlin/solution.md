# Kotlin: Straightforward, no sorting.

**Author:** maxhves
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4418256/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4418256/)

---

# Code\r
```\r
class Solution {\r
    fun maxProductDifference(nums: IntArray): Int {\r
        var largest = Int.MIN_VALUE\r
        var secondLargest = Int.MIN_VALUE\r
        var smallest = Int.MAX_VALUE\r
        var secondSmallest = Int.MAX_VALUE\r
\r
        for (num in nums) {\r
            if (num >= largest) {\r
                secondLargest = largest\r
                largest = num\r
            } else if (num > secondLargest) {\r
                secondLargest = num\r
            }\r
\r
            if (num <= smallest) {\r
                secondSmallest = smallest\r
                smallest = num\r
            } else if (num < secondSmallest) {\r
                secondSmallest = num\r
            }\r
        }\r
\r
        return (largest * secondLargest) - (smallest * secondSmallest)\r
    }\r
}\r
```