# Solution using associativity of Dirichlet convolution

**Author:** sheshen
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/4700802/](https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/4700802/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A starting solution is to turn the problem into DP with state being length of the array and number `x` that each number in that array should divide it by. Then, your answer would simply be $$\\sum_{x=1}^{maxValue} dp[n-1][x]$$. However, one could easily code it out and get a TLE as the complexity would be $O(n * D)$ where $D$ is # of pairs $x, y \\in [1, maxValue]$ s.t. $x | y$.

# Approach
<!-- Describe your approach to solving the problem. -->
Note that you are updating next DP row $f$ with the previous DP row $g$ as follows $$f(n) = \\sum_{d | n} g(d)$$. It can be expressed in terms of Dirichlet convolution as follows:
$$f(n) = g(n) * 1$$

Noting that the first DP row is also $1$, the problem simply asks us to compute:
$$1 * 1 * ... * 1$$ $n$-times. Luckily, convolution is an associative operation, so we can use a fast "pow" algorithm to compute our answer, substantially improving the complexity from $O(n*D)$ to $O(log(n)*D)$.

# Complexity
- Time complexity: $$O(D * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(D)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int idealArrays(int n, int maxValue) {
        // Can do in O(n*maxValue^2)
        // Let dp[i]: answer for arr of length i
        // dp[i][maxValue] = sum_x dp[i+1][floor(maxValue/x)]

        // for each x \\in [1...maxValue] find its divisors
        int MAXVAL = maxValue;
        isprime.resize(MAXVAL+1, true);
        for (int x = 2; x <= MAXVAL; ++x) {
            if (!isprime[x]) continue;
            primes.push_back(x);
            for (int y = 2; y*x <= MAXVAL; ++y) {
                isprime[y*x] = false;
            }
        }

        divisors.resize(MAXVAL+1);
        for (int x = 1; x <= MAXVAL; ++x) {
            if (x == 1) divisors[x].push_back(1);
            else {
                auto [p, a] = findPrimeDivisorWithFactor(x);
                int p_pow_a = pow(p, a);
                divisors[x].insert(divisors[x].end(), divisors[x/p].begin(), divisors[x/p].end());
                vector<int> p_pow_a_divisors = divisors[x/p_pow_a];
                for (auto &divisor: p_pow_a_divisors) divisor *= p_pow_a;
                divisors[x].insert(divisors[x].end(), p_pow_a_divisors.begin(), p_pow_a_divisors.end());
            }
        }

        // for (int x = 1; x <= MAXVAL; ++x) {
        //     cout << "Divisors of " << x << ": ";
        //     for (int d : divisors[x]) cout << d << ", ";
        //     cout << endl;
        // }


        // 1. Slow baseline:
        // long long dp[maxValue+1];
        // for (int val = 1; val <= maxValue; ++val) dp[val] = 1;
        // for (int i = 1; i < n; ++i) {
        //     long long dp_prev[maxValue+1];
        //     for (int val = 1; val <= maxValue; ++val) dp_prev[val] = dp[val]; 
        //     for (int val = 1; val <= maxValue; ++val) {
        //         dp[val] = 0;
        //         for (int d : divisors[val]) {
        //             dp[val] = (dp[val] + dp_prev[d]) % MOD;
        //         }
        //     }
        // }

        vector<long long> dp = vector<long long>(maxValue, 1);
        dp = dirichlet_conv_pow(dp, n);

        // for (int i = 0; i < n; ++i) {
        //     for (int val = 0; val <= maxValue; ++val) {
        //         cout << " " << dp[i][val];
        //     }
        //     cout << endl;
        // }
        
        long long ans = 0;
        for (int val = 0; val < maxValue; ++val) {
            // cout << "dp[" << n-1 << "][" << val << "] =" << dp[n-1][val] << endl;
            ans = (ans + dp[val]) % MOD;
        }
        return static_cast<int>(ans);
    }

private:
    const int MOD = 1e9 + 7;
    vector<bool> isprime; 
    vector<int> primes;
    vector<vector<int>> divisors;

    pair<int, int> findPrimeDivisorWithFactor(int x) {
        if (isprime[x]) return make_pair(x, 1);
        for (int i = 0; primes[i]*primes[i] <= x; ++i) {
            if (x % primes[i] == 0) {
                int factor = 0;
                while (x % primes[i] == 0) {
                    x /= primes[i];
                    factor += 1;
                }
                return make_pair(primes[i], factor);
            }
        }
        throw "findPrimeDivisorWithFactor isn't working as expected";
    }

    int pow(int a, int m) {
        if (m == 0) return 1;
        if (m == 1) return a;
        int tmp = pow(a, m/2);
        return (m % 2 == 0 ? tmp*tmp : tmp*tmp*a);
    }

    vector<long long> dirichlet_conv_pow(const vector<long long> &f, int n) {
        if (n == 0) return vector<long long>(f.size(), 1);
        if (n == 1) return f;
        vector<long long> tmp = dirichlet_conv_pow(f, n/2);
        return ((n % 2 == 0) ? conv(tmp, tmp) : conv(conv(tmp, tmp), f));
    }

    vector<long long> conv(const vector<long long> &left, const vector<long long> &right) {
        vector<long long> ans(left.size(), 0);
        for (int x = 1; x <= left.size(); ++x) {
            for (int d : divisors[x]) {
                ans[x-1] = (ans[x-1] + left[d-1] * right[x/d-1]) % MOD;
            }
        }
        return ans;
    }
};
```