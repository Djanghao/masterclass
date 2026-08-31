# [Python] Easy and Concise with Explanation

**Author:** lee215
**Votes:** 49
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/1748527/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/1748527/)

---

# **Explanation**
If it's negative, simple sort reversely all digits.
If it's positive, swap the fisrt digit and the first non-zero digit.

Note that `0` is neither positive nor negative,
take care of it.
<br>

**C++**
all by @blackspinner
```cpp
    long long smallestNumber(long long num) {
        string s = to_string(abs(num));
        sort(s.begin(), s.end());
        if (num <= 0) {
            return -1 * stoll(string(s.rbegin(), s.rend()));
        }
        int i = s.find_first_not_of('0');
        swap(s[0], s[i]);
        return stoll(s);
    }
```
**Python**
```py
    def smallestNumber(self, a):
        s = sorted(str(abs(a)))
        if a <= 0:
            return -int(''.join(s[::-1]))
        i = next(i for i,a in enumerate(s) if a > '0')
        s[i], s[0] = s[0], s[i]
        return int(''.join(s))
```
