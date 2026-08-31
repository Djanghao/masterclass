# Bottom-Up DP O(n) memory in Rust

**Author:** ustinovas
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3422585/](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3422585/)

---

# Complexity
- Time complexity:
$$O(k\\cdot n + m\\cdot (n-m))$$, where $$k$$ is number of words, $$n$$ is word length, and $$m$$ is target length.

- Space complexity:
$$O(27\\cdot n) = O(n)$$, where $$n$$ is word length, as we store character counts and dp arrays.

# Code
```
impl Solution {
    pub fn num_ways(words: Vec<String>, target: String) -> i32 {
        const MOD:i64 = 1_000_000_007;
        let n = words[0].len();
        let counts = words.iter().fold(vec![[0; 26]; n], |mut counts, w| {
            for (i, c) in w.bytes().enumerate() {
                let c = (c - b'a') as usize;
                counts[i][c] += 1;
            }
            counts
        });
        let m = target.len();
        let mut dp = vec![1; n+1];
        for (ti, c) in target.bytes().enumerate().rev() {
            let c = (c - b'a') as usize;
            let last = n - m + ti;
            let mut num_ways_for_tail = dp[last+1];
            for i in (ti..=last).rev() {
                let num_ways_not_taking_c = if i==last { 0 } else { dp[i+1] };
                let num_ways_taking_c = counts[i][c] * num_ways_for_tail;
                num_ways_for_tail = dp[i];
                dp[i] = (num_ways_not_taking_c + num_ways_taking_c) % MOD;
            }
        }

        dp[0] as i32
    }
}
```