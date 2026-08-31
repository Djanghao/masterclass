# [Swift] Beat 100% || easy to understand

**Author:** 0xz3r0
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/6104608/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/6104608/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I think we need to count how many word in array words are prefix string of s.

# Approach
<!-- Describe your approach to solving the problem. -->
- We will have a counter variable to count word is prefix string of s
- Iterate over the array words. Check each word is matching with condition we will increase counter 1

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func countPrefixes(_ words: [String], _ s: String) -> Int {
        var res: Int = 0
        for word in words {
            if s.hasPrefix(word) {
                res += 1
            }
        }      
        return res
    }
}
```