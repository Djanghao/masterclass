# Rust solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5886426/](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5886426/)

---

# Intuition
To solve the problem, we need to determine how many pairs of numbers from the input list have a specific GCD, as indicated by the queries. We can leverage the properties of divisors and the relationship between GCDs and divisibility. The idea is to count how many numbers can be associated with each potential GCD.

# Approach
1. **Count Divisors**: For each number in the input list, iterate through its divisors. For each divisor, increment a count indicating how many numbers in the list are divisible by that divisor.

2. **Calculate Pairs**: Using the count of divisors, calculate how many pairs of numbers share each GCD using the combinatorial formula \\(nC2\\), which gives the number of ways to choose 2 items from \\(n\\) items.

3. **Dynamic Programming**: Adjust the pair counts by subtracting counts of pairs that can also be accounted for by multiples of the current GCD.

4. **Cumulative Sums**: Prepare a cumulative sum of valid GCD pairs for efficient query answering.

5. **Binary Search**: For each query, use binary search on the cumulative sums to find the appropriate GCD value that corresponds to the given query.

# Complexity
- **Time complexity**: \\(O(n sqrt{m} + k log n)\\), where \\(n\\) is the number of elements in `nums`, \\(m\\) is the maximum value in `nums`, and \\(k\\) is the number of queries. The \\(O(n sqrt{m})\\) term comes from counting divisors, and the \\(k log n\\) term comes from performing binary searches for each query.

- **Space complexity**: \\(O(m)\\) for storing the counts and pair values, where \\(m\\) is the maximum value in `nums`.

# Code
```rust []
use std::cmp::Ordering;

impl Solution {
    pub fn gcd_values(nums: Vec<i32>, queries: Vec<i64>) -> Vec<i32> {
        let max_value = *nums.iter().max().unwrap_or(&0);
        let mut count = vec![0; (max_value + 20) as usize];

        for &n in &nums {
            let mut x = 1;
            while x * x <= n {
                if n % x == 0 {
                    count[x as usize] += 1;
                    if x * x != n {
                        count[(n / x) as usize] += 1;
                    }
                }
                x += 1;
            }
        }

        let mut dp = vec![0; (max_value + 1) as usize];
        for i in (1..=max_value).rev() {
            dp[i as usize] = count[i as usize] * (count[i as usize] - 1) / 2; // nC2
            let mut j = 2;
            while i * j <= max_value {
                dp[i as usize] -= dp[(i * j) as usize];
                j += 1;
            }
        }

        let gcds: Vec<i32> = (1..=max_value)
            .filter(|&i| dp[i as usize] > 0)
            .collect();
        let sm: Vec<i64> = gcds.iter()
            .map(|&i| dp[i as usize])
            .scan(0, |acc, val| {
                *acc += val;
                Some(*acc)
            })
            .collect();

        let mut out = Vec::with_capacity(queries.len());
        for &q in &queries {
            let target = q + 1;
            let index = sm.binary_search(&target).unwrap_or_else(|e| e);
            out.push(gcds[index]);
        }
        
        out
    }
}
```