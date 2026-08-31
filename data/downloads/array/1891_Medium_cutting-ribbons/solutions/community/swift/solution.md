# Swift - Binary Search on Ribbon Lengths

**Author:** chris_284
**Votes:** 0
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/4875730/](https://leetcode.com/problems/cutting-ribbons/solutions/4875730/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
You can have allPossibleRibbonsLengths of [1, 2, ..., ribbons.max()]

Use a binary search (left, right, middle) on allPossibleRibbonsLengths to find which length which give you the amount of pieces (k) required. Rename the typical (left, right, middle) to represent the problem/context a little better... small, large, testLength. Small is the smallest we will consider, large is the largest we will consider, and testLength is the one we are about to check to see if it meets our requirement. 

If our testLength didn't create enough pieces, we need a smaller test length, so large = testLength - 1. If we did create enough enough pieces with testLength, see if there is a longest length that will satisfy our requirement. So small = testLength+1

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n\xB7logm), where:
n = ribbons
m = length of longest ribbon

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - Use 1 & ribbons.max() instead of array

# Code
```
class Solution {
    func maxLength(_ ribbons: [Int], _ k: Int) -> Int {
        let maxRibbonLen: Int = ribbons.max() ?? 0

        var small = 1
        var large = maxRibbonLen
        var largestRibbonLength = 0

        while small <= large {
            let testLength = (small + large) / 2

            let numCreated = numbersOfRibbonsCreated(ribbons, length: testLength)
            if numCreated >= k {
                largestRibbonLength = max(testLength, largestRibbonLength)
                small = testLength + 1
            } else if numCreated < k {
                large = testLength - 1
            }
        }

        return largestRibbonLength
    }

    func numbersOfRibbonsCreated(_ ribbons: [Int], length: Int) -> Int {
        guard ribbons.count > 0 else { return 0 }

        var ribbonsMade = 0
        for ribbon in ribbons {
            ribbonsMade += (ribbon / length)
        }

        return ribbonsMade
    }
}

```