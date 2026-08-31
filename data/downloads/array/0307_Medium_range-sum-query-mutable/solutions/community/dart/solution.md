# [Dart] - Simple solution

**Author:** karp_in_sky
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-mutable/solutions/5870661/](https://leetcode.com/problems/range-sum-query-mutable/solutions/5870661/)

---


# Code
```dart []
class NumArray {
  List<int> _array = [];

  NumArray(List<int> nums) {
    _array = nums;
  }

  void update(int index, int val) {
    _array[index] = val;
  }

  int sumRange(int left, int right) {
    int result = 0;
    for (int i = left; i <= right; i++) {
      result += _array[i];
    }
    return result;
  }
}
```