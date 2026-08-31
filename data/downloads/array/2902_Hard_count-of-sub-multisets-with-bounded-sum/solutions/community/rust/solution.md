# Rust/C++ DP with Optimized Double Loop

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4168867/](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4168867/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Noticed that the sum of all numbers is no more 20000. When we add the numbers in sunsequences, their sums are slowly growing to the up bound, which is no more than 20000.
We will use an array int dp[20001] to track the frequencies of the sums. We set dp[0] = 1 (empty sub-sequence) and everything else to 0 initially.
We then different count, uo to its frequency, of the same number for making different subsequences. Instead of tracking the nubers of different sequences, we track the frequences of their sums.
If upBound is the total sum of the numbers processed so far, then dp[k] == 0 for k > upBound. Therefore, we only need to loop to upBound.

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
use std::collections::BTreeMap;
impl Solution {
    pub fn count_sub_multisets(nums: Vec<i32>, l: i32, r: i32) -> i32 {
        let mut mp = BTreeMap::<i32, i32>::new();
        let mut count0 = 0i64;
        for a in nums { 
            if a == 0 { count0 += 1; }
            else { *mp.entry(a).or_insert(0) += 1; }
        }
        
        let mut dp = vec![0; 20001];
        let mut sum = 0;
        let MOD = 1_000_000_007;

        dp[0] = 1;
        for (val, cnt) in &mp {
            for j in (0..= sum).rev() {
                for k in 1 ..= (*cnt) as usize {
                    let it = j + k * (*val) as usize;
                    dp[it] = (dp[it] + dp[j]) % MOD;
                }
            }
            sum += (*val) as usize * (*cnt) as usize;
        }

        let mut ret = 0;
        for i in l as usize ..= r as usize {
            ret = (ret + dp[i]) % MOD;
        }

        (ret as i64 * (count0 + 1) % MOD as i64) as _ 
    }
}
```
~~~
//C++
long long dp[20001];
class Solution {
public:
    int countSubMultisets(vector<int>& nums, int l, int r) {
        map<int, int> mp;
        
        for (auto &a: nums) ++mp[a];
        memset(dp, 0, sizeof(dp));
        dp[0] = 1;
        
        int sum = 0, mod = 1000000007;
        for (auto &it: mp) {
            if (it.first == 0) continue;
            
            for (int j = sum; j >= 0; --j) {
                for (int k = 1; k <= it.second; ++k) {
                    dp[j + k * it.first] = (dp[j + k * it.first] + dp[j]) % mod;
                }
            }
            sum += it.second * it.first;
        }
        
        int ret = 0;
        for (int i = l; i <= r; ++i) {
            ret = (ret + dp[i]) % mod; 
        }
        
        return 1LL * ret * (mp[0] + 1) % mod;
    }
};
~~~