# Rust - Combinatorics - O(N) time, O(1) space (0ms, beats 100%)

**Author:** kislovs
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/4002574/](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/4002574/)

---

# Approach
1. Calculate frequencies.
2. Sort descending.
3. For each distinct `frequency` count `repetitions`.
4. If `repetitions` is more than remaining slots `k`- multiply result with combinations (choose `k` from it) and set `repetitions` as `k`.
5. Multiply result by `frequency` for `repetitions` times.
6. If `repetitions >= k`, return result.
7. Otherwise, slice `frequencies` and subtract `repetitions` from

# Complexity
- **Time complexity**: $$O(N)$$, we only need to iterate original string once + no more than const 26 iterations for rest of the work.
- **Space complexity**: $$O(1)$$, we only need constant array.

# Code
```
impl Solution {
    const MOD: i64 = 1_000_000_000 + 7;

    pub fn count_k_subsequences_with_max_beauty(s: String, k: i32) -> i32 {
        let mut frequencies = [0; 27];
        for symbol in s.into_bytes() {
            frequencies[(symbol - b'a') as usize] += 1;
        }

        frequencies.sort_by(|a, b| a.cmp(b).reverse());

        let mut frequencies = frequencies.as_slice();
        let mut k = k as usize;
        let mut result = 1i64;

        while frequencies[0] > 0 {
            let frequency = frequencies[0];
            let mut repeat = frequencies.iter().take_while(|&&f| f == frequency).count();

            if repeat > k {
                let m = (repeat - k) as i64;
                let combinations = (1..=k as i64).fold(1, |acc, i| acc * (m + i) / i);
                result = (result * combinations) % Self::MOD;
                repeat = k;
            }

            for _ in 0..repeat {
                result = (result * frequency as i64) % Self::MOD;
            }

            if repeat >= k {
                return result as i32;
            }

            frequencies = &frequencies[repeat..];
            k -= repeat;
        }

        0
    }
}
```