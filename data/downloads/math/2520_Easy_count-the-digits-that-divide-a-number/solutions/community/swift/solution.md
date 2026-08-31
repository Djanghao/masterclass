# One line swift solution

**Author:** AndreevIVdev
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2979994/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2979994/)

---

# Code
```
class Solution {
    func countDigits(_ num: Int) -> Int {
        String(num).compactMap(\\.wholeNumberValue).filter{ num.isMultiple(of: $0) }.count
    }
}
```