# C++/Rust Digit DP + KMP Solution

**Author:** rpn2eax
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/4552898/](https://leetcode.com/problems/find-all-good-strings/solutions/4552898/)

---

# Intuition
DP + KMP

# Complexity
- Time complexity: O(n * evil)

- Space complexity: O(n * evil) 

# Code
```C++ []
const int mod = 1e9+7;
class Solution {
    long long dp[501][51][2][2]={};
public:
    Solution(){
        ios::sync_with_stdio(false);
        cin.tie(nullptr);
    }
    int findGoodStrings(int n, string s1, string s2, string evil) {
        return dfs(0, 0, true, true, n, s1, s2, evil, kmpArray(evil));
    }
private:
    int dfs(int pos, int evilMatched, bool boundLower, bool boundUpper, const int& n, const string& s1, const string& s2, const string& evil, const vector<int>& kmp){
        if(evilMatched == evil.size())
            return 0;
        if(pos == n)
            return 1;
        if(dp[pos][evilMatched][boundLower][boundUpper])
            return dp[pos][evilMatched][boundLower][boundUpper];
        
        char lo = boundLower ? s1[pos] : 'a';
        char hi = boundUpper ? s2[pos] : 'z';
        
        long long ans=0;
        for(char c=lo; c<=hi; ++c){
            int j = evilMatched;
            while(j && evil[j] != c)
                j = kmp[j-1];
            if(evil[j] == c)
                ++j;
            ans += dfs(pos+1, j, boundLower && (c == lo), boundUpper && (c == hi), n, s1, s2, evil, kmp);
            ans %= mod;
        }
        return dp[pos][evilMatched][boundLower][boundUpper] = ans;
    }
    vector<int> kmpArray(const string& evil){
        int i=1, len=0;
        const int n = evil.size();
        vector<int> kmp(n);
        
        while(i < n){
            if(evil[i] == evil[len])
                kmp[i++] = ++len;
            else{
                if(len)
                    len = kmp[len-1];
                else
                    ++i;
            }
        }
        return kmp;
    }
};
```
```Rust []
use std::cmp::Ordering;
static MOD: i64 = 1_000_000_007;
impl Solution {
    pub fn find_good_strings(n: i32, s1: String, s2: String, evil: String) -> i32 {
        let evil = evil.as_bytes();
        let evil_len = evil.len();
        fn kmp(evil: &[u8], n: usize) -> Vec<usize>{
            let (mut i, mut len) = (1, 0);
            let mut dp = vec![0; n];
            while i < n{    
                if evil[i].cmp(&evil[len]) == Ordering::Equal{
                    len += 1;
                    dp[i] = len;
                    i += 1;
                } else{
                    match len > 0{
                        true => {len = dp[len - 1];},
                        _ => {i += 1;}
                    }
                }
            }
            dp
        }
        let kmp_array = kmp(evil, evil_len);

        fn dfs(pos: usize, evil_matched: usize, lower_bound: bool, upper_bound: bool, 
                n: usize, s1: &[u8], s2: &[u8], evil: &[u8], kmp: &Vec<usize>, 
                dp: &mut Vec<Vec<Vec<Vec<i64>>>>) -> i64{
            if evil_matched == evil.len(){
                return 0;
            }

            if pos == n{
                return 1;
            }

            if dp[pos][evil_matched][lower_bound as usize][upper_bound as usize] != -1{
                return dp[pos][evil_matched][lower_bound as usize][upper_bound as usize];
            }

            let lo = if lower_bound {s1[pos]} else {b'a'};
            let hi = if upper_bound {s2[pos]} else {b'z'};
            let mut ans = 0;
            for c in lo..=hi{
                let mut j = evil_matched;
                while j > 0 && evil[j] != c{
                    j = kmp[j - 1];
                }
                if evil[j] == c{
                    j += 1;
                }

                ans += dfs(pos + 1, j, (c== lo) & lower_bound, upper_bound & (c == hi), n, s1, s2, evil, kmp, dp);
                ans %= MOD;
            }
            dp[pos][evil_matched][lower_bound as usize][upper_bound as usize] = ans;
            ans
        }  

        let mut dp = vec![vec![vec![vec![-1; 2]; 2]; evil_len]; n as usize];
        dfs(0, 0, true, true, n as usize, s1.as_bytes(), 
            s2.as_bytes(), evil, &kmp_array, &mut dp) as i32 
    }
}
```