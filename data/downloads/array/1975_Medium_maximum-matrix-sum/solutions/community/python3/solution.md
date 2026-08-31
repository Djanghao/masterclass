# Python | Greedy Pattern

**Author:** Khosiyat
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-matrix-sum/solutions/6077011/](https://leetcode.com/problems/maximum-matrix-sum/solutions/6077011/)

---

[see the Successfully Accepted Submission](https://leetcode.com/problems/maximum-matrix-sum/submissions/1461238698/?envType=daily-question&envId=2024-11-24)

# Code
```python3 []
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        total_sum = 0
        negative_count = 0
        min_abs_value = float('inf')
        
        for row in matrix:
            for value in row:
                total_sum += abs(value)
                if value < 0:
                    negative_count += 1
                min_abs_value = min(min_abs_value, abs(value))
        
        # If the count of negative numbers is odd, subtract twice the smallest absolute value
        if negative_count % 2 == 1:
            total_sum -= 2 * min_abs_value
        
        return total_sum

```

# Key Observations

### Effect of Flipping Signs:
- Multiplying two adjacent elements by \\(-1\\) changes their signs, but their absolute values remain the same.

### Matrix Transformation:
- The goal is to minimize the number of negative elements. However, if the number of negatives is odd, one negative element will remain. Thus, the **minimum absolute value in the matrix** is critical, as it may need to remain negative.

### Sum Calculation:
1. Compute the total absolute sum of the matrix.
2. If there is an odd number of negative values, subtract twice the minimum absolute value to account for the remaining negative element.

---

# Plan

1. Compute the total sum of the absolute values of all elements in the matrix.
2. Count the number of negative elements.
3. Find the smallest absolute value in the matrix.
4. If the number of negative elements is odd, subtract twice the smallest absolute value from the total sum.

---

# Explanation of the Code

### `total_sum`:
- Keeps track of the sum of absolute values of all elements.

### `negative_count`:
- Counts the number of negative elements in the matrix.

### `min_abs_value`:
- Tracks the smallest absolute value, which is critical when handling odd negatives.

### Final Adjustment:
- If the number of negatives is odd, we adjust the total sum by subtracting twice the smallest absolute value to account for the unchangeable negative.

---

# Complexity

### Time Complexity:
- \\(O(n^2)\\), as we traverse the entire matrix once.

### Space Complexity:
- \\(O(1)\\), as we only use scalar variables for computation.



![image](./images/0.jpeg)