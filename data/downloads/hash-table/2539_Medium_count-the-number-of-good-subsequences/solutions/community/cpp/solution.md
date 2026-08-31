# Combination + Modular Inverse

**Author:** Benlegend
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/3875741/](https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/3875741/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At the top this is a combination problem: `C(n, k) = n!/(k! * (n-k)!)`. 

A good subsequence can have a single type of character, such as 'aaa'; or more than one types of characters such as 'ababba'. Thus as the first step we account the frequency of each character. Then iterate from 1 to max frequency possible (n). For each frequency f the number of possible combinations of 1 or more types of characters equals to: `(C(n1, f) + 1) * ... * (C(ni, f) + 1) - 1`. The extra 1 represents empty string, meaning any type of character can be missing.

For example, s = "abaaabb" f = 3.
g1 = "aaa" b missing
g2 = "bbb" a missing
g3 = "abaabb" none is missing
g4 = "" a and b are both missing

So finally -1 to remove the whole empty sequence.

# Approach
<!-- Describe your approach to solving the problem. -->
Following knowledge should be prepared to compute `C(n, k)`

    Modular Multiplicative Inverse: 
    the modular multiplicative inverse of a is x such that a * x is congruent to 1 mod m.

    Let modinv(b) denote the modular inverse of b, 
    (a / b) mod P = (a * modinv(b)) mod P = (a mod P * modinv(b) mod P) mod P

    Fermat's little theorem
    If p is prime, and integer a is not multiples of p, then a^\uFF08p-1\uFF09\u22611\uFF08mod p\uFF09

    Thus x = a^(p - 2) is modular inverse of a.

    Apply binary exponentiation to compute a^(p - 2) in log(p).

Please refer to the link for more information.
[https://cp-algorithms.com/algebra/module-inverse.html](https://cp-algorithms.com/algebra/module-inverse.html)

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    int mod = 1e9 + 7;
    int binExp(int a, int b) {
        int ans = 1;

        while (b > 0) {
            if (b & 0x1) {
                ans = (1LL * ans * a) % mod;
            }

            a = 1LL * a * a % mod;
            b >>= 1;
        }

        return ans;
    }

    /*
    C(n, k) = n!/k!*(n-k)! = n! * modInverse(k!) * modInverse((n-k)!)
    */
    int comb(int n, int k, vector<int>& fact, vector<int>& finv) {
        return (1LL * fact[n] * finv[k] % mod) * finv[n - k] % mod;
    }
public:
    int countGoodSubsequences(string s) {
        int n = s.size();
        // factorial 1x2x3...xi
        vector<int> fact(n + 1), finv(n + 1);
        // 0! = 1, 1^(mod - 2) = 1
        fact[0] = finv[0] = 1;
        for (int i = 1; i <= n; i++) {
            fact[i] = (1LL * fact[i - 1] * i) % mod;
            finv[i] = binExp(fact[i], mod - 2);
        }

        int maxf = 0;
        vector<int> freq(26, 0);
        for (int i = 0; i < n; i++) {
            maxf = max(maxf, ++freq[s[i] - 'a']);
        }

        int ans = 0;
        for (int k = 1; k <= maxf; k++) {
            int x = 1;
            for (int i = 0; i < 26; i++) {
                if (freq[i] >= k) {
                    int com = comb(freq[i], k, fact, finv);
                    // (a c(n,k) + empty) * (b c(n,k) + empty) * ...
                    x = 1LL * x * (com + 1) % mod;
                }
            }

            // reduce the all empty combination
            ans = (ans + x - 1) % mod;
        }

        return ans;
    }
};
```