# C++ Memoization Explained | [15 ms, 8.5 MB, beats 93.75% in both time and space]

**Author:** harshkirat2
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-string-with-shortest-length/solutions/4725726/](https://leetcode.com/problems/encode-string-with-shortest-length/solutions/4725726/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
## Base Cases
### Case 1
**s.length < 5**
No encoding can reduce its length.

## Recursive Cases
### Case 2
**s** is a perfect repetition of some other string **x**.
i.e. **s = x...x** (n times).
Encoding of s **can** look like **s = n[encode(x)]**

There can be multiple possible (n, x) combinations, let us not make any greedy choice and consider all options.

### Case 3
**s = x1.x2...xk**
Brute Intution:
- We can divide **s** into two non-empty sub-parts and conquer each of them and combine.
- Some cuts might not give optimal results, therefore let's consider all possible ways of cutting **s** into two.

Note:
- For any particular choice in any of recursive cases mentioned, only the optimal solutions to sub-problems can be combined to form optimal answer.
- Recursive cases involve overlapping sub-problems which can be solved independently. 
- Therefore we can use memoization to avoid re-work.

# Approach
<!-- Describe your approach to solving the problem. -->
Make a recursive function with memoization which returns the **minimum** of **length** of all possible ways to encode a given string **s[l, r]**.

While calculating minimum lengths and storing these in dp-table, also store the choices made like:
- For case-2: Store the chosen period (where period is a divisor of substring length) 
- For case-3: Store the cut-position
- Below implementation stores (N + p) in case-2 in code to distinguish it from case-3.

# Complexity
## Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
[This section to be updated]

## Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Let's denote size of problem by **n** and its some sub-problem size by **m**.

Size of problem **n** can reduce in following ways:
- Fractionally by some divisor of n i.e m = p where p | n (p divides n)
- It can reduce by some constant x based on cut position i.e. m = n - x

Very loose analysis based on above points gives us intution that size of recursion stack can go upto O(n).

Auxiliary space i.e. size of memoization related tables is nearly O($n^2$)

Therefore, overall space complexity: O($n^2$)

# Code
```
class Solution {
private:
    ///<summary> Checks whether s[l, r] is periodic with given period. </summary>
    ///<timeComplexity> \u03B8(r-l) </timeComplexity>
    bool isPeriodic(string &s, int l, int r, int p) {
        int ub = l + p;
        for(int i = l; i < ub; i++) {
            for(int j = i + p; j < r; j += p) {
                if(s[j] != s[j - p]) {
                    return false;
                }
            }
        }
        return true;
    }

    ///<summary> Counts number of digits in num in a given number system. </summary>
    ///<timeComplexity> \u03B8(log-base(num) </timeComplexity>
    int digitCount(int num, int base = 10) {
        if(base <= 0) { // invalid base system
            return -1;
        }

        if(base == 1) { // unary system
            return num;
        }

        if(num == 0) {
            return 1;
        }

        int count = 0;
        while(num) {
            num /= base;
            count++;
        }
        return count;
    }

    ///<summary> Returns length of encoded string. </summary>
    ///<timeComplexity> \u03B8(log10((r-l)/p)) </timeComplexity>
    int getBasicEncodingLength(string &s, int l, int r, int period) {
        // Complexity: O(log10((r-l)/period))

        int n = r - l;
        int freq = n / period;
        return digitCount(freq) + 2 + period;
    }

    void relaxDP(string &s, int l, int r, int p,
        int &cr_ans, vector<vector<int>> &dp, vector<vector<int>> &cuts) {
        if(isPeriodic(s, l, r, p)) {
            int x = getBasicEncodingLength(s, l, r, p);
            x = x - p + encode_util(s, l, l + p, dp, cuts);
            if(cr_ans > x) {
                cr_ans = x;
                cuts[l][r-1] = p + (int)s.length();
            }
        }
    }

    int encode_util(string &s, int l, int r, vector<vector<int>> &dp, vector<vector<int>> &cuts) {
        int n = r - l;

        if(n < 5) { // length can't be reduced by encoding
            return r - l;
        }

        if(dp[l][r-1] != -1) { // sub problem already solved
            return dp[l][r-1];
        }

        int ans = n; // max length i.e. without encoding
        
        // all chars same (period = 1)
        relaxDP(s, l, r, 1, ans, dp, cuts);
        
        // encode (period = i)
        for(int i = 2; i * i <= n; i++) {
            if(n % i == 0) {
                relaxDP(s, l, r, i, ans, dp, cuts);
                relaxDP(s, l, r, n / i, ans, dp, cuts);
            }
        }
        
        // split and encode (period = n)
        for(int i = l + 1; i < r; i++) {
            int x = encode_util(s, l, i, dp, cuts) + encode_util(s, i, r, dp, cuts);
            if(ans > x) {
                ans = x;
                cuts[l][r-1] = i;
            }
        }

        // save computed result and return
        return dp[l][r-1] = ans;
    }

    string encode(string &s, int l, int r, vector<vector<int>> &cuts) {
        int N = s.length();

        if(cuts[l][r-1] == -1) {
            // No encoding
            return s.substr(l, r-l);
        }

        if(cuts[l][r-1] > N) {
            // Encode
            int period = cuts[l][r-1] - N;
            return to_string((r-l)/period) + "[" + encode(s, l, l + period, cuts) + "]";
        }

        // Split and encode sub-parts
        return encode(s, l, cuts[l][r-1], cuts) + encode(s, cuts[l][r-1], r, cuts);
    }

public:
    string encode(string s) {
        int n = s.length();
        vector<vector<int>> dp(n, vector<int>(n, -1)), cuts(n, vector<int>(n, -1));
        int fin_len = encode_util(s, 0, n, dp, cuts);
        return encode(s, 0, n, cuts);
    }
};
```