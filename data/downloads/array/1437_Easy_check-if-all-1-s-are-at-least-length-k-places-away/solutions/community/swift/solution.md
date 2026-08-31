# Optional index

**Author:** user6990dN
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/3417560/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/3417560/)

---



# Code
```
class Solution {
    func kLengthApart(_ nums: [Int], _ k: Int) -> Bool {
        
        var prevIndex: Int? = nil

        for index in 0..<nums.count where nums[index] == 1 {
            if let prevIndex = prevIndex {
                if index - prevIndex - 1 < k {
                    return false
                }
            }

            prevIndex = index
        }

        return true
    }
}
```