# Try it . Give some time

**Author:** arkaofficial13
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/4476958/](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/4476958/)

---

# Intuition
The problem requires finding the minimum number of operations to make a given string sorted. Each operation involves selecting a pair of indices, swapping characters, and reversing a suffix. The goal is to use combinatorics to efficiently calculate the total number of operations.

# Approach
To solve this problem, we can follow these steps:
1. Precompute factorials and their inverses up to a certain limit to efficiently calculate combinations.
2. Iterate through each character in the string.
3. For each character, calculate the count of characters smaller than the current character.
4. Use combinatorial logic to calculate the contribution of the current character to the total number of operations.
5. Update the total count and decrease the count of the current character.
6. Repeat the process for all characters in the string.

# Complexity
- Time complexity: O(n), where n is the length of the input string. The algorithm iterates through each character once.
- Space complexity: O(1) for the constant-sized arrays used in the precomputation and computation steps. The space complexity does not depend on the size of the input string.

# Code
```
const int MOD = 1e9 + 7;
const int N = 3010;

long f[N];
long g[N];

long qmi(long a, int k) {
    long res = 1;
    while (k != 0) {
        if ((k & 1) == 1) {
            res = res * a % MOD;
        }
        k >>= 1;
        a = a * a % MOD;
    }
    return res;
}

int init = []() {
    f[0] = g[0] = 1;
    for (int i = 1; i < N; ++i) {
        f[i] = f[i - 1] * i % MOD;
        g[i] = qmi(f[i], MOD - 2);
    }
    return 0;
}();

class Solution {
public:
    int makeStringSorted(string s) {
        int cnt[26]{};
        for (char& c : s) {
            ++cnt[c - 'a'];
        }
        int n = s.size();
        long ans = 0;
        for (int i = 0; i < n; ++i) {
            int m = 0;
            for (int j = 0; j < 26; ++j) {
                if (j < s[i] - 'a') {
                    m += cnt[j];
                }
            }
            long t = m * f[n - i - 1] % MOD;
            for (int j = 0; j < 26; ++j) {
                t = t * g[cnt[j]] % MOD;
            }
            ans = (ans + t) % MOD;
            --cnt[s[i] - 'a'];
        }
        return ans;
    }
};
```