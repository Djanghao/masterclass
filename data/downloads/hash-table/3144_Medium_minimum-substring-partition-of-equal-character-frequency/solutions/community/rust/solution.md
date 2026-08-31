# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5150673/](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5150673/)

---


```
impl Solution {
    pub fn minimum_substrings_in_partition(s: String) -> i32 {
        let mut dp = vec![-1; 1001];
        Self::helper(&mut dp, s.len() as i32 - 1, &s)
    }

    fn helper(dp: &mut Vec<i32>, i: i32, s: &String) -> i32 {
        if i < 0 {
            return 0;
        }

        if dp[i as usize] != -1 {
            return dp[i as usize];
        }

        let mut freq = [0; 26];
        let mut res = 1001;
        for j in (0..=i).rev() {
            freq[s.as_bytes()[j as usize] as usize - b'a' as usize] += 1;
            let mut mini = 1001;
            let mut maxi = 0;
            for &freq_k in freq.iter().take(26) {
                if freq_k > 0 {
                    mini = mini.min(freq_k);
                    maxi = maxi.max(freq_k);
                }
            }

            if mini == maxi {
                res = res.min(1 + Self::helper(dp, j - 1, s));
            }
        }

        dp[i as usize] = res;
        res
    }
}
```