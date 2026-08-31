# Count + DFS

**Author:** votrubac
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4518902/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4518902/)

---

We solve this problem independently for `finish` and `start - 1`, and subtract the results.

Let `n` be a string representation of the right side of the range (either `finish` or `start - 1`).

For strings with length [len(s), len(n) - 1], we can pre-compute the number of powerful integers:
- cnt[0 + len(s)]: `1`
- cnt[1 + len(s)]: `(limit + 1) * cnt[0 + len(s)]`
- cnt[2 + len(s)]: `(limit + 1) * cnt[1 + len(s)]`.
- ...
- cnt[x + len(s)]: `(limit + 1) * cnt[x - 1 + len(s)]`.

So, `cnt[i]` is the number of powerful integers with lengths in range `[len(s), i]`.

Now, for strings with length `len(n)`, we need to make sure that powerful integers do not exceed `n`.

To do that we can use DFS:
> See also an iterative solution below.
- We count how many `digits` we can use before hitting `limit` or `n[i]`.
	- We add `cnt[len(n) - i - 1]  * digits`
		- Note that we can also use `0` if `i > 0`.
- If `n[i] < limit`, we continue with `dfs(i + 1)`.

**Complexity Analysis**
- Time: O(log n)
- Memory: O(log n)

# Count + DFS
**C++**
```cpp
long long cnt[16] = {};
long long dfs(int i, char limit, const string &n, const string &s) {
    if (n.size() < s.size())
        return 0;
    if (i == n.size() - s.size())
        return n.substr(i) >= s;
    int digits = min(limit, n[i]) - '1' + (i > 0);
    return cnt[n.size() - i - 1] * digits +
        (n[i] < limit ? dfs(i + 1, limit, n, s) : 0);
}
long long numberOfPowerfulInt(long long start, long long finish, int limit, const string &s) {
    string hi = to_string(finish), lo = to_string(start - 1);
    for (int i = s.size(); i < hi.size(); ++i)
        cnt[i] = i == s.size() ? 1 : cnt[i - 1] * (limit + 1);
    return cnt[hi.size() - 1] + dfs(0, '1' + limit, hi, s) 
        - (cnt[lo.size() - 1] + dfs(0, '1' + limit, lo, s));
}
```

# Iterative
**Python 3**
```python
class Solution:
    def numberOfPowerfulInt(self, start: int, finish: int, l: int, s: str) -> int:
        cnt = [0] * 16
        def count(n : str, s: str) -> int:
            res, i, sz = cnt[len(n) - 1], 0, len(n) - len(s)
            while True:
                res += n[i:] >= s if i == sz else cnt[len(n) - i - 1] * (min(l, int(n[i]) - 1) + (i > 0))
                i += 1
                if i > sz or int(n[i - 1]) > l:
                    break
            return res            
        for i in range(len(s), 16):
            cnt[i] = 1 if i == len(s) else cnt[i - 1] * (l + 1)
        return count(str(finish), s) - count(str(start - 1), s)
```
**C++**
```cpp
long long cnt[16] = {};
long long count(char l, const string &n, const string &s) {
    long long res = cnt[n.size() - 1], i = 0, sz = n.size() - s.size();
    do
        res += i == sz ? n.substr(i) >= s : cnt[n.size() - i - 1] * (min(l, n[i]) - '1' + (i > 0));
    while (i < sz && n[i++] < l);
    return res;
} 
long long numberOfPowerfulInt(long long start, long long finish, int limit, const string &s) {
    for (int i = s.size(); i < 16; ++i)
        cnt[i] = i == s.size() ? 1 : cnt[i - 1] * (limit + 1);
    return count('1' + limit, to_string(finish), s) - count('1' + limit, to_string(start - 1), s);
}
```