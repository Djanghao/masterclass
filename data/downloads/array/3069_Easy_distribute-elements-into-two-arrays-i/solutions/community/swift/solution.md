# 11ms on swift with loop

**Author:** IvanNez
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/5230145/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/5230145/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func resultArray(_ nums: [Int]) -> [Int] {
    
    var arr1 = [Int]()
    var arr2 = [Int]()
    
    arr1.append(nums[0])
    arr2.append(nums[1])
        
    for i in 2..<nums.count{
        if arr1.last! > arr2.last! {
            arr1.append(nums[i])
        } else {
            arr2.append(nums[i])
        }
    }
    return arr1 + arr2
}
}
```