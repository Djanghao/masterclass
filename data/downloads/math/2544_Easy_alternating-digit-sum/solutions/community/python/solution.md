# [Java/C++/Python] Easy and Concise

**Author:** lee215
**Votes:** 9
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3809814/](https://leetcode.com/problems/alternating-digit-sum/solutions/3809814/)

---

# **Explanation**
`res` means the the current result for `n` suffix.

then we check `n` from right to left digit by digit.
Each time we update `res` with one more digit
with last digit value `n % 10` minus previous value `res`.

Finally we return result `res`.
<br>

# **Complexity**
Time `O(logn)`
Space `O(1)`
<br>

**Java**
```java
    public int alternateDigitSum(int n) {
        int res = 0;
        for (int x = n; x > 0; x /= 10)
            res = x % 10 - res;
        return res;
    }
```

**C++**
```cpp
    int alternateDigitSum(int n) {
        int res = 0;
        for (; n; n /= 10)
            res = n % 10 - res;
        return res;
    }
```

**Python**
```py
    def alternateDigitSum(self, n):
        res = 0
        while n:
            res = n % 10 - res
            n //= 10
        return res
```
**JavaScript**
```js
function alternateDigitSum(n) {
    let res = 0;
    for (; n > 0; n = parseInt(n / 10))
        res = n % 10 - res;
    return res
};
```
