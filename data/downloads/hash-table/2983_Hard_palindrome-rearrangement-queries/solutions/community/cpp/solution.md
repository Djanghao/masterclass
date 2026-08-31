# Prefix sum O(n) 30 lines C++

**Author:** mzchen
**Votes:** 29
**Link:** [https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4482832/](https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4482832/)

---

# Approach
The idea is pretty straightforward. Compute the prefix sum and check for violation of the palindromic rule for each query. Two prefix sums are computed: `psd` is the prefix sum of the number of differred characters when folding the upper half to the lower one. `psc` is the prefix sum of the character count (`cnt`). `valarray<int>` is basically the mathematical vector and its arithmetic operations are what we need here.

The most difficult part is the incredible details in the range subscripts. The trick here is to use left closed right open intervals.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```cpp []
vector<bool> canMakePalindromeQueries(string s, vector<vector<int>>& queries) {
    int n = s.size();
    vector<int> psd(1); // prefix sum (difference)
    for (int i = 0, j = n - 1; i < j; i++, j--)
        psd.push_back(psd.back() + (s[i] != s[j]));

    valarray<int> cnt(26);
    vector<valarray<int>> psc(1, cnt); // prefix sum (count)
    for (char c : s) {
        ++cnt[c - 'a'];
        psc.push_back(cnt);
    }

    vector<bool> ans;
    for (auto &q : queries) {
        int a1 = q[0], b1 = q[1] + 1, a2 = n - q[0], b2 = n - 1 - q[1];
        int c1 = q[2], d1 = q[3] + 1, c2 = n - q[2], d2 = n - 1 - q[3];

        // no difference allowed outside the query ranges
        if (min(a1, d2) && psd[min(a1, d2)]
            || n/2 > max(b1, c2) && psd[n/2] - psd[max(b1, c2)]
            || d2 > b1 && psd[d2] - psd[b1]
            || a1 > c2 && psd[a1] - psd[c2]) {
            ans.push_back(false);
        }
        else {
            // intersection of query ranges in lower half must equate to that in upper half
            valarray<int> ix1 = psc[d1] - psc[c1], ix2 = psc[b1] - psc[a1];
            if (a1 > d2) ix1 -= psc[min(a1, c2)] - psc[d2];
            if (c2 > b1) ix1 -= psc[c2] - psc[max(b1, d2)];
            if (c1 > b2) ix2 -= psc[min(c1, a2)] - psc[b2];
            if (a2 > d1) ix2 -= psc[a2] - psc[max(d1, b2)];
            ans.push_back((ix1 >= 0 && ix2 >= 0 && ix1 == ix2).min());
        }
    }
    return ans;
}
```