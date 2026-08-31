# O(n) Solution using Monotonic stack

**Author:** deeptig20
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/4060029/](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/4060029/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ --> O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ --> O(n)

# Code
```
class Solution {
    func smallestSubsequence(_ s: String, _ k: Int, _ letter: Character, _ repetition: Int) -> String {
        var maxOcc = 0
        for ch in s {
            if ch == letter {
                maxOcc += 1
            }
        }

        var count = 0
        var left = s.count
        var stack = [Character]()

        for ch in s {
            while stack.count > 0 && (stack.last! > ch || k - stack.count < repetition - count) {
                if left + stack.count <= k { break }

                if stack.last == letter && maxOcc <= repetition { break }

                if stack.last == letter {
                    maxOcc -= 1
                    count -= 1
                }
                
                _ = stack.popLast()
            }

            if ch == letter {
                count += 1
            }

            stack.append(ch)
            left -= 1
        }

        while(stack.count > k) {
            _ = stack.popLast()
        }

        return String(stack)
    }
}
```