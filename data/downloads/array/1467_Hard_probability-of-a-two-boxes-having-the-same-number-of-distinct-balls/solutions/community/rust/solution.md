# dfs with nCr table

**Author:** aaron1april
**Votes:** 0
**Link:** [https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/4480248/](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/4480248/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

// Problem 1467
impl Solution {
    pub fn get_probability(balls: Vec<i32>) -> f64 {
        let n = balls.iter().sum::<i32>() / 2;
        let mut balls = balls.into_iter().map(|s| (s, s)).collect::<Vec<_>>();

        balls.iter_mut().rev().fold(0, |acc, (count, remained)| {
            // the second item let us know how many balls remaiend after this kind.
            // which helps we determine how many balls must be used this pick.
            *remained = acc;
            acc + *count
        });

        // Recompute the ncr table
        const MAX_PER_COLOR: usize = 6 + 1;
        let ncr = {
            let mut result = vec![vec![0i32; MAX_PER_COLOR]; MAX_PER_COLOR];

            for n in 1..MAX_PER_COLOR {
                result[n][0] = 1;
                result[n][n] = 1;

                for r in 1..n {
                    result[n][r] = result[n - 1][r - 1] + result[n - 1][r]
                }
            }

            result
        };
        let mut probability = (0i64, 0i64);

        // Say, balls = [1,2,3]
        // All combinations of the left hand side is:
        // a. C(1,1) C(2,2) C(3,0), pick 1 out of balls[0], 2 out of balls[1], and 3 out of balls[2]
        // b. C(1,1) C(2,1) C(3,1)
        // c. C(1,1) C(2,0) C(3,2)
        // d. C(1,0) C(2,2) C(3,1)
        // e. C(1,0) C(2,1) C(3,2)
        // f. C(1,0) C(2,0) C(3,3)
        // the sum of a..f is the denominator = 20
        // Only (c) and (d) gives the equal number of distict balls.
        // which their sum is the numerator = 6
        // so probability = 6/20 = 0.3

        fn dfs(
            balls: &[(i32, i32)],
            ncr: &Vec<Vec<i32>>,
            probability: &mut (i64, i64),
            n: i32,
            balance: i8,
            count: i64,
        ) {
            if balls.is_empty() {
                let (num, den) = probability;

                *den += count;

                if balance == 0 {
                    *num += count;
                }

                return;
            }

            let (available, remained) = balls[0];
            let start = (n - remained).max(0);
            let stop = available.min(n); // inclusive

            for picked in start..=stop {
                let new_balance = if picked == 0 {
                    balance - 1
                } else if picked == available {
                    balance + 1
                } else {
                    balance
                };

                let new_count = count * ncr[available as usize][picked as usize] as i64;

                dfs(
                    &balls[1..],
                    ncr,
                    probability,
                    n - picked,
                    new_balance,
                    new_count,
                );
            }
        }

        dfs(&balls[..], &ncr, &mut probability, n, 0, 1);

        probability.0 as f64 / probability.1 as f64
    }
}

```