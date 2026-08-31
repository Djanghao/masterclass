# [Java/Python 3] Two O(n) codes w/ brief explanation and analysis.

**Author:** rock
**Votes:** 63
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/944594/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/944594/)

---

**Mehtod 1: Greedily reversely place values**

1. Make sure each value of the n characters is at least  `1`: initialized all as `'a'`;
2. Put as more value at the end of the String as possible.
```java
    public String getSmallestString(int n, int k) {
        k -= n;
        char[] ans = new char[n];
        Arrays.fill(ans, 'a');
        while (k > 0) {
            ans[--n] += Math.min(k, 25);
            k -= Math.min(k, 25);
        }
        return String.valueOf(ans);
    }
```
```python
    def getSmallestString(self, n: int, k: int) -> str:
        ans = ['a'] * n
        k -= n
        while k > 0:
            n -= 1 
            ans[n] = chr(ord('a') + min(25, k))
            k -= min(25, k)
        return ''.join(ans)
```

**Analysis:**
Time & space: O(n)

----
**Method 2: Math**
Compute the total number of `z` at the end, and the number of not `a` characters right before those `z`: `r`; The remaining are `a`'s .
```java
    public String getSmallestString(int n, int k) {
        int z = (k - n) / 25, r = (k - n) % 25;
        return (z == n ? "" : "a".repeat(n - z - 1) + (char)('a' + r)) + "z".repeat(z);
    }
```
```python
    def getSmallestString(self, n: int, k: int) -> str:
        z, r = divmod(k - n, 25)
        return ('' if z == n else 'a' * (n - z - 1) + chr(ord('a') + r)) + 'z' * z
```
The above codes can be further simplified as follows:

```java
    public String getSmallestString(int n, int k) {
        int z = (k - n - 1) / 25, r = (k - n - 1) % 25;
        return "a".repeat(n - z - 1) + (char)('a' + r + 1) + "z".repeat(z);
    }
```
```python
    def getSmallestString(self, n: int, k: int) -> str:
        z, r = divmod(k - n, 25)
        return 'a' * (n - z - 1) + chr(ord('a') + r) * (n > z) + 'z' * z
```
**Analysis:**
Time & space: O(n)
