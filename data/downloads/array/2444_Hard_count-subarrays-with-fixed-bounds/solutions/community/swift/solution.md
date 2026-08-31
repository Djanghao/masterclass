# Swift beats 100% runtime

**Author:** TigranNeDoDeveloper
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/3255809/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/3255809/)

---

# Complexity
- Time complexity:
The time complexity of this code is O(n), where n is the number of elements in the input array nums. This is because the code iterates through the array once, performing constant time operations for each element.

- Space complexity:
The space complexity of this code is O(1), because the amount of memory used by the code does not depend on the size of the input array. The code only uses a constant amount of memory to store a few variables, regardless of the size of nums.

# Code
```
class Solution {
    func countSubarrays(_ nums: [Int], _ minK: Int, _ maxK: Int) -> Int {
        var ans: Int = 0
        var j = -1
        var prevMinKIndex = -1
        var prevMaxKIndex = -1
        
        for i in 0..<nums.count {
            if nums[i] < minK || nums[i] > maxK {
                j = i
            }
            if nums[i] == minK {
                prevMinKIndex = i
            }
            if nums[i] == maxK {
                prevMaxKIndex = i
            }
            
            ans += Int(max(0, min(prevMinKIndex, prevMaxKIndex) - j))
        }
        
        return Int(ans)
    }
}
```