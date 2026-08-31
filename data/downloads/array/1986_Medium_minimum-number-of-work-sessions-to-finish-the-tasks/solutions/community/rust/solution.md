# [Rust] DP + Bitmask

**Author:** bovinovain
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1889904/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1889904/)

---

The constraint is small, reminding one to use bitmask. 
First, pre-calculate the sum of all possible combinations. Then, for each mask, check its submask that can be finished within one session. 
```
const INF:i32 = 15;
impl Solution {
    pub fn min_sessions(mut tasks: Vec<i32>, session_time: i32) -> i32 {
        let n = tasks.len();
        let mut s = vec![0;1<<n];
        for mask in 0..1<<n{
            let mut cur = 0;
            for i in 0..n{
                if (mask >> i) & 1 == 1{
                    cur += tasks[i];
                }
            }
            s[mask] = cur;
        }
        let mut memo = vec![INF;1<<n];
        memo[0] = 0;
        fn dp(mask:usize,s:&Vec<i32>,session_time:i32,memo:&mut Vec<i32>) -> i32{
            if memo[mask] != INF{
                return memo[mask];
            }
            let mut cur = mask;
            let mut res = INF;
            while cur != 0{
                if s[cur] <= session_time{
                    res = res.min(1 + dp(mask ^cur,s,session_time,memo));
                }
                cur = (cur - 1) & mask;
            }
            memo[mask]  = res;
            res
        }
        dp( (1<<n) - 1,&s,session_time,&mut memo )
    }
}

```