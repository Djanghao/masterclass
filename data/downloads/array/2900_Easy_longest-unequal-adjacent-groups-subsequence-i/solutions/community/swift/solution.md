# 12 ms / 16.38 MB

**Author:** kawthar3296
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5178359/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5178359/)

---


# Complexity
- Time complexity: 12 ms - Beats 100.00% of users with Swift
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 16.38 MB - Beats 30.77% of users with Swift
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func getLongestSubsequence(_ words: [String], _ groups: [Int]) -> [String] {
        var previous = groups[0]
        var result = [String]()
        result.append(words[0])
        
        for index in 1..<words.count {
            if(groups[index] != previous) {
                result.append(words[index])
                previous = groups[index]
            }
        }
        
        return result
    }
}
```