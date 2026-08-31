# Rust Solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-balanced-permutations/solutions/6022809/](https://leetcode.com/problems/count-number-of-balanced-permutations/solutions/6022809/)

---

# Intuition
The problem involves counting the number of balanced permutations of a string of digits, where a balanced permutation is one where the sum of digits in the even positions equals the sum of digits in the odd positions. Given the constraints, brute force permutations would be inefficient. We need to think of a more efficient approach that leverages combinatorial counting and dynamic programming.
<!-- Describe your first thoughts on how to solve this problem. -->

# Complexity
- Time complexity: O(n * m * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n * m * n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where n is the length of the string and m is the sum of the digits

# Code
```rust []
use std::cmp::min;
const M: i64 = 1_000_000_007;

impl Solution {
    pub fn count_balanced_permutations(num: String) -> i32 {
        let mut freq_arr = vec![0; 10];
        let mut total_sum = 0;
        for ch in num.chars() {
            let digit = ch.to_digit(10).unwrap() as usize;
            freq_arr[digit] += 1;
            total_sum += digit;
        }

        let mut total_even_space = num.len() / 2;
        let mut total_odd_space = num.len() / 2;
        if num.len() % 2 == 1 {
            total_even_space += 1;
        }

        let mut pref_sum = vec![0; 11];
        for i in 1..=10 {
            pref_sum[i] = freq_arr[i - 1] + pref_sum[i - 1];
        }

        let n = num.len();
        let mut fact_arr = vec![1; n + 1];
        let mut rev_fact_arr = vec![1; n + 1];
        for i in 1..=n {
            fact_arr[i] = (fact_arr[i - 1] * i as i64) % M;
            rev_fact_arr[i] = Self::fast_power(fact_arr[i], M - 2);
        }

        let mut memo = vec![vec![vec![-1; n + 1]; total_sum + 1]; 10];

        Solution::dp(
            0,
            0,
            0,
            &freq_arr,
            total_even_space,
            total_odd_space,
            &pref_sum,
            &fact_arr,
            &rev_fact_arr,
            &mut memo,
            total_sum,
        ) as i32
    }

    fn dp(
        num: usize,
        even_sum: usize,
        even_len: usize,
        freq_arr: &[usize],
        total_even_space: usize,
        total_odd_space: usize,
        pref_sum: &[usize],
        fact_arr: &[i64],
        rev_fact_arr: &[i64],
        memo: &mut Vec<Vec<Vec<i64>>>,
        total_sum: usize,
    ) -> i64 {
        if num == 10 {
            if even_sum == (total_sum - even_sum) {
                return 1;
            }
            return 0;
        }

        if memo[num][even_sum][even_len] == -1 {
            let count = freq_arr[num];
            let even_spaces = total_even_space - even_len;
            let odd_spaces = total_odd_space - (pref_sum[num] - even_len);
            let mut ans = 0;
            for i in 0..=min(count, even_spaces) {
                if count - i > odd_spaces {
                    continue;
                }
                ans = (ans + ((Self::ncr(even_spaces, i, &fact_arr, &rev_fact_arr) *
                    Self::ncr(odd_spaces, count - i, &fact_arr, &rev_fact_arr)) % M)
                    * Self::dp(
                        num + 1,
                        even_sum + num * i,
                        even_len + i,
                        freq_arr,
                        total_even_space,
                        total_odd_space,
                        pref_sum,
                        fact_arr,
                        rev_fact_arr,
                        memo,
                        total_sum,
                    ) % M) % M;
            }
            memo[num][even_sum][even_len] = ans;
        }
        memo[num][even_sum][even_len]
    }

    fn ncr(n: usize, r: usize, fact_arr: &[i64], rev_fact_arr: &[i64]) -> i64 {
        if r > n {
            return 0;
        }
        return (fact_arr[n] * rev_fact_arr[n - r] % M * rev_fact_arr[r] % M) % M;
    }

    fn fast_power(a: i64, b: i64) -> i64 {
        if b == 0 {
            return 1;
        }
        let half_power = Self::fast_power(a, b / 2);
        if b % 2 == 0 {
            return (half_power * half_power) % M;
        }
        return (a * (half_power * half_power % M)) % M;
    }
}
```