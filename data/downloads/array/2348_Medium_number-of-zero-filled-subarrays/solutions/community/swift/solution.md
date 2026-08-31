# Swift Solution (Pointers)

**Author:** JerExplosion
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3325344/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3325344/)

---

# Code
```
class Solution {
    func zeroFilledSubarray(_ nums: [Int]) -> Int {
      if nums.count == 0 { return 0 }
      var totalCount = 0
      var pointerOne = 0
    
      while pointerOne < nums.count {
          if nums[pointerOne] == 0 {
              var pointerTwo = pointerOne + 1
              var counter = 1
              while pointerTwo < nums.count && nums[pointerTwo] == 0 {
                  pointerOne += 1
                  pointerTwo += 1
                  counter += 1
              }
              totalCount += counter * (counter + 1) / 2
          }
          pointerOne += 1
      }
      return totalCount
  }
}
```