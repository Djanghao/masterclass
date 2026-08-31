# Rust solution without overflow checks | 100%

**Author:** MinnDev
**Votes:** 10
**Link:** [https://leetcode.com/problems/sqrtx/solutions/2866992/](https://leetcode.com/problems/sqrtx/solutions/2866992/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use a binary search algorithm that checks perfect squares and comparing them to $x$. For this we need to define a lower and upper bound, which would sensibly be at least $\\bigl[0, x\\bigr]$. However, we can do a little better and get a way smaller search interval.


# Approach
<!-- Describe your approach to solving the problem. -->

We know that the square root can at most be $x / 2$ so that would be the most intuitive upper bound. However, using $x/2$ can quickly result in overflows if $x$ is too large, which is the case in some of the test cases. To solve this problem, we can define a maximum upper bound by using the maximum integer root $\\lfloor\\sqrt{2^{31}-1}\\rfloor = 46340$.

To be optimal, we then choose our upper bound as $\	ext{upper} = \\min\\{x/2, 46340\\}$. We end up with a binary search on the interval $\\bigl[2, \\min\\{x/2, 46340\\}\\bigr]$.

# Complexity
- Time complexity: $$O(\\log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::cmp::Ordering;

impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        if x == 0 { // non-negative => 0 is allowed
            return 0;
        }

        let mut lower = 2;
        let mut higher = 46340.min(x / 2); // max possible root sqrt(i32::MAX)

        // Boundary conditions for optimization

        if x <= 3 {
            return 1;
        }

        if x >= higher * higher {
            return higher;
        }

        // Binary search the correct perfect square

        while higher - lower > 1 {
            let mid = (higher + lower) / 2;
            let pow = mid * mid;
            match pow.cmp(&x) {
                Ordering::Less => {
                    lower = mid;
                }
                Ordering::Greater => {
                    higher = mid;
                }
                _ => {
                    return mid;
                }
            }
        }

        // In the edge case that the number is between 2 values,
        // we take the lower which is equivalent to taking the floored mean
        lower
    }
}
```