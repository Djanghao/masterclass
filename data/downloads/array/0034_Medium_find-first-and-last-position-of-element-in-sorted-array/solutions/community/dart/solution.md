# Short Dart Code ;)

**Author:** ShrinathSG
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/5184330/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/5184330/)

---


# Code
```
class Solution {
  List<int> searchRange(List<int> nums, int target) {
  List<int> result = [0, 0];
  result[0] = binarySearch(nums, target, findFirst: true);
  result[1] = binarySearch(nums, target, findFirst: false);
  return result;
}

int binarySearch(List<int> nums, int target, {required bool findFirst}) {
  int result = -1;
  int left = 0;
  int right = nums.length - 1;
  
  while (left <= right) {
    int mid = (left + right) ~/ 2;
    if (nums[mid] == target) {
      result = mid;
      if (findFirst) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
}
```