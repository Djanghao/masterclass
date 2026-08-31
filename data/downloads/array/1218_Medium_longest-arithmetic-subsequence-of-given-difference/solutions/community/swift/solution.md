# Very Easy to understand

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3765332/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3765332/)

---



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    func longestSubsequence(_ arr: [Int], _ difference: Int) -> Int {
        var map = [Int: Int]()
        var maxSubSeq = 1

        for item in arr {
            if let existingSequenceLength = map[item-difference] {
                map[item] = existingSequenceLenght + 1
                maxSubSeq = max(maxSubSeq, existingSequenceLength+1)
            } else {
                map[item] = 1
            }
        }
        return maxSubSeq
    }
}
```