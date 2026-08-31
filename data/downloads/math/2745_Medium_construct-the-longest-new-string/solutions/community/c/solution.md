# [Java/C++/Python] 1-line, O(1)

**Author:** lee215
**Votes:** 33
**Link:** [https://leetcode.com/problems/construct-the-longest-new-string/solutions/3677618/](https://leetcode.com/problems/construct-the-longest-new-string/solutions/3677618/)

---

# **Explanation**
Assume we only have `AA` and `BB`:

If we have more `AA` than `BB`,
we will put `AABBAA..BBAA`,
one more `AA` than `BB`,
so we will have atmost `min(x, y + 1)` of `AA`

If we have more `BB` than `AA`,
we will put `BBAABB..AABB`,
one more `BB` than `AA`,
so we will have atmost `min(x + 1, y)` of `BB`

Now how about `AB` ?
`AB` has won't affect the above rule,
and we can arrange as many as possible,
like `ABAB..ABAB`,
and it can be, merged before `AA`, or after `BB`.
so we have `z * 2` more characters from `AB`

Sum up 3 parts,
we return `(min(x, y + 1) + min(x + 1, y) + z) * 2`
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public int longestString(int x, int y, int z) {
        return (Math.min(x, y + 1) + Math.min(x + 1, y) + z) * 2;
    }
```

**C++**
```cpp
    int longestString(int x, int y, int z) {
        return (min(x, y + 1) + min(x + 1, y) + z) * 2
    }
```

**Python**
```py
    def longestString(self, x: int, y: int, z: int) -> int:
        return min(x + y + z, x + x + 1 + z, y + y + 1 + z) * 2
```