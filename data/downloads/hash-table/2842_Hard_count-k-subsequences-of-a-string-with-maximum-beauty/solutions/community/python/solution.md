# [Java/C++/Python] Math

**Author:** lee215
**Votes:** 50
**Link:** [https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3992969/](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3992969/)

---

# **Intuition**
We will pick `k` characters with the biggest frequency.
There is a `bar` to be selected.
If `freq > bar`, will be selected.
If `freq < bar`, won't be selected.
If `freq == bar`, will become a pending candidates.
<br>

# **Explanation**
We firstly count the frequency of all chatacters.
Sort the frequency, and find out the `k`th biggest frequency, which is the `bar`.

Then we iterate all frequencies,
If `freq > bar`, will be selected, `res = res * freq % mod `
If `freq == bar`,
will become a pending candidates, and we only need some of them.

Finally we return `product(k biggest frequencies) * combination(pending, need)`,
<br>

# **Complexity**
Time `O(n)`
Space `O(26)`
<br>

**Java**
```java
    public int countKSubsequencesWithMaxBeauty(String s, int k) {
        int n = s.length(), count[] = new int[26];
        for (int i = 0; i < n; ++i)
            count[s.charAt(i) - 'a']++;
        Arrays.sort(count);
        if (k > 26 || count[26 - k] == 0)
            return 0;
        long res = 1, comb = 1, mod = (long)1e9 + 7, bar = count[26 - k], pend = 0;
        for (int freq : count) {
            if (freq > bar) {
                k--;
                res = res * freq % mod;
            }
            if (freq == bar) pend++;
        }
        for (int i = 0; i < k; ++i) {
            comb = comb * (pend - i) / (i + 1);
            res = res * bar % mod;
        }
        return (int)(res * comb % mod);
    }
```

**C++**
```cpp
    int countKSubsequencesWithMaxBeauty(string s, int k) {
        vector<int> count(26);
        for (char& c : s)
            count[c - 'a']++;
        nth_element(count.begin(), count.begin() + 26 - k, count.end());
        if (k > 26 || count[26 - k] == 0)
            return 0;
        long long res = 1, comb = 1, bar = count[26 - k], mod = 1e9 + 7, pend = 0;
        for (int& freq : count) {
            if (freq > bar) {
                k--;
                res = res * freq % mod;
            }
            if (freq == bar) pend++;
        }
        for (int i = 0; i < k; ++i) {
            comb = comb * (pend - i) / (i + 1);
            res = res * bar % mod;
        }
        return res * comb % mod;
    }
```
**Python**
```py
    def countKSubsequencesWithMaxBeauty(self, s: str, k: int) -> int:
        count = Counter(s)
        if len(count) < k:
            return 0
        bar = sorted(count.values())[-k]
        res = 1
        mod = 10 ** 9 + 7
        m = 0
        for v in count.values():
            if v > bar:
                k -= 1
                res = res * v % mod
            if v == bar:
                m += 1
        return res * comb(m, k) * pow(bar, k, mod) % mod
```
<br>

# Soluiton 2: Python
Python provides some advantages.
Let's get advantages of it:

1. Find the `topk` with `nlargest`.
2. `bar` is the minimum of `topk`
3. Calculate the product with funtion tool `reduce`, apply operator `mul`.
4. Also use the build-in combination `comb` method.
5. Finally assemble them and return result in one lin.

Time `O(n)`, Space `O(26)`

**Python**
```py
    def countKSubsequencesWithMaxBeauty(self, s: str, k: int) -> int:
        freq = Counter(s)
        if len(freq) < k: return 0
        topk = nlargest(k, freq.values())
        bar = min(topk)
        return reduce(mul, topk) * comb(list(freq.values()).count(bar), topk.count(bar)) % (10 ** 9 + 7)
```

