# Rust/C++ Standard DP

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4168938/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4168938/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
//Rust
impl Solution {
    pub fn get_words_in_longest_subsequence(n: i32, words: Vec<String>, groups: Vec<i32>) -> Vec<String> {
        let mut dp = vec![1; n as usize];
        let mut prev = vec![0; n as usize];

        for i in 1 .. n as usize {
            for j in 0 .. i {
                if dp[i] >= dp[j] + 1 { continue }
                if groups[i] == groups[j] { continue }
                if Self::check(&words[i], &words[j]) == false { continue }
                prev[i] = j;
                dp[i] = dp[j] + 1;
            }
        }
        let mx = *dp.iter().max().unwrap();
        let mut ret = vec![];
        for i in 0 .. n as usize {
            if dp[i] < mx { continue }
            let mut u = i;
            let mut cnt = dp[i];
            while (cnt > 0) {
                ret.push(words[u].clone());
                u = prev[u];
                cnt -= 1;
            }
            break
        }
        ret.reverse();
        ret
    }

    fn check(s: &String, t: &String) -> bool {
        if s.len() != t.len() { return false }

        let mut cnt = 0;
        let s = (*s).clone().chars().into_iter().collect::<Vec<_>>();
        let t = (*t).clone().chars().into_iter().collect::<Vec<_>>();
        for i in 0 .. s.len() {
            if s[i] != t[i] { cnt += 1; }
        }

        cnt == 1
    }
}
```
~~~
// C++
class Solution {
public:
    vector<string> getWordsInLongestSubsequence(int n, vector<string>& words, vector<int>& groups) {
        vector<int> dp(n, 1), prev(n);
        
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (groups[j] == groups[i] or words[j].size() != words[i].size()) continue;
                int cnt = 0;
                for (int k = 0; k < words[i].size(); ++k) {
                    if (words[j][k] != words[i][k]) cnt += 1;
                }
                if (dp[i] >= dp[j] + 1 or cnt != 1) continue;
                prev[i] = j;
                dp[i] = dp[j] + 1;
            }
        }
        
        vector<string> ret;
        int mx = *max_element(dp.begin(), dp.end());
        for (int i = 0; i < n; ++i) {
            if (dp[i] < mx) continue;
            int u = i, len = dp[i];
            while (len > 0) {
                ret.push_back(words[u]);
                u = prev[u];
                len -= 1;
            }
            break;
        }
        
        if (not ret.empty()) reverse(ret.begin(), ret.end());
        return ret;
    }
};
~~~