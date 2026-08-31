# 🟢🔴🟢 Best Approach 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/5608552/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/5608552/)

---

# Problem Description

Given an array of positive integers, the task is to find the sum of all possible odd-length subarrays. An odd-length subarray has a length of 1, 3, 5, and so on.

## Intuition

The problem requires summing up all subarrays of the input array that have an odd length. To solve this, we need to consider every possible subarray, determine its length, and if it's odd, add its sum to the total sum.

## Approach

1. **Initialize Total Sum**:
   - Start with a sum variable initialized to zero.

2. **Generate Subarrays**:
   - Use two nested loops to generate all possible subarrays. The outer loop selects the starting index `i`, and the inner loop selects the ending index `j`.

3. **Check for Odd Length**:
   - For each subarray defined by indices `i` and `j`, check if the subarray length `(j - i + 1)` is odd.

4. **Sum Odd-Length Subarray**:
   - If the subarray length is odd, sum all elements in that subarray and add the sum to the total sum.

5. **Return the Total Sum**:
   - After considering all subarrays, return the total sum.

## Complexity

- **Time complexity**:
  - The time complexity is $$O(n^3)$$ because of the three nested loops: two for generating subarrays and one for summing the elements within each subarray.

- **Space complexity**:
  - The space complexity is $$O(1)$$, as no extra space proportional to the input size is used.

## Example Walkthrough

Consider the example:
- `arr = [1, 2, 3]`

### 1. **Generate Subarrays and Calculate Sum**

- Subarray `[1]` is odd-length: Sum = 1
- Subarray `[1, 2]` is even-length: Skip
- Subarray `[1, 2, 3]` is odd-length: Sum = 1 + 2 + 3 = 6
- Subarray `[2]` is odd-length: Sum = 2
- Subarray `[2, 3]` is even-length: Skip
- Subarray `[3]` is odd-length: Sum = 3

### 2. **Calculate Total Sum**
- Sum of odd-length subarrays: 1 + 6 + 2 + 3 = 12

**Output**: `12`

## Code

```dart
class Solution {
  int sumOddLengthSubarrays(List<int> arr) {
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
      for (int j = i; j < arr.length; j++) {
        if ((j - i) % 2 == 0) {  // Check if the subarray length is odd
          for (int k = i; k <= j; k++) {
            sum += arr[k];  // Sum elements of the odd-length subarray
          }
        }
      }
    }
    return sum;
  }
}
