# 💡Swift - Optimal Solution - Monotonic Stack

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4185126/](https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4185126/)

---

# Solution
```
class Solution {
    func maximumBooks(_ books: [Int]) -> Int {
        let n = books.count

        // Stack to track potential book selections.
        var stack: [(index: Int, sum: Int)] = []
        var result = 0

        for right in 0..<n {
            let value = books[right]

            // Merge chains if necessary.
            while let last = stack.last, books[last.index] - last.index >= value - right {
                stack.removeLast()
            }

            // Find the chain length.
            var left = 0
            var lastSum = 0
            if let last = stack.last {
                left = last.index + 1
                lastSum = last.sum
            }
            let chain = min(right - left + 1, value)

            // Calculate the sum for the current chain and total sum.
            let chainSum = (2 * value - chain + 1) * chain / 2
            let sum = chainSum + lastSum
            result = max(result, sum)

            // Append the current book info to the stack.
            stack.append((right, sum))
        }

        return result
    }
}
```

# Complexity
- Time: $$O(n)$$
- Space: $$O(n)$$