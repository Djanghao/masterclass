# [Java/C++/Python] 1-Line O(logK)

**Author:** lee215
**Votes:** 46
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5846330/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5846330/)

---

# **Intuition**
Update `k -= 1`, we want to find `s[k]`.

Consider `k` in binary format:
`s[1xxx]` is generated from `s[xxx]`,
`s[1xxx] = s[xxx] + 1`
<br>

# **Explanation**
Each bit means it's incremented once.

`s[k] = s[0] + bits_count(k)`

Just return bit count of `k`.
<br>

# **Complexity**
Time `O(logk)`
Space `O(1)`
<br>

**Java**
```java
    public char kthCharacter(int k) {
        return (char)('a' + Integer.bitCount(k - 1));
    }
```

**C++**
```cpp
    char kthCharacter(int k) {
        return 'a' + __builtin_popcount(k - 1);
    }
```

**Python**
```py
    def kthCharacter(self, k: int) -> str:
        return chr(ord('a') + (k - 1).bit_count())
```

# **Continue**
Check [3307. Find the K-th Character in String Game II](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/discuss/5846414)
<br>
