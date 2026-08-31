# [C++|Java|Python3] strictly O(N) solution via binomial coefficient

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/3071056/](https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/3071056/)

---

**Intuition**
Here, the key observation is that given we have `x0` occurrence of `a` and `x1` occurrence of `b`, the number of good subsequence with `k` frequency is `(1+(x0 choose k)) * (1 + (x1 choose k)) - 1`. The `+1` in multiplication is to account for the case where the given character doesn't appear in the answer and the `-1` is to remove the case of empty string. 
This implementation is strictly `O(N)`. The key to achieve that is to update `(x choose k)` on-the-fly. 
**C++**
```
class Solution {
public:
    int countGoodSubsequences(string s) {
        const int mod = 1'000'000'007; 
        vector<int> freq(26); 
        for (auto& ch : s) ++freq[ch-'a']; 
        long ans = 0; 
        vector<long> coef(26, 1), inv(s.size()+1); 
        inv[0] = inv[1] = 1; 
        for (int x = 1; x <= s.size(); ++x) {
            long val = 1; 
            if (x >= 2) inv[x] = mod - mod/x * inv[mod%x] % mod; 
            for (int i = 0; i < 26; ++i) {
                coef[i] = coef[i] * (freq[i]-x+1) % mod; 
                coef[i] = coef[i] * inv[x] % mod; 
                val = val * (1+coef[i]) % mod; 
            }
            ans = (ans + val - 1) % mod; 
        }
        return ans; 
    } 
};
```
**Java**
```
class Solution {
    public int countGoodSubsequences(String s) {
        final int mod = 1_000_000_007; 
        int[] freq = new int[26]; 
        for (var ch : s.toCharArray()) ++freq[ch-'a']; 
        long[] coef = new long[26], inv = new long[s.length()+1]; 
        Arrays.fill(coef, 1); 
        inv[0] = inv[1] = 1; 
        long ans = 0; 
        for (int x = 1; x <= s.length(); ++x) {
            long val = 1; 
            if (x >= 2) inv[x] = mod - mod/x * inv[mod%x] % mod; 
            for (int i = 0; i < 26; ++i) {
                coef[i] = coef[i] * (freq[i]-x+1) % mod; 
                coef[i] = coef[i] * inv[x] % mod; 
                val = val * (1+coef[i]) % mod; 
            }
            ans = (ans + val - 1) % mod; 
        }
        return (int) ans; 
    }
}
```
**Python3**
```
class Solution:
    def countGoodSubsequences(self, s: str) -> int:
        mod = 1_000_000_007
        freq = [0]*26 
        for ch in s: freq[ord(ch)-97] += 1
        ans = 0 
        coef = [1]*26
        inv = [0]*(len(s)+1)
        inv[0] = inv[1] = 1
        for x in range(1, max(freq)+1): 
            val = 1
            if x >= 2: inv[x] = mod - mod//x * inv[mod%x] % mod
            for i in range(26): 
                coef[i] = coef[i] * (freq[i]-x+1) % mod
                coef[i] = coef[i] * inv[x] % mod
                val = val * (1+coef[i]) % mod
            ans = (ans + val - 1) % mod
        return ans 
```