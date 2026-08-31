# 🟢🔴🟢 Beats 100.00% 👏 | | The Best Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5586794/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5586794/)

---

# Intuition
The task is to calculate the sum of elements within a specified range of sorted subarray sums. The challenge involves first determining all possible subarray sums, sorting them, and then summing a particular segment. This approach leverages sorting for easy range sum extraction.

# Approach
1. **Generate All Subarray Sums**:
   - For each index `i` in the array `nums`, iterate over all subsequent indices `j` to calculate the sum of the subarray `nums[i...j]`.
   - Store these sums in a list `array`.

2. **Sort the List of Sums**:
   - Sort the list `array` containing all subarray sums.

3. **Calculate the Range Sum**:
   - Identify the elements from the `left` to `right` indices in the sorted list (adjusted for 0-based indexing).
   - Sum these elements and apply modulo \\(10^9 + 7\\) to handle large numbers.

# Complexity
- **Time complexity**:
  - Generating subarray sums: $$O(n^2)$$, where `n` is the number of elements in `nums`.
  - Sorting the sums: $$O(n^2 \\log n^2)$$.
  - Overall: $$O(n^2 \\log n^2)$$.

- **Space complexity**:
  - $$O(n^2)$$ due to storing the sums in `array`.

# Example Walkthrough
Given `nums = [1, 2, 3, 4]`, `n = 4`, `left = 1`, and `right = 5`.

### 1. **Generate All Subarray Sums**

Start with an empty list `array`.

- For `i = 0`:
  - `j = 0`: Subarray `[1]` has sum `1`. `array = [1]`.
  - `j = 1`: Subarray `[1, 2]` has sum `3`. `array = [1, 3]`.
  - `j = 2`: Subarray `[1, 2, 3]` has sum `6`. `array = [1, 3, 6]`.
  - `j = 3`: Subarray `[1, 2, 3, 4]` has sum `10`. `array = [1, 3, 6, 10]`.

- For `i = 1`:
  - `j = 1`: Subarray `[2]` has sum `2`. `array = [1, 3, 6, 10, 2]`.
  - `j = 2`: Subarray `[2, 3]` has sum `5`. `array = [1, 3, 6, 10, 2, 5]`.
  - `j = 3`: Subarray `[2, 3, 4]` has sum `9`. `array = [1, 3, 6, 10, 2, 5, 9]`.

- For `i = 2`:
  - `j = 2`: Subarray `[3]` has sum `3`. `array = [1, 3, 6, 10, 2, 5, 9, 3]`.
  - `j = 3`: Subarray `[3, 4]` has sum `7`. `array = [1, 3, 6, 10, 2, 5, 9, 3, 7]`.

- For `i = 3`:
  - `j = 3`: Subarray `[4]` has sum `4`. `array = [1, 3, 6, 10, 2, 5, 9, 3, 7, 4]`.

**Generated List of Sums**: `[1, 3, 6, 10, 2, 5, 9, 3, 7, 4]`.

### 2. **Sort the List of Sums**

**Sorted List**: `[1, 2, 3, 3, 4, 5, 6, 7, 9, 10]`.

### 3. **Calculate the Range Sum**

We need the sum of elements from the `left` to `right` indices, which correspond to 1-based indices `1` to `5`:

- Elements in this range (adjusted to 0-based): `1, 2, 3, 3, 4`.

**Sum Calculation**:
- \\(1 + 2 + 3 + 3 + 4 = 13\\)

Thus, the sum of the subarray sums from the 1st to 5th smallest is `13`.

**Modulo Operation**:
- Since `13` is already smaller than \\(10^9 + 7\\), the result remains `13`.

# Code
```dart
class Solution {
  int rangeSum(List<int> nums, int n, int left, int right) {
    List<int> array = [];
    for (int i = 0; i < n; i++) {
      int sum = 0;
      for (int j = i; j < n; j++) {
        sum += nums[j];
        array.add(sum);
      }
    } 
    array.sort();
    int res = 0;
    for (int i = left - 1; i < right; i++) {
      res += array[i]; 
    }
    return res % (pow(10, 9).toInt() + 7);
  }
}
