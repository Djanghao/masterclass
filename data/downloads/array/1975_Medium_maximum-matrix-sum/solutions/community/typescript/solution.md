# (Rust | Typescript) Easy Solution Beats 100% EXPLAINED ✅ | Greedy Intuition

**Author:** deleted_user
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-matrix-sum/solutions/6077670/](https://leetcode.com/problems/maximum-matrix-sum/solutions/6077670/)

---

![image.png](./images/0.png)

# Intuition
From the problem statement and given examples, we can conclude an intuition that every matrix element can be made positive if the number of negative elements in the initial matrix is even. If it's odd, then we can make the smallest element negative to maximize the sum.

# Approach
First we initialize 3 variables, `sum`(for storing the sum of elements of the matrix), `min`(for storing the smallest element), and `neg_count`(for storing the frequency of negative elements).

Navigate through the matrix. Each time we go through an element,
- We add its absolute value to `sum`.
- Increment `neg_count` if it's a negative number.
- And update `min` if it's smaller than min.

After traversing the matrix:
- We check if `neg_count` is even, if yes then just return sum without adding anything.
- If `neg_count` is odd, then we subtract 2 times the minimum value from the sum, and return the resultant value.

Boom! We solved the problem!

# Complexity
- Time complexity: $$O(n^2)$$
As we're traversing through each element.

- Space complexity: $$O(1)$$
Since we're not utilizing any additional space.

![Upvote Me Please!](./images/1.png)

# Code
```rust []
use std::f64::INFINITY;

impl Solution {
    pub fn max_matrix_sum(matrix: Vec<Vec<i32>>) -> i64 {
        let mut sum = 0 as i64;
        let mut min = INFINITY as i64;
        let mut neg_count = 0;

        for row in matrix {
            for elem in row {
                sum += elem.abs() as i64;
                if elem < 0 { neg_count += 1 }
                min = *[elem.abs() as i64, min].iter().min().unwrap();
            }
        }

        sum + {if neg_count%2 == 0 { 0 as i64 } else { -2 * min }}
    }
}
```
```typescript []
function maxMatrixSum(matrix: number[][]): number {
    let min = Infinity;
    let negCount = 0;
    let sum = 0;
    
    matrix.forEach((row) =>
        row.forEach((elem) => {
            min = Math.min(Math.abs(elem), min);
            if(elem < 0) negCount += 1;
            sum += Math.abs(elem)
        })
    );

    return sum + (negCount%2===0?0:-2*min)
};
```