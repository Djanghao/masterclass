# C++ | Easy to Understand | Detailed explanation | Easy Code

**Author:** naresh2002
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5721283/](https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5721283/)

---

1. Find all **palindromic** numbers of length n and also divisible by k.
2. As a single number can rearrange into multiple palindromes (like 2424 can be rearranged into 2442 and 4224), so we sort all **k-palindromic** numbers find in step 1 before storing them in set to prevent duplicacy.
	Using this we get all the numbers which when rearranged will give our required numbers (after excluding those with leading zeros for fix length n).
3. Then we can calculate all permutaions of each number excluding permutations with leading zero.
For number of permutaion without leading zeros explanation, check : https://math.stackexchange.com/questions/2799149/number-of-permutations-without-leading-zeroes

```
class Solution {
public:
    long long factorial(int n) {
        long long ans = 1;
        for (int i = 2; i <= n; i++) {
            ans *= i;
        }
        return ans;
    }
    
    // To store all k-palindromic numbers
    void solve (int curr, int n, string &s, set<string> &v, int k) {
        if (curr == n) {
            long long p = 0;
            for (int i = 0; i < s.size(); i++) {
                p *= 10;
                p += (s[i] - '0');
            }
            if (s[0] != '0' && p % k == 0) {
                string ss = s;
                sort(ss.begin(), ss.end());
                v.insert(ss);
            }
            return;
        }
        // As palindrome last half characters need to be fixed
        if (curr >= (n + 1) / 2) {
            s += s[n - curr - 1];
            solve(curr + 1, n, s, v, k);
            s.pop_back();
            return;
        }
        for (char ch = '0'; ch <= '9'; ch++) {
            s += ch;
            solve(curr + 1, n, s, v, k);
            s.pop_back();
        }
    }

    long long countGoodIntegers(int n, int k) {
        set<string> v;
        string s;
        solve(0, n, s, v, k);
        long long ans = 0;
        for (auto x : v) {
            map<char, int> m;
            for (auto y : x) {
                m[y]++;
            }
            // All possible permutations
            long long a = factorial(n);
            for (auto x : m) {
                a /= factorial(x.second);
            }
            // Removing permutations for leading zero
            if (m.find('0') != m.end()) {
                long long b = factorial(n - 1);
                for (auto x : m) {
                    if (x.first == '0') {
                        b /= factorial(x.second - 1);
                    }
                    else {
                        b /= factorial(x.second);
                    }
                }
                a -= b;
            }
            
            ans += a;
        }
        return ans;
    }
};
```