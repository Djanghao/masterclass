# 2 lines for lazy ass like me

**Author:** heyhocombo
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-array-by-parity/solutions/4099830/](https://leetcode.com/problems/sort-array-by-parity/solutions/4099830/)

---



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    func sortArrayByParity(_ nums: [Int]) -> [Int] {
         if nums.isEmpty { return []}
        
        return nums.filter({$0 % 2 == 0}) + nums.filter({$0 % 2 != 0})
    }
}
```