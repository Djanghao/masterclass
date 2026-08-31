# Prefix sum

**Author:** AzizKAZ
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4330457/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4330457/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n^2)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
wher $n$ is the number of the chars in the $s$ string.

# Code
```
impl Solution {
    pub fn beautiful_substrings(s: String, k: i32) -> i32 {
        let mut i = 0;
        let mut dp = vec![(0, 0); s.len()];
        
        for c in s.chars() {
            dp[i] = if i == 0 {(0, 0)} else {dp[i - 1]};            
            
            if "aeiou".contains(c) {
                dp[i].0 += 1;
            } else {
                dp[i].1 += 1;    
            }
            
            i += 1;
        }        
        
        let mut t = 0;
        
        for i in 0..dp.len() {
            if dp[i].0 == dp[i].1 && (dp[i].0 * dp[i].1) % k == 0 {
                t += 1;
            }
            
            for j in 0..i {
                let v = dp[i].0 - dp[j].0;
                let c = dp[i].1 - dp[j].1;
                
                if v == c && (v * c) % k == 0 {
                    t += 1;
                }
            }
        }
        
        t
    }
}
```