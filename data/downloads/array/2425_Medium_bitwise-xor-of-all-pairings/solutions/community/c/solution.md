# [Java/C++/Python] Easy and Concise

**Author:** lee215
**Votes:** 86
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2646552/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2646552/)

---

# **Intuition**
`ai ^ b1, ai ^ b2, ai ^ b3`....
`ai` will construct `B.length` pairs
`bi` will construct `A.length` pairs


# **Explanation**
If `B.length` is even,
`ai` will xor even times,
and equal to 0.

If `B.length` is odd,
`ai` will xor odd times,
and equal to `ai`.

Same for `bi`


If A.length is even and B.length is even,
`res = 0`

If A.length is odd and B.length is even,
`res = B[0] ^ B[1] ^ ...`

If A.length is even and B.length is odd,
`res = A[0] ^ A[1] ^ ...`

If A.length is even and B.length is even,
`res = A[0] ^ A[1] ^ ... ^ B[0] ^ B[1] ^ ...`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int xorAllNums(int[] A, int[] B) {
        int x = 0, y = 0;
        for (int a: A)
            x ^= a;
        for (int b: B)
            y ^= b;
        return (A.length % 2 * y) ^ (B.length % 2 * x);
    }
```

**C++**
```cpp
    int xorAllNums(vector<int>& A, vector<int>& B) {
        int x = 0, y = 0;
        for (int a : A)
            x ^= a;
        for (int b : B)
            y ^= b;
        return (A.size() % 2 * y) ^ (B.size() % 2 * x);
    }
```

**Python**
```py
    def xorAllNums(self, A, B):
        x = y = 0
        for a in A:
            x ^= a
        for b in B:
            y ^= b
        return (len(A) % 2 * y) ^ (len(B) % 2 * x)
```
**Python**
```py
    def xorAllNums(self, A, B):
        return (len(A) % 2 * reduce(xor, B)) ^ (len(B) % 2 * reduce(xor, A))
```


