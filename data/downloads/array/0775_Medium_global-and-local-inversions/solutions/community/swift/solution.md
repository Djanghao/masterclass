# Swift | mx > nums i + 2 | Faster than 100%

**Author:** navsarma
**Votes:** 0
**Link:** [https://leetcode.com/problems/global-and-local-inversions/solutions/2441933/](https://leetcode.com/problems/global-and-local-inversions/solutions/2441933/)

---

```
// mx > nums[i + 2] solution --------------

// 3, 1, 2, 0    <--  0...j-2  shouldn't contain no. greater than nums[j]
//          j

// can be written as ----------------

class Solution {
    func isIdealPermutation(_ nums: [Int]) -> Bool {
        
        if nums.count < 2 { return true }
        
           var mx = Int.min
        
           for i in 0 ..< nums.count - 2 {
               mx = max(mx, nums[i])
            
               if mx > nums[i + 2] { return false}
          }
        
          return true
    }
}
```

```
// diff > 1 solution --------------

class Solution {
    func isIdealPermutation(_ nums: [Int]) -> Bool {
        
        if nums.count < 2 { return true }
                
        for i in 0 ..< nums.count {
            //if abs(nums[i] - i) > 1 { return false } // <-- was giving TLE on leetcode
            
            let n = nums[i]
            let diff = n > i ? n - i : i - n
            
            if diff > 1 {
                return false
            }
        }
        
        return true
    }
}

// 2, 1, 0    nums[i] > nums[j]  &&  nums[i] > nums[i + 1]

// 2 > 0  <-- global  but  not local

// 2, 1, 0    <-- find diff nums[i] - i    <-- shouldn't be greater than 1   <-- otherwise global != local
// 2, 0, 1
// 0, 1, 2
// 0, 2, 1
// 1, 0, 2
// 1, 2, 0
```