# Simple and Easy Solution | ✅Beats 100% || C++| Java | Python | JavaScript

**Author:** BijoySingh7
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-matrix-sum/solutions/6077090/](https://leetcode.com/problems/maximum-matrix-sum/solutions/6077090/)

---


---
# \u2B06\uFE0FUpvote if it helps \u2B06\uFE0F

## Connect with me on Linkedin [Bijoy Sing](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/).

###### *Solution in C++, Python, Java, and JavaScript*

```cpp []
class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        int neg = 0;
        long long minVal = LLONG_MAX;
        long long sum = 0;

        for (const auto& vec : matrix) {
            for (const auto& val : vec) {
                if (val < 0) {
                    neg++;
                }
                sum += abs(val);
                minVal = min(minVal, (long long)abs(val));
            }
        }

        if (neg % 2 == 1) {
            sum -= 2LL * minVal;
        }

        return sum;
    }
};
```

```python []
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        neg = 0
        minVal = float('inf')
        sum_abs = 0

        for row in matrix:
            for val in row:
                if val < 0:
                    neg += 1
                sum_abs += abs(val)
                minVal = min(minVal, abs(val))

        if neg % 2 == 1:
            sum_abs -= 2 * minVal

        return sum_abs
```

```java []
class Solution {
    public long maxMatrixSum(int[][] matrix) {
        int neg = 0;
        long sum = 0;
        long minVal = Long.MAX_VALUE;

        for (int[] row : matrix) {
            for (int val : row) {
                if (val < 0) {
                    neg++;
                }
                sum += Math.abs(val);
                minVal = Math.min(minVal, Math.abs(val));
            }
        }

        if (neg % 2 == 1) {
            sum -= 2 * minVal;
        }

        return sum;
    }
}
```

```javascript []
class Solution {
    maxMatrixSum(matrix) {
        let neg = 0;
        let sum = 0;
        let minVal = Infinity;

        for (let row of matrix) {
            for (let val of row) {
                if (val < 0) {
                    neg++;
                }
                sum += Math.abs(val);
                minVal = Math.min(minVal, Math.abs(val));
            }
        }

        if (neg % 2 === 1) {
            sum -= 2 * minVal;
        }

        return sum;
    }
}
```

---

### Explanation:
1. **Variable Initialization**:
   - `neg`: Tracks the number of negative elements.
   - `sum`: Stores the total sum of absolute values.
   - `minVal`: Tracks the smallest absolute value.

2. **Matrix Traversal**:
   - Loop through each element in the matrix.
   - Count negatives (`neg`) and calculate the sum of absolute values (`sum`).
   - Update `minVal` with the smallest absolute value.

3. **Odd Negatives Adjustment**:
   - If the count of negatives is odd, subtract twice the smallest absolute value from the sum.

4. **Return Result**:
   - Return the adjusted sum as the result.

---

# Approach
- **Step 1**: Traverse the matrix to calculate `neg`, `sum`, and `minVal`.
- **Step 2**: Adjust the `sum` if `neg` is odd.
- **Step 3**: Return the result.

---

# Complexity
- **Time Complexity**: \\(O(n \	imes m)\\), where \\(n\\) is the number of rows and \\(m\\) is the number of columns in the matrix.
- **Space Complexity**: \\(O(1)\\), as no additional space is used other than variables.

---

### *If you have any questions or need further clarification, feel free to drop a comment! \uD83D\uDE0A*