# [Java/C++/Python] Bit Solution

**Author:** lee215
**Votes:** 99
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/2590337/](https://leetcode.com/problems/smallest-even-multiple/solutions/2590337/)

---

# **Explanation**
if `n` is even, return `n << 0`
if `n` is odd, return `n << 1`
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public int smallestEvenMultiple(int n) {
        return n << (n & 1);
    }
```

**C++**
```cpp
    int smallestEvenMultiple(int n) {
        return n << (n & 1);
    }
```

**Python**
```py
    def smallestEvenMultiple(self, n):
        return n << (n & 1)
```
