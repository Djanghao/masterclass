# Swift Monotonic Stack

**Author:** DevilDimon
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/4903652/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/4903652/)

---

# Approach
Use monotonically increasing stack as we go through the array, and get the max element popped. This will be the element to append instead of the usual current element. The size of the stack at the end is the answer.

The rationale is that whenever a smaller element is detected, we have to put it into an existing chunk, and we maintain the max element of that chunk as the element in the stack, which becomes basically a storage of maximum elements of a chunk if it couldn't get smaller. If no elements are removed, the element itself becomes this small chunk, which should be possible as long as it's not popped down the line (meaning there are smaller elements later).

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    func maxChunksToSorted(_ arr: [Int]) -> Int {
        var stack = [Int]()
        for num in arr {
            var maxElemInChunk = num
            while let last = stack.last, last > num {
                stack.removeLast()
                maxElemInChunk = max(maxElemInChunk, last)
            }
            stack.append(maxElemInChunk)
        }

        return stack.count
    }
}
```