# Swift HashMap/Counter

**Author:** duyetnt
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1811018/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1811018/)

---

This is the first time I have tried to post something here :D

An **anagram** of a string is a string that contains the same characters with a different (or the same) ordering. The idea is to use a `counter` to keep track the difference of each character in two strings to produce the result.

1. Iterate over every character in `s` and increase the counter by 1
2. Iterate over every character in `t` and decrease the counter by 1
3. Now, the items remaining in `counter` are the difference of each character between `s` and `t`. Let's say `diff` is value of key `c`, we have 3 cases:
  - `diff == 0` means the occurences in `s` and `t` are the same --> We don't need to append `c` neither to `s` or `t`
  - `diff > 0` means `s` has more character `c` than `t` --> we need to append `diff` times to `t`
  - `diff < 0` means `t` has more character `c` than `s` --> we need to append `diff` times to `s`

**Swift**
```swift
class Solution {
  func minSteps(_ s: String, _ t: String) -> Int {
    var counter = [Character: Int]()
    for c in s {
      counter[c, default: 0] += 1 
    }
    
    for c in t {
      counter[c, default: 0] -= 1 
    }
    
    var res = 0 
    for diff in counter.values {
      res += abs(diff)
    }
    
    return res
  }
} 

// Time complexity: O(m + n) where m is s.count and n is t.count. 
// Space complexity: O(26) = O(1) since s and t only consist of lowercase English letters.
```