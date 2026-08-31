# Easy solution beats time complexity 98% and memory 81% of users

**Author:** umar_nazarov
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/4400931/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/4400931/)

---

# Code
```
class Solution {
  int removeDuplicates(List<int> nums) {
    int k = 0;
    for(int i = 1; i < nums.length; i++) {
        if(nums[i - 1] != nums[i]) {
            k++;
            nums[k] = nums[i];
        }
    }
    return k + 1;
  }
}
```