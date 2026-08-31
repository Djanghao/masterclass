# O(n) dp, just reverse iterate

**Author:** asherlau
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/5637877/](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/5637877/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
reversly iterate the array, if it is 0, we know, it is invalid, but can contribute to later 1's subsequences, so we store the amount of ending 0, subsequnces
if it is 1, we use previous n0 and n1 subsequence and plus 1, because the unique 1 <- s[i], it can be later contribute or as single unique character. 
we only return the result that start with 1, so return n0, and if there is single 0, we add 1. 

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
    pub fn number_of_unique_good_subsequences(binary: String) -> i32 {
        //dp[i][0] <- the number of subsequence start by 0 at i
        //dp[i][1] <- the number of subsequence start by 1 at i
        //dp[i][1] = dp[i + 1][0] + dp[i + 1][1]
        //dp[i][0] = dp[i + 1][0] + dp[i + 1][1]
        let n = binary.len();
        let binary = binary.as_bytes();
        let mut has0 = 0;
        let mut n0 = 0;
        let mut n1 = 0;
        let m = 1e9 as i32 + 7;
        for i in (0..n).rev(){
            if binary[i] == b'1'{
                n1 = (n0 + n1 + 1)%m;
            }else{
                n0 = (n0 + n1 + 1)%m;
                has0 = 1;
            }
        }
        return (n1 + has0)%m;
    } 
}
```