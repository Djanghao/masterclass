# Swift QuickSelect referencing neetcode's solution

**Author:** casparlau
**Votes:** 6
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/2022121/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/2022121/)

---

```
class Solution {
    func findKthLargest(_ nums: [Int], _ k: Int) -> Int {   
        let index = nums.count - k
        return quickselect(0, nums.count - 1, index, nums)
    }
    
    func quickselect(_ l: Int,_ r : Int,_ target: Int,_ nums: [Int]) -> Int {
        var pivot = nums[r]
        var p = l
        var a = nums
        for i in l..<r {
            if a[i] <= pivot {
                a.swapAt(p,i)
                p += 1
            }
        }
        a.swapAt(p, r)
        if p > target {
            return quickselect(l , p-1, target, a)
        }
        else if p < target {
            return quickselect(p+1 , r, target, a)
        }
        else {
            return a[p]
        }
    }
}
```