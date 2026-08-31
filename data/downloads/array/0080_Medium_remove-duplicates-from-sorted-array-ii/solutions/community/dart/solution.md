# Dart solution

**Author:** AhmedWafik
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/5408613/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/5408613/)

---

```
class Solution {
  int removeDuplicates(List<int> nums) {
    int first = 0;
    int second = 1;
    bool hasDuplicate = false;
    while (second < nums.length) {
      if (hasDuplicate && nums[first] == nums[second]) {
        nums.removeAt(second);
      } else if (nums[first] == nums[second]) {
        hasDuplicate = true;
        second++;
      } else {
        hasDuplicate = false;
        first = second;
        second++;
      }
    }
    return nums.length;
  }

  int removeDuplicates(List<int> nums) {
    int j = 1;
    for (int i = 1; i < nums.length; i++) {
      if (j == 1 || nums[i] != nums[j - 2]) {
        nums[j++] = nums[i];
      }
    }
    return j;
  }
}
```