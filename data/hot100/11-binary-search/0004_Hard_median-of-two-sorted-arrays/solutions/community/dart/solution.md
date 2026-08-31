# Simple Dart solution

**Author:** smarenkov
**Votes:** 10
**Link:** [https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2501064/](https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2501064/)

---

**Please upvote if it was helpful!**
```
class Solution {
  double findMedianSortedArrays(List<int> nums1, List<int> nums2) {
    final nums = <int>[...nums1, ...nums2]..sort();
    final middle = nums.length ~/ 2; //Rounded integer middle

    if (middle == nums.length / 2) { //Is rounded middle == real middle
      int x = middle;
      int y = middle - 1;
      return (nums[x] + nums[y]) / 2;
    } else {
      int x = middle;
      return nums[x].toDouble();
    }
  }
}
```

Or

```
class Solution {
  double findMedianSortedArrays(List<int> nums1, List<int> nums2) {
    final nums = <int>[...nums1, ...nums2]..sort();
    final middle = nums.length / 2;  //Real double middle

    if (middle == nums.length ~/ 2) { //Is real middle == rounded middle
      int x = (middle - 0.5).toInt();
      int y = (middle + 0.5).toInt();
      return (nums[x] + nums[y]) / 2;
    } else {
      int x = (middle - 0.5).toInt();;
      return nums[x].toDouble();
    }
  }
}
```