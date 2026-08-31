# Dart solution

**Author:** brntsv
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/3057568/](https://leetcode.com/problems/range-sum-query-immutable/solutions/3057568/)

---

# Code
```
class NumArray {
  List<int> arr = [];

  NumArray(List<int> nums) {
    List<int> sums = [];
    var currentSum = 0;
    for (var num in nums) {
      currentSum += num;
      sums.add(currentSum);
    }
    arr = sums;
  }

  int sumRange(int left, int right) {
    if (left == 0) {
      return arr[right];
    }
    return arr[right] - arr[left - 1];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = NumArray(nums);
 * int param1 = obj.sumRange(left,right);
 */
```