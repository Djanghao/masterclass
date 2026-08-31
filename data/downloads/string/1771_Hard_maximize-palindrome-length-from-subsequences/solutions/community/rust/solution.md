# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/3213834/](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/3213834/)

---

# Code
```
impl Solution {
    pub fn longest_palindrome(word1: String, word2: String) -> i32 {
        let mut dp = vec![vec![-1; 2002]; 2002];
        let s = word1.clone() + &word2;
        let s = s.chars().collect::<Vec<char>>();
        let n = s.len();
        Solution::lcs(&s, 0, n - 1, &mut dp);
        let mut mp = std::collections::HashMap::new();
        for (i, c) in word1.chars().enumerate() {
            mp.entry(c).or_insert(i as i32);
        }
        let mut ans = 0;
        let mut m = std::collections::HashMap::new();
        let word2 = word2.chars().rev().collect::<Vec<_>>();
        for (i, c) in word2.iter().enumerate() {
            if mp.contains_key(&c) && !m.contains_key(&c) {
                m.insert(c, true);
                let id1 = mp[&c] + 1;
                let id2 = n as i32 - i as i32 - 2;
                if id1 >= 0 && id2 >= 0 {
                    ans = ans.max(2 + dp[id1 as usize][id2 as usize]);
                }
            }
        }
        ans
    }

    fn lcs(s: &[char], i: usize, j: usize, dp: &mut Vec<Vec<i32>>) -> i32 {
        if i > j {
            dp[i][j] = 0;
            return 0;
        }
        if i == j {
            dp[i][j] = 1;
            return 1;
        }
        if dp[i][j] != -1 {
            return dp[i][j];
        }
        if s[i] == s[j] {
            let v = 2 + Solution::lcs(s, i + 1, j - 1, dp);
            dp[i][j] = v;
            return v;
        }
        let v1 = Solution::lcs(s, i + 1, j, dp);
        let v2 = Solution::lcs(s, i, j - 1, dp);
        dp[i][j] = v1.max(v2);
        dp[i][j]
    }
}
```