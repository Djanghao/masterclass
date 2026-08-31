# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/2996367/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/2996367/)

---

# Code
```
impl Solution {
    pub fn distinct_subseq_ii(s: String) -> i32 {
        let mut end = vec![0; 26];
        let mut res = 0;
        const MOD:i32 = 1_000_000_007;
        for c in s.chars() {
            let added = (res + 1 - end[(c as u8 - b'a') as usize]) % MOD;
            res = (res + added) % MOD;
            end[(c as u8 - b'a') as usize] = (end[(c as u8 - b'a') as usize] + added) % MOD;
        }
        (res + MOD) % MOD
    }
}
```