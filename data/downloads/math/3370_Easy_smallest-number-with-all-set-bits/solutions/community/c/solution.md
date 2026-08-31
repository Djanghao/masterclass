# [Java/C++/Python] Different ideas

**Author:** lee215
**Votes:** 13
**Link:** [https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6098860/](https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6098860/)

---

# **Explanation**
Solution 1. while loop on `res = res * 2 + 1`
Solution 2. Build-in count leading zeros
Solution 3. Build-in count bit length

# **Complexity**
Time `O(logn)`
Space `O(1)`
<br>

**Java**
```Java
    public int smallestNumber(int n) {
        int res = 1;
        while (res < n)
            res = res * 2 + 1;
        return res;
    }
```
```Java
    public int smallestNumber(int n) {
        return -1 >>> Integer.numberOfLeadingZeros(n);
    }
```
**C++**
```C++
    int smallestNumber(int n) {
        return (1 << (32 - __builtin_clz(n))) - 1;
    }

    int smallestNumber(int n) {
        return INT_MAX >> __builtin_clz(n) - 1;
    }
```
**Python**
```py [Python3]
    def smallestNumber(self, n: int) -> int:
        return (1 << n.bit_length()) - 1
```