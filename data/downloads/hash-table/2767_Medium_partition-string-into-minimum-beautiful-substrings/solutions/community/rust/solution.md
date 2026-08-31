# Rust DP

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3738517/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3738517/)

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
impl Solution {
    pub fn minimum_beautiful_substrings(s: String) -> i32 {
        let s = s.chars().into_iter().collect::<Vec<char>>();
        let n = s.len();
        let mut dp = vec![i32::MAX; n + 1];

        dp[n] = 0;
        for i in (0 .. n).rev() {
            if dp[i + 1] == i32::MAX { continue }

            let mut temp = 0;
            for k in (0 ..= i).rev() {
                if s[k] == '0' { continue }
                temp += 1 << (i - k);
                if Self::check(temp) { dp[k] = dp[k].min(dp[i + 1] + 1);}
            }
        }
        if dp[0] == i32::MAX { -1 } else { dp[0] }
    }

    fn check(a: i32) -> bool {
        let mut a = a;
        while a > 1 && a % 5 == 0 { a /= 5; }
        a == 1
    }
}
```