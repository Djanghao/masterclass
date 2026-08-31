# Swift Easy Solution

**Author:** vikasvaish21
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4580895/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4580895/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. --> Boyr moore Voting 
Algorithm

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    
func minimumIndex(_ nums: [Int]) -> Int {
    var majorityElement = nums[0]
    var majorityCount = 0
    var lenght = nums.count
    var leftCount = 0
    var count = 1
    for i in 1..<lenght{
        if nums[i] == majorityElement{
            count += 1
        }else{
            count -= 1
        }
        if count == 0{
            majorityElement = nums[i]
            count = 1
        }
            
    }

    for i in 0..<lenght{
        if nums[i] == majorityElement{
            majorityCount += 1
        }
    }
    
    
    for i in 0..<lenght{
        if nums[i] == majorityElement{
            leftCount += 1
        }
        if (leftCount * 2 > i+1) && ((majorityCount - leftCount)*2 > lenght-i-1){
            return i
        }
    }
    return -1
}
}
```