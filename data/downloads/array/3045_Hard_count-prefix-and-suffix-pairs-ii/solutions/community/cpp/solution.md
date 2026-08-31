# Z-function and rolling hash O(nm) C++

**Author:** mzchen
**Votes:** 35
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744437/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744437/)

---

# Approach
Another **Z-function** problem. We saw **Z-function** problems last week and the week before last. If you still don't know **Z-function**, check my previous post for [3031. Minimum Time to Revert Word to Initial State II](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4673959/z-function-on-c/).

Back to the solution, we need to check each `word[i]` towards each previous words `word[j]`, and see if `word[j]` is the prefix and suffix of `word[i]`. Breaking it down, they are two conditions:
1. `word[i]` must first have the same prefix and suffix.
2. `word[j]` must equate to that prefix.

Instead of performing the prefix and suffix comparison over and over again, **Condition 1** can easily be achieved with **Z-function**: we get the `z` array for our current `word[i]` with $$O(m)$$ time. Then scan `z` array reversely to see if the suffix has the `z` value equal to its length. If so, the suffix equates to the prefix of `word[i]`.

For **Condition 2**, obviously a hash table is what we need. A straightforward method is to store each previous word in a hash table and once the first condition meets we look up the hash table to check if that prefix exists in the hash table. However, hash table with a key type of string has efficiency deficiency. Its hasher has to walk through each character to get the hash value for checking the existence. We apply the trick of **Rabin Karp** or rolling hash to prevent the issue. Specifically, in the hash table we store the hash values of each previous word, and in the loop of reverse scanning we incrementally compute the rolling hash of each prefix, meaning we are just computing the hash without rolling.

By far we have solve the problem with **Z-function** and **Rabin Karp**. Having a second thought, you will realize that, now that we have computed the hash value of the prefix, why wouldn't we do the same for the suffix? The trick is, in computing the prefix hash the factor is multiplied on the left side, while in the suffix hash the factor is multiplied on the right side.

# Complexity
- Time complexity:
$$O(nm)$$ where `n` is the number of `words` and `m` is the average length of each word.

- Space complexity:
$$O(n)$$ where `n` is the number of `words`.

# Code
**Z-function** + **Hashing**
```cpp []
long long countPrefixSuffixPairs(vector<string>& words) {
    unordered_map<int64_t, int> freq; // rolling hash => frequency
    long long ans = 0, mod = (int64_t)1e17 + 3;
    for (auto &w : words) {
        auto z = z_function(w);
        int64_t hash = 0;
        for (int n = w.size(), i = 1; i <= n; i++) { // i: length of prefix
            hash = (hash * 27LL + (1LL + w[i - 1] - 'a')) % mod;
            if (z[n - i] == i) {
                auto it = freq.find(hash);
                if (it != freq.end())
                    ans += it->second;
            }
        }
        ++freq[hash];
    }
    return ans;
}
```

Below is the **Z-function**, the same as I shared before.
```cpp []
vector<int> z_function(const string &s) {
    int n = s.size();
    vector<int> z(n);
    z[0] = n;
    for (int i = 1, l = 0, r = 0; i < n; i++) {
        if (i <= r)
            z[i] = min(z[i - l], r - i + 1);
        for (int &j = z[i]; i + j < n && s[j] == s[i + j]; j++);
        if (z[i] > r - i + 1)
            l = i, r = i + z[i] - 1;
    }
    return z;
}
```

**Hashing** alone
```cpp []
long long countPrefixSuffixPairs(vector<string>& words) {
    unordered_map<int64_t, int> freq; // rolling hash => frequency
    int64_t ans = 0, mod = (int64_t)1e17 + 3;
    for (auto &w : words) {
        int64_t l_hash = 0, r_hash = 0, pow = 1;
        for (int n = w.size(), i = 1; i <= n; i++) { // i: length of prefix
            l_hash = (l_hash * 27LL + (1LL + w[i - 1] - 'a')) % mod;
            r_hash = ((1LL + w[n - i] - 'a') * pow % mod + r_hash) % mod;
            pow = pow * 27 % mod;
            if (l_hash == r_hash) {
                auto it = freq.find(l_hash);
                if (it != freq.end())
                    ans += it->second;
            }
        }
        ++freq[l_hash];
    }
    return ans;
}
```