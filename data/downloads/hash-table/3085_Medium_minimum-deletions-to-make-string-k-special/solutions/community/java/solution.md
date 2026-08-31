# [Java/C++/Python] Enumerate Minimum Frequency

**Author:** lee215
**Votes:** 56
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886312/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886312/)

---

# **Intuition**
First, we need to calculate character frequencies.
we delete characters for two reasons:
1. Delete the small frequency to zero, so it doesn't count for the rule.
2. Delete the big frequency smaller, so it `big freq - small freq <= k`.
And we won't reduce small freq to smaller positive.
<br>

# **Intuition 2**
After deletion,
the char with the minimum frequency,
must not have been deleted,
it's same as its original frequency in `word`.
<br>

# **Explanation**

Enumerate character's frequency `x`
The goal is to find the minimum deletions needed,
if we take it as the minimum frequency after deletion.

Then we iterates over all character frequencies `a`,
it calculates the deletions required to meet the k-special condition:
If `a < x`, all instances of that character need to be deleted.
If `a > x + k`, then `a - (x + k)` deletions are needed.
Update this to current result `cur`.

Finally return the minimum result we found.
<br>

# **Complexity**
Time `O(n + 26 * 26)`
Space `O(26)`
<br>

**Java**
```java
    public int minimumDeletions(String word, int k) {
        int res = 100000, A[] = new int[26];
        for (char c : word.toCharArray()) {
            A[c - 'a']++;
        }
        for (int x : A) {
            int cur = 0;
            for (int a : A) {
                cur += (a < x) ? a : Math.max(0, a - (x + k));
            }
            res = Math.min(res, cur);
        }
        return res;
    }
```

**C++**
```cpp
    int minimumDeletions(string word, int k) {
        vector<int> A(26);
        for (char& c : word) {
            A[c - 'a']++;
        }
        int res = 1e6;
        for (int x : A) {
            int cur = 0;
            for (int a : A) {
                cur += (a < x) ? a : max(0, a - (x + k));
            }
            res = min(res, cur);
        }
        return res;
    }
```

**Python**
```py
    def minimumDeletions(self, word: str, k: int) -> int:
        A = Counter(word).values()
        res = inf
        for x in A:
            cur = 0
            for a in A:
                cur += a if a < x else max(0, a - (x + k))
            res = min(res, cur)
        return res
```
