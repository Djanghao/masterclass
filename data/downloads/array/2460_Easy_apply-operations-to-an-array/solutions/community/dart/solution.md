# Simple solution by dart

**Author:** rifathossain82
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/4862784/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/4862784/)

---

# Code
```
List<int> applyOperations(List<int> nums) {
  for (int i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }
  return [
    ...nums.where((e) => e != 0),
    ...nums.where((e) => e == 0),
  ];
}
```