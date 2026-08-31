# ✅ 100% Solution Explained (Intuition + Code Explanation)

**Author:** dailyleetcoder
**Votes:** 20
**Link:** [https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3256663/](https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3256663/)

---

# Intuition
1, 3, 5,..., 2 * i - 1, ..., 2 * n - 1 = n * n.
1, 3, 5,..., 2 * i - 1, ..., 2 * n - 3 = (n - 1) * (n - 1)

These two arithmetic sequences represent the number of cells on each row of the upper half and lower half of the grid, respectively.

For the first sequence, we start with 1 (which represents the number of cells on the first row of the upper half of the grid) and increment by 2 for each subsequent row. This gives us the sequence:

1, 3, 5, ..., 2n-1

The last term in this sequence (2n-1) represents the number of cells on the last row of the upper half of the grid. If we sum up all the terms in this sequence, we get:

1 + 3 + 5 + ... + 2n-1

This is equivalent to the sum of the first n odd numbers, which is n^2. Therefore, we can represent this sequence as:

1, 3, 5, ..., 2n-1 = n^2

For the second sequence, we start with 1 (which represents the number of cells on the first row of the lower half of the grid) and increment by 2 for each subsequent row. This gives us the sequence:

1, 3, 5, ..., 2n-3

The last term in this sequence (2n-3) represents the number of cells on the last row of the lower half of the grid. If we sum up all the terms in this sequence, we get:

1 + 3 + 5 + ... + 2n-3

This is equivalent to the sum of the first (n-1) odd numbers, which is (n-1)^2. Therefore, we can represent this sequence as:

1, 3, 5, ..., 2n-3 = (n-1)^2

These two sequences together represent the total number of cells on each row of the grid. The sum of the squares of these sequences gives us the total number of cells that will be colored blue after n minutes. Therefore, the provided code calculates the total number of colored cells as:

n^2 + (n-1)^2 

which is the sum of the squares of the two sequences.

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
public:
    long long coloredCells(int n) {
        return (long long)n * n + (long long)(n - 1) * (n - 1);
    }
};
```