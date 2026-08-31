# [Java/C++/Python] 6 line, O(logk)

**Author:** lee215
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846414/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846414/)

---

# **Warm up**
Check [3304. Find the K-th Character in String Game I](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/discuss/5846330/)
<br>

# **Intuition**
Each operation will double the length of string.
The length of string will be 1,2,4,8,16...

Update `k -= 1`, we want to find `s[k]`.
Consider `k` in binary format:

`s[1xxx]` is generated from `s[xxx]`,
-  If the operation is 0, `s[1xxx] = s[xxx]`
-  If the operation is 1, `s[1xxx] = s[xxx] + 1`
<br>


# **Explanation**
`k -= 1` is the index of char.
If `i`th bit in `k` is 1,
it will apply `operation[i]`.
Count the sum of applied operations.
<br>

# **Complexity**
Time `O(min(logk, 60))`
Space `O(1)`
<br>

**Java**
```java
    public char kthCharacter(long k, int[] A) {
        int res = 0, n = A.length;
        k -= 1;
        for (int i = 0; i < n && i < 60; ++i)
            if ((k >> i) % 2 > 0)
                res += A[i];
        return (char)('a' + res % 26);
    }
```

**C++**
```cpp
    char kthCharacter(long long k, vector<int>& A) {
        int res = 0, n = A.size();
        k -= 1;
        for (int i = 0; i < n && i < 60; ++i)
            if ((k >> i) & 1)
                res += A[i];
        return 'a' + res % 26;
    }
```

**Python**
```py
    def kthCharacter(self, k: int, A: List[int]) -> str:
        res = 0
        k -= 1
        for i, v in enumerate(A):
            if k & (1 << i):
                res += v
        return chr(ord('a') + res % 26)
```

**Shorter Python**
```py
    def kthCharacter(self, k: int, A: List[int]) -> str:
        res = (k - 1) & sum(v << i for i,v in enumerate(A))
        return chr(ord('a') +  res.bit_count() % 26)
```
