# [Python] DP Solution

**Author:** lee215
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4194487/](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4194487/)

---

# **Explanation**
`div[len]` is a list of all factors `d` of `len`,
where `1 <= d < len` and `len % d == 0`.

`dp(i, k)` means the cost to split `s[:i]` (`i` first characters of s)
into `k` semi-palindromes.
We will try to split out all the suffixes of `s[:i]`.

`change(i, j)` means the cost to make substring `s[i:j]` semi-palindrome.
`semi(i, j, d)` means the cost to make substring `s[i:j]` semi-palindrome with module by `d`.

Finally we return `dp(n, k)`
<br>

# **Complexity**
There are `n^2` pairs of `(i,j)`,
and have `logn` `factors`.

For funciton `semi`,
Time and space are `O(n^2logn)`.

For funciton `change`,
Time `O(n^2logn)`, space are `O(n^2)`.

For funciton `dp`,
Time `O(nnk)`, space are `O(nk)`.

Time `O(nnlogn + nnk)`
Space `O(n^2logn)`
<br>


**Python**
```py
    def minimumChanges(self, s: str, k: int) -> int:
        div = defaultdict(lambda: [1])
        n = len(s)
        for d in range(2, n):
             for v in range(d + d, n + 1, d):
                div[v].append(d)

        def change(i, j):
            return min(semi(i, j, d) for d in div[j - i])

        @cache
        def semi(i, j, d):
            if i >= j: return 0
            return semi(i + d, j - d, d) + sum(s[i + ii] != s[j - d + ii] for ii in range(d))

        @cache
        def dp(i, k):
            if k == 1:
                return change(0, i)
            return min(dp(j, k - 1) + change(j, i) for j in range((k - 1) * 2, i - 1))

        return dp(n, k)
```
