# O(n^3) not pass and O(n^2) solution pass, beats 100%

**Author:** asherlau
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/5578353/](https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/5578353/)

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
O(n^2)
```
impl Solution {
    
    pub fn number_of_combinations(num: String) -> i32 {
        let num = num.as_bytes();
        let n = num.len();
        if (num[0] == b'0'){return 0;}
        let MOD = {1e9 as i32}+ 7;
        let mut dp: Vec<Vec<i32>> = vec![vec![0; n + 1]; n + 1];
        let mut lcp: Vec<Vec<i32>> = vec![vec![0; n + 1]; n + 1];
        for i in (0..n).rev(){
            if num[i] == num[n - 1]{lcp[i][n - 1] = 1}
            for j in ((i + 1)..(n-1)){
                if num[i] == num[j] {
                    lcp[i][j] = lcp[i + 1 ][j + 1] + 1;
                }else{
                    lcp[i][j] = 0;
                }
            }
        }
        (0..n).for_each(|i|{dp[0][i] = 1;});
        for i in 1..n{
            if num[i] == b'0' {continue;}
            let mut prefix_sum= 0;
            for j in i..n{
                let len = j - i + 1;
                dp[i][j] = prefix_sum;
                if i  < len {continue;}
                let k = i - len;
                let common_len = lcp[k][i];
                if common_len as usize >= len || num[k + common_len as usize] < num[i + common_len as usize]{
                    dp[i][j] = (dp[i][j] +  dp[k][i - 1]) % MOD;
                }
                prefix_sum = (prefix_sum + dp[k][i - 1]) % MOD;
            }
        } 

        let mut res = 0;
        for i in 0..n{
            res = (res + dp[i][n - 1]) % MOD;
        }
        return res;
    }
}
```
O(n^3)
```
pub fn number_of_combinations(num: String) -> i32 {
    //return false if lft <= rght
    fn str_cmp(lft : &[u8], rght : &[u8])->bool{
        if rght[0] == b'0'{return true;}
        // println!("lft : {:?} -- rght : {:?}", lft , rght);
        if(lft.len() > rght.len()){return true;}
        if(lft.len() < rght.len()){return false;}
        for i in 0..lft.len(){
            if lft[i] < rght[i]{return false;}
            if lft[i] > rght[i]{return true;}
        }
        return false;
    }
    let num = num.as_bytes();
    let n = num.len();
    if (num[0] == b'0'){return 0;}
    let MOD = {1e9 as i32}+ 7;
    let mut dp = vec![vec![0; n + 1]; n + 1];
    for i in 0..n{
        dp[0][i] += 1;
    }
    for i in 0..n{
        for j in i..n{
            for k in 0..i{
                if(str_cmp(&num[k..i], &num[i..=j])){continue;}
                dp[i][j] += dp[k][i - 1];   
            }
        }
    } 

    let mut res = 0;
    for i in 0..n{
        res += dp[i][n - 1];
    }
    return res;
}
```