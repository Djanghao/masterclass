# Swift Solution

**Author:** danilovdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/3324964/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/3324964/)

---

```
class Solution {
    func digitCount(_ num: String) -> Bool {
        var dict: [Int: Int] = [:]
        for ch in num { 
            dict[Int(String(ch))!, default: 0] += 1
        }
        let n = num.count
        let nums = Array(num)
        for i in 0..<n { 
            let num = Int(String(nums[i]))!
            if (dict[i, default: 0] != num) { return false }
        }
        return true
    }
}
```