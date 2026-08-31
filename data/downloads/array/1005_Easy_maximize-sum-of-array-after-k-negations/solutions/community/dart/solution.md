# 🟢🔴🟢 Most Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/5839699/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/5839699/)

---

# Intuition
The key idea is to maximize the sum of the list by flipping the sign of certain elements. Since flipping the smallest (most negative) number will have the largest positive impact on the sum, we want to repeatedly flip the smallest number after each negation. Sorting the list and flipping the smallest element each time ensures that we maximize the sum as efficiently as possible.

# Approach
1. Sort the list so that the smallest element is at the front.
2. For each negation (up to `k` times), flip the smallest element in the list by multiplying it by `-1`.
3. After each flip, re-sort the list to ensure the smallest element is again at the front, ready to be flipped next.
4. After all the negations are performed, compute and return the sum of the list.

# Example Walkthrough
### Example 1:
**Input**:  
`nums = [4, 2, 3]`, `k = 1`

1. Sort the list: `[2, 3, 4]`
2. Flip the smallest element (2):  
   After negation, `nums = [-2, 3, 4]`
3. The sum is `-2 + 3 + 4 = 5`.

**Output**: `5`

### Example 2:
**Input**:  
`nums = [3, -1, 0, 2]`, `k = 3`

1. Sort the list: `[-1, 0, 2, 3]`
2. Flip the smallest element (-1):  
   After negation, `nums = [1, 0, 2, 3]`
3. Sort again: `[0, 1, 2, 3]`
4. Flip the smallest element (0):  
   After negation, no change as flipping 0 has no effect.
5. Perform the third flip:  
   Again, flipping the smallest (0) has no effect.

**Output**: `1 + 0 + 2 + 3 = 6`

# Complexity
- **Time Complexity**:  
  $$O(k \\cdot n \\log n)$$  
  Each iteration of the loop sorts the list, which takes \\(O(n \\log n)\\) time. Since we perform `k` iterations, the total complexity is \\(O(k \\cdot n \\log n)\\).

- **Space Complexity**:  
  $$O(n)$$  
  The sorting and the list itself require space proportional to the number of elements, which is \\(O(n)\\).

# Code
```dart
class Solution {
  int largestSumAfterKNegations(List<int> nums, int k) {
    for (int i = 0; i < k; i++) {    
      nums.sort();
      nums.first = nums.first * (-1);
    }
    return nums.fold(0, (a, b) => a + b);
  }
}
