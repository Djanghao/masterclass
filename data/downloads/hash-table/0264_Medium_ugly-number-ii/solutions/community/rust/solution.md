# Rust dp

**Author:** davidp918
**Votes:** 2
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/1348535/](https://leetcode.com/problems/ugly-number-ii/solutions/1348535/)

---

Use t2, t3, t5 as pointers as index to previous dp.
```
impl Solution {
     pub fn nth_ugly_number(n: i32) -> i32 {
        let n = n as usize;
        let (mut t2, mut t3, mut t5) = (0, 0, 0);
        let mut dp: Vec<i32> = vec![1; n];

        for i in 1..n {
            dp[i] = *vec![dp[t2] * 2, dp[t3] * 3, dp[t5] * 5]
                .iter()
                .min()
                .unwrap();
            if dp[i] == dp[t2] * 2 {
                t2 += 1;
            }
            if dp[i] == dp[t3] * 3 {
                t3 += 1;
            }
            if dp[i] == dp[t5] * 5 {
                t5 += 1;
            }
        }

        dp[n - 1]
    }
}
```
To clear up a bit
```
impl Solution {
     pub fn nth_ugly_number(n: i32) -> i32 {
        let n = n as usize;
        let mut pointers: Vec<i32> = vec![0, 0, 0];
        let primes: Vec<i32> = vec![2, 3, 5];
        let mut dp: Vec<i32> = vec![1; n];

        for i in 1..n {
            dp[i] = (0..3)
                .map(|x| dp[pointers[x] as usize] * primes[x])
                .min()
                .unwrap();
            for x in 0..3 {
                if dp[i] == dp[pointers[x] as usize] * primes[x] {
                    pointers[x] += 1;
                }
            }
        }

        dp[n - 1]
    }
}
```