# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/2229651/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/2229651/)

---

```
impl Solution {
    pub fn maximum_bob_points(num_arrows: i32, alice_arrows: Vec<i32>) -> Vec<i32> {
        let limit = 1 << 12;
        let mut max = 0;
        let mut result = vec![0;12];
        for i in 0..limit {
            let mut temp = 0;
            let mut score = 0;
            let mut memo = vec![0;12];
            for j in 0..12 {
                if i >> j & 1 == 1 {
                    temp += alice_arrows[j]+1;
                    memo[j] = alice_arrows[j]+1;
                    score += j as i32;
                }
            }

            if max < score && temp <= num_arrows {
                max = score;
                result = memo;
            }
        }

        let mut tot = 0;
        for i in 0..12 {
            tot += result[i];
        }
        result[11] += num_arrows - tot;
        result
    }
}
```