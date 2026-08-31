# java 100% space and time

**Author:** vamsigurram
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/871468/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/871468/)

---

```
class Solution {
    public boolean isMajorityElement(int[] nums, int target) {
        int maj = nums.length/2;
        for(int i=0; i<nums.length-maj; i++) {
            if(nums[i] == target && nums[i+maj] == target) {
                return true;
            }
        }
        return false;
    }
}
```