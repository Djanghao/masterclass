# Swift - Beats 100% w/ Explanation + Time & Space

**Author:** nickreps
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3341429/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3341429/)

---

# Approach
- Max Number: Find first non-nine value and replace it + all other occurrences of this value w/ 9
- Min Number: Replace first value + all other occurences of this value w/ 0

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minMaxDifference(_ num: Int) -> Int {
        let maxNum = getMaxValueToReplace("\\(num)", num)
        let minNum = getMinValueToReplace("\\(num)", num)
        return maxNum - minNum
    }

    func getMaxValueToReplace(_ str: String, _ num: Int) -> Int {
        guard let idx = str.firstIndex(where: { $0 != "9" } ) else { return num }
        return Int(str.replacingOccurrences(of: "\\(str[idx])", with: "9"))!
    }

    func getMinValueToReplace(_ str: String, _ num: Int) -> Int {
        guard let idx = str.firstIndex(where: { $0 != "0" } ) else { return num }
        return Int(str.replacingOccurrences(of: "\\(str[idx])", with: "0"))!
    }
}

```