# [Swift] O(n) Two-Pointers Solution

**Author:** alptekin35
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/501339/](https://leetcode.com/problems/sort-transformed-array/solutions/501339/)

---

```
class Solution {
    func sortTransformedArray(_ nums: [Int], _ a: Int, _ b: Int, _ c: Int) -> [Int] {
        var arr:[Int] = Array(repeating: 0, count: nums.count)
        var p1 = 0
        var p2 = nums.count - 1
        var index = a >= 0 ? p2 : 0
        while p2 >= p1 {
            let i1 = (a*nums[p1]*nums[p1]) + (b*nums[p1]) + c
            let i2 = (a*nums[p2]*nums[p2]) + (b*nums[p2]) + c
            if a >= 0{
                if i1 >= i2{
                    arr[index] = i1
                    p1 += 1
                }else{
                    arr[index] = i2
                    p2 -= 1
                }
                index -= 1
            }else{
                if i1 >= i2{
                    arr[index] = i2
                    p2 -= 1
                }else{
                    arr[index] = i1
                    p1 += 1
                }
                index += 1
            }
        }
        return arr
    }
}
```