# [Python] Find the number of substrings

**Author:** lee215
**Votes:** 66
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/2807533/](https://leetcode.com/problems/split-message-based-on-limit/solutions/2807533/)

---

# **Explanation**
The key question is to find out the number of split parts `k`.

`cur` is the total string length of all indices,
like the string length for "123" is 3.
`</>` takes 3 characters.
The number `k` takes `len(str(k))` characters.

If `cur + len(s) + (3 + len(str(k))) * k > limit * k`,
means not enough characters to split `s`.

If `3 + len(str(k)) * 2 >= limit`,
`k` means `<k/k>` already takes `limit` characters,
it is impossible to split message as required.

We increment `k` from 0 until we find `k` that can split message `s` as required.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Python**
```py
    def splitMessage(self, s: str, limit: int) -> List[str]:
        cur = k = i = 0
        while 3 + len(str(k)) * 2 < limit and cur + len(s) + (3 + len(str(k))) * k > limit * k:
            k += 1
            cur += len(str(k))
        res = []
        if 3 + len(str(k)) * 2 < limit:
            for j in range(1, k + 1):
                l = limit - (len(str(j)) + 3 + len(str(k)))
                res.append('%s<%s/%s>' % (s[i:i + l], j, k))
                i += l
        return res
```
