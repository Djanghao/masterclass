# Solution Using Binary Search & Inclusion-Exclusion Principle

**Author:** ngtban
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5359169/](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5359169/)

---

## Binary Search & Inclusion-Exclusion Principle

Let $c_i$ be the value of the $i$-th coin. Let $A(i, t)$ be the set of all natural numbers divisible by $c_i$ who are all smaller that the target $t$. Then we need to find a minimum $t$ such that the cardinality of $\\bigcup_i^n A(i, t)$ is equal to $k$. **To find $t$, we can use binary search.**

To be able to count $| \\bigcup_i^n A(i, t) |$, where $n$ is the number of coins, we can use the inclusion-exclusion principle:

$$
\\begin{align}
|\\bigcup_i^n A(i, t)| =& \\sum_i^n |A(i, t)| + \\\\
&(-1)^1 \\sum_{i = 1}^n \\sum_{j > i}^n |A(i, t) \\cap A(j, t)| + \\\\
&(-1)^2 \\sum_{i = 1}^n \\sum_{j > i}^n \\sum_{k > j}^n | A(i, t) \\cap A(j, t) \\cap A(k, t) | + \\\\
&\\ldots + \\\\
&(-1)^{n - 1} \\sum \\left|\\bigcap_{i = 1}^n A(i, t) \\right|
\\end{align}
$$

Note that the sum on the right hand side is determined by the cardinalities of the intersections of sets. To be able to figure out how each intersection contribute to the right hand side:

- The cardinality of each intersection is $\\lfloor t / \	ext{lcm} \\rfloor$ where $\	ext{lcm}$ is the least common multiple of all the coins corresponding to the sets participating in the intersection. For example $\	ext{lcm}$ for the intersection $A(0, t) \\cap A(2, t) \\cap A(3, t)$ is equal to $\	ext{lcm}(c_0, c_2, c_3)$.
- The sign corresponding to each intersection could easily be figured out by counting the number of sets that participate in the intersection: if the number of sets that participate in the intersection is even, the sign is negative, otherwise the sign is positive.
- We can represent each intersection in the formula above as a bitmask indicating which $A(i, t)$ participates in an intersection, for example the intersection $A(0, t) \\cup A(2, t)$ could be represented by the bitmask $0101_2$ when $n = 4$.
- Thus we could loop over all masks corresponding to the binary representation of the numbers starting from $1$ and ending in $2^n - 1$ and add the contribution of the intersection corrresponding to the current mask in each loop.

# Code
```
impl Solution {
    pub fn find_kth_smallest(coins: Vec<i32>, k: i32) -> i64 {
        Self::binary_search(&coins, k as i64)
    }

    pub fn binary_search(coins: &[i32], k: i64) -> i64 {
        let max = coins.iter().fold(i32::MIN, |acc, &num| acc.max(num)) as i64;
        let mut right = max * k;
        let mut left = 1;

        while left < right {
            let mid = left + (right - left) / 2;

            if Self::count(coins, mid) < k {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        left
    }

    pub fn count(coins: &[i32], target: i64) -> i64 {
        let n = coins.len();
        let combination_bound = 1u32 << n;

        let mut count = 0i64;
        for combination in 1..combination_bound {
            let mut combination_sign = -1;
            let mut combination_lcm = 1;

            for i in 0..n {
                let indicator = 1 << i;

                if indicator & combination > 0 {
                    combination_lcm = Self::lcm(coins[i] as i64, combination_lcm);
                    combination_sign *= -1;
                }
            }

            count += combination_sign * (target / combination_lcm);
        }

        count
    }

    pub fn gcd(a: i64, b: i64) -> i64 {
        match b {
            0 => a,
            _ => Self::gcd(b, a.rem_euclid(b))
        }
    }

    pub fn lcm(a: i64, b: i64) -> i64 {
        (a / Self::gcd(a, b)) * b
    }
}
```