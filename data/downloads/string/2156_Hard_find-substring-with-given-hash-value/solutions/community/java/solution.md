# [Java/C++/Python] Sliding Window + Rolling Hash

**Author:** lee215
**Votes:** 184
**Link:** [https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1730321/](https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1730321/)

---

# **Intuition**
Good time to learn rolling hash.
what's hash?
The definition `hash(s, p, m)` in the description is the hash of string `s` based on `p`.

what's rolling hash?
The hash of substring is a sliding window.
So the basis of rolling hash is sliding window.


# **Explanation**
Calculate the rolling hash backward.
In this process, we slide a window of size `k` from the end to the begin.

Firstly calculate the substring hash of the last `k` characters,
then we add one previous backward and drop the last characters.

Why traverse from end instead of front?
Because `cur` is reminder by mod `m`,
`cur = cur * p` works easier.
`cur = cur / p` doesn'r work easily.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public String subStrHash(String s, int p, int m, int k, int hashValue) {
        long cur = 0, pk = 1;
        int res = 0, n = s.length();
        for (int i = n - 1; i >= 0; --i) {
            cur = (cur * p + s.charAt(i) - 'a' + 1) % m;
            if (i + k >= n)
                pk = pk * p % m;
            else
                cur = (cur - (s.charAt(i + k) - 'a' + 1) * pk % m + m) % m;
            if (cur == hashValue)
                res = i;
        }
        return s.substring(res, res + k);
    }
```
**C++**
```cpp
    string subStrHash(string s, int p, int m, int k, int hashValue) {
        long long cur = 0, res = 0, pk = 1, n = s.size();
        for (int i = n - 1; i >= 0; --i) {
            cur = (cur * p + s[i] - 'a' + 1) % m;
            if (i + k >= n)
                pk = pk * p % m;
            else
                cur = (cur - (s[i + k] - 'a' + 1) * pk % m + m) % m;
            if (cur == hashValue)
                res = i;
        }
        return s.substr(res, k);
    }
```
**Python**
```py
    def subStrHash(self, s, p, m, k, hashValue):
        def val(c):
            return ord(c) - ord('a') + 1
            
        res = n = len(s)
        pk = pow(p,k,m)
        cur = 0

        for i in xrange(n - 1, -1, -1):
            cur = (cur * p + val(s[i])) % m
            if i + k < n:
                cur = (cur - val(s[i + k]) * pk) % m
            if cur == hashValue:
                res = i
        return s[res: res + k]
```
