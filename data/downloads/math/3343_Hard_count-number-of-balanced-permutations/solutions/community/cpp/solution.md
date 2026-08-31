# C++ DP (digit, len, sum) Memoization

**Author:** bramar2
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-number-of-balanced-permutations/solutions/6000129/](https://leetcode.com/problems/count-number-of-balanced-permutations/solutions/6000129/)

---

# Related Problems
- [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/description/)
- [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/description/)
# Intution
- Think like you are trying to divide an array of integers into two arrays of integers s.t:
    1) $sum1 == sum2$
    2) $len1 == len2$ OR $|len1-len2| == 1$
- In this problem, each integer is limited from 0 -> 9.
- Only difference to that problem is the order of the array matters. What does that mean? Well, $1210$ and $2101$ are the same division of $[1,1]$ and $[2,0]$ but they are considered different $[1,1],[2,0] \
eq [2,0],[1,1]$.
- You need some knowledge about Combinatorics such as:
    1) there are $N!$ ways to rearrange an array with $N$ **unique** elements.
    2) there are $\\frac{N!}{f_1!f_2!f_3!...f_K!}$ ways to rearrange an array with $N$ elements and $K$ distinct elements such that $f_i$ = frequency of i'th **distinct** element.

# Complexity
Count of DP States: $O(10*n/2*sum/2)$
Time to calculate each DP State: $O(n)$
- Time complexity: $O(10 * n/2 * sum/2 * n) = O(2.5*n^2*sum)$
  Max constraint = $O(2.5 * 80 * 80 * 720) = O(11520000) = O(1.152 *1e8)$, low 1e8s usually passes in contests (especially when not all of the sum is actually reached) but LC randomly adds testcases so this sol might ~FST~ see UPD.
- Space complexity: $O(10*81*801) = O(648810)$
  Call stack max depth is 10 because digit = 0 -> 9


# Code
##### UPD: Previous code did not precompute inverse factorial. The version with precomputed inverse factorials gained a 10x time improvement! 2.4s -> 240ms
```cpp []
#include <bits/stdc++.h>
using namespace std;
inline long long mod_exp(long long base, long long exp, long long modd) { unsigned long long ans = 1; base %= modd; while(exp > 0) { if(exp%2==1) ans = (base*ans)%modd; exp /= 2; base = (base*base)%modd; } return ans; }
using ll = long long;
const ll MOD = 1e9 + 7;
vector<ll> factorial {1,1}, invFactorial {1,1};
long long modfactorial(long long n) {
    for(ll i = factorial.size(); i <= n; i++) {
        factorial.push_back((i * factorial[i - 1]) % MOD);
        invFactorial.push_back(mod_exp(factorial.back(), MOD-2, MOD));
    }
    return factorial[n];
}

bool init() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    modfactorial(110); // precompute
    return true;
}
bool y = init();

ll dp[10][81][801];
class Solution {
public:
    int countBalancedPermutations(const string& numStr) {
        int n = numStr.size();
        int freq[10] {};
        ll targetSum = 0;
        for(char c : numStr) {
            freq[c-'0']++;
            targetSum += (c-'0');
        }
        // if sum of digits is odd, then it is impossible
        // to divide into 2 halfs with equal sum
        if(targetSum % 2 == 1) return 0;
        targetSum /= 2;
        
        ll targetLen = n/2;
        // Number of ways to rearrange the 2 sub-arrays
        // ex: [1,2,3] -> [1,3,2] -> [2,1,3] -> [2,3,1]
        // If even length then it is (N/2)! * (N/2)!
        // If odd length then it is floor(N/2)! * ceil(N/2)!
        ll ways = (factorial[targetLen] * factorial[n-targetLen]) % MOD;

        // Reset DP
        for(ll i = 0; i < 10; i++) {
            for(ll j = 0; j <= targetLen; j++) {
                fill(dp[i][j], dp[i][j] + targetSum + 1, -1);
            }
        }
        auto go = [&](this auto&& go, ll i, ll len1, ll sum1) {
            if(i >= 10) {
                if(len1 == targetLen && sum1 == targetSum) return ways;
                return 0LL;
            }
            // len1,sum1 cannot decrease
            if(len1 > targetLen || sum1 > targetSum) {
                return 0LL;
            }
            if(dp[i][len1][sum1] >= 0) return dp[i][len1][sum1];
            ll ans = 0;
            for(ll take = 0; take <= freq[i]; take++) {
                ll w = go(i + 1, len1 + take, sum1 + take*i);
// multiply by mod_inv is division in modulo M
// we're filtering out duplicates because:
// 2! = 2
// "11", "11" should be counted once (divide by 2!)
// "12", "21" should be counted twice (divide by 1!, divide by 1!)
// also needs to be done on subarr_1 and subarr_2
// which is why we divide by invFactorial take AND freq[i]-take
                w = (w * invFactorial[take]) % MOD;
                w = (w * invFactorial[freq[i]-take]) % MOD;
                ans = (ans + w) % MOD;
            }
            return dp[i][len1][sum1] = ans;
        };
        return go(0, 0, 0);
    }
};
```