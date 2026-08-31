# Swift, using binary search, no Swift higher order functions

**Author:** stormwright
**Votes:** 0
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/5212801/](https://leetcode.com/problems/fair-candy-swap/solutions/5212801/)

---



# Code
```
class Solution {
    func fairCandySwap(_ aliceSizes: [Int], _ bobSizes: [Int]) -> [Int] {
        var sumA = 0
        var sumB = 0
        
        for num in aliceSizes {
            sumA += num
        }
        
        for num in bobSizes {
            sumB += num
        }
    
        let dif = (sumA - sumB) / 2
        
        func search(_ nums: [Int], _ target: Int) -> Bool {
            var left = 0
            var right = nums.count - 1 // if we are looking for index
            
            while left <= right {
                let mid = left + (right - left) / 2 // to handle overflow
                if nums[mid] == target {
                    return true
                }
                
                if nums[mid] < target {
                    left = mid + 1
                } else if nums[mid] > target {
                    right = mid - 1
                }
            }
            
            return false
        }
        
        let sortedBobSizes = bobSizes.sorted()
        
        for aliceSize in aliceSizes {
            let targetBobCandy = aliceSize - dif
            
            if search(sortedBobSizes, targetBobCandy) {
                return [aliceSize, targetBobCandy]
            }
        }
        
        return []
    }
}
```