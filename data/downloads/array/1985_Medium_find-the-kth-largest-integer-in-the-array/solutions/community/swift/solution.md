# Swift Solution

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2786288/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2786288/)

---

```
// Find the Kth Largest Integer in the Array
// https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/


class Solution {
    func kthLargestNumber(_ nums: [String], _ k: Int) -> String {
        var nums = nums
        nums.sort { (a, b) -> Bool in
            if a.count == b.count {
                return a > b
            }
            return a.count > b.count
        }
        return nums[k-1]
    }
}
```