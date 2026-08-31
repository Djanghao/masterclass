# 💡Swift - Optimal Solution - Greedy

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4662735/](https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4662735/)

---

At each step, our goal is to eliminate the i-th bit while also removing any more significant bits that we have confirmed can be safely discarded.

# Solution
```swift
class Solution {
    func minOrAfterOperations(_ nums: [Int], _ k: Int) -> Int { 
        let totalBits = 30       
        var answer = 1 << totalBits - 1

        // Try to remove the most significant bit first.
        for bit in (0..<totalBits).reversed() {
            // Remove the bit from the answer.
            let mask = 1 << bit
            answer = answer & ~mask

            // Calculate the number of operations needed
            // to clear all the bits cleared in the answer.
            var operations = 0
            var sequence = 1 << totalBits - 1 // All bits set.
            for x in nums {
                sequence &= x
                if sequence | answer == answer {
                    // This sequence doesn't change the desired answer.
                    sequence = 1 << totalBits - 1
                } else {
                    // Add the number to the sequence by applying an operation.
                    operations += 1
                }
            }

            // Return the bit if it can't be removed.
            if operations > k {
                answer |= mask
            }
        }

        return answer
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(1)$$