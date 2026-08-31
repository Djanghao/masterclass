# [Swift] - Sliding Window, Easy to Understand

**Author:** ParthoBiswas007
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/774848/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/774848/)

---

```
import Foundation
class Solution {
    func lengthOfLongestSubstringKDistinct(_ s: String, _ k: Int) -> Int {
        guard k > 0 else {
            return 0
        }
        var sArr = Array(s)
        var counter = [Character:Int]()
        var maxLen = 0
        var (left, right) = (0, 0)
        while right < sArr.count {
            if counter[sArr[right]] != nil || counter.keys.count < k {
                counter[sArr[right], default: 0] += 1
                maxLen = max(maxLen, right - left + 1)
                right += 1
            } else {
                counter[sArr[left], default: 0] -= 1
                if counter[sArr[left]] == 0 {
                    counter.removeValue(forKey: sArr[left])
                }
                left += 1
            }
        }
        return maxLen
    }
}

```