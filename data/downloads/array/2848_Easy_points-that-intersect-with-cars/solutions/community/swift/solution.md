# Swift | Runtime Beats 100%

**Author:** NSResponder
**Votes:** 0
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/5967563/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/5967563/)

---

# Approach
Count all the index and put all the points with value 1. 

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
```swift []
class Solution {
    func numberOfPoints(_ nums: [[Int]]) -> Int {
    let maximum = nums.compactMap({$0[1]}).max() ?? 0
    
    var array = Array(repeating: 0, count: maximum+2)
    
    for index in 0..<nums.count {
        
        if nums[index][0] == nums[index][1] {
            array[nums[index][0]] = 1
        } else {
            for i in nums[index][0]...nums[index][1] {
                array[i] = 1
            }
        }
    }
    
    var indexWithCarPresent = 0
    for value in array {
        if value == 1 {
            indexWithCarPresent += 1
        }
    }
    return indexWithCarPresent
}
}
```