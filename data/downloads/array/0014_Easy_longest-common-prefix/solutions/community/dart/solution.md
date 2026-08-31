# Simple Solution

**Author:** bhavesh91
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/3055699/](https://leetcode.com/problems/longest-common-prefix/solutions/3055699/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n\xB2)$$

- Space complexity:
$$O(1)$$

# Code
Dart
```
class Solution {
  String longestCommonPrefix(List<String> strs) {
    String commonPrefix = strs.first;
    for (final word in strs) {
        while (!word.startsWith(commonPrefix)) {
            commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);
        }
    }
    return commonPrefix;
  }
}
```
Swift 
```
class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        var commonPrefix = strs.first ?? ""
        for word in strs {
            while !word.starts(with: commonPrefix) {
                commonPrefix.removeLast()
            }
        }
        return commonPrefix
    }
}
```