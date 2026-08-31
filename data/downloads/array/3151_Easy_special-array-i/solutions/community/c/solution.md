# check adjacent elements

**Author:** nkrishk
**Votes:** 15
**Link:** [https://leetcode.com/problems/special-array-i/solutions/5177149/](https://leetcode.com/problems/special-array-i/solutions/5177149/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

## Python3
```
class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return True
        
        for i in range(len(nums)-1):
            if nums[i]&1 == nums[i+1]&1:
                return False
            
        return True
        
```
## C
```
bool isArraySpecial(int* nums, int numsSize) {
    if (numsSize == 1) return true;
    for (int i = 0; i < numsSize - 1; ++i) {
        if ((nums[i] & 1) == (nums[i + 1] & 1)) return false;
    }
    return true;
}
```
## java
```
class Solution {
    public boolean isArraySpecial(int[] nums) {
        if (nums.length == 1) return true;        
        for (int i = 0; i < nums.length - 1; i++) {
            if ((nums[i] & 1) == (nums[i + 1] & 1)) {
                return false;
            }
        }
        return true;
    }
}
```