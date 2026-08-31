# Swift Solution

**Author:** liampronan
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6086528/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6086528/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Convert strings to arrays for simpler, quicker lookup/index iteration.

# Complexity
- Time complexity: $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func isPossibleToRearrange(_ s: String, _ t: String, _ k: Int) -> Bool {
        var tStrs = [ArraySlice<String.Element>: Int]()
        let tArr = Array(t), sArr = Array(s)
        let countPerPair = t.count / k 
        for i in stride(from: 0, to: t.count, by: countPerPair) {
            let str = tArr[i..<(i+countPerPair)]
            tStrs[str, default: 0] += 1 
        }

        for i in stride(from: 0, to: t.count, by: countPerPair) { 
            let str = sArr[i..<(i+countPerPair)]
            if tStrs[str, default: 0] <= 0 { 
                return false
            }
            tStrs[str, default: 0] -= 1 
        }

        return true
    }
}
```