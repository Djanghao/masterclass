# Rust bitmask DP

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2599219/](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2599219/)

---

~~~
impl Solution {
    pub fn minimum_time(power: Vec<i32>) -> i64 {
        let n = power.len();
        let m = 1 << n;
        let mut dp = vec![-1i64; m];
        
        Self::eval(&mut dp, &power, m - 1)
    }
    
    fn eval(dp: &mut Vec<i64>, power: &Vec<i32>, mask: usize) -> i64 {
        if dp[mask] != -1 { return dp[mask] }
        
        let n = power.len();
        let mut cnt = 0;
        
        for i in 0..n {
            if ((1 << i) & mask) != 0 { cnt += 1; }
        }
        
        dp[mask] = i64::MAX;
        for i in 0..n {
            if ((1 << i) & mask) == 0 { continue }
            let temp = if cnt > 1 { Self::eval(dp, power, mask ^ (1 << i))} else { 0 };
            dp[mask] = dp[mask].min(temp + ((power[i] + cnt - 1) / cnt) as i64);
        }
        
        dp[mask]
    }
}
~~~