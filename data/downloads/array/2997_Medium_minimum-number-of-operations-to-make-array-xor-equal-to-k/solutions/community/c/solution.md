# [Java/C++/Python] 3 Lines Count Bits

**Author:** lee215
**Votes:** 40
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4518559/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4518559/)

---

# **Explanation**
Count bits of XOR(A) ^ k
<br>

# **Complexity**
Time `O(logn)`
Space `O(1)`
<br>

**Java**
```java
    public int minOperations(int[] A, int k) {
        for (int a : A)
            k ^= a;
        return Integer.bitCount(k);
    }
```

**C++**
```cpp
    int minOperations(vector<int>& A, int k) {
        for (int a : A)
            k ^= a;
        return __builtin_popcount(k);
    }
```

**Python**
```py
    def minOperations(self, A: List[int], k: int) -> int:
        return reduce(xor, A, k).bit_count()
```
