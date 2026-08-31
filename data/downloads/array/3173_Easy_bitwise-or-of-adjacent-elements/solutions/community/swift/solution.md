# Bitwise OR of adjacent elements

**Author:** therahulgoel
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5526644/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5526644/)

---


# Code
```
//@therahulgoel 

class Solution {
    func orArray(_ nums: [Int]) -> [Int] {
        var result = [Int](), i = 1
        while i < nums.count {
            let or = nums[i] | nums[i - 1]
            result.append(or)
            i += 1
        }
        return result
    }
}
```