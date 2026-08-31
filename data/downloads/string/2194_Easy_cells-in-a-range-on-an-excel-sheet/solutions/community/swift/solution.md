# ✅ [Accepted] No magic, just ascii

**Author:** IlnurZayn
**Votes:** 1
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/3988434/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/3988434/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func cellsInRange(_ s: String) -> [String] {
        
        let array = s.components(separatedBy: ":")
        let firstLetterValue = array[0].first?.asciiValue, firstValue = Int(String(array[0].last!))!
        let secondLetterValue = array[1].first?.asciiValue, secondValue = Int(String(array[1].last!))!
    
        var result = [String]()
    
        for charNum in (firstLetterValue!...secondLetterValue!) {
            for num in (firstValue...secondValue) {
                result.append(String(UnicodeScalar(charNum)) + "\\(num)")
            }
        }
    
        return result
    }
}
```