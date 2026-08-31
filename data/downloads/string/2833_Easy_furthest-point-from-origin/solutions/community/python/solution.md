# [Java/C++/Python] Easy Count

**Author:** lee215
**Votes:** 30
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/3965638/](https://leetcode.com/problems/furthest-point-from-origin/solutions/3965638/)

---

# **Explanation**
We check `L` and `R`,
and see how far it's from the origin.
Then all `_` just go further.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int furthestDistanceFromOrigin(String moves) {
        int res = 0, d = 0;
        for (int i = 0; i < moves.length(); ++i) {
            if (moves.charAt(i) == 'L') res--;
            if (moves.charAt(i) == 'R') res++;
            if (moves.charAt(i) == '_') d++;
        }
        return Math.abs(res) + d;
    }
```

**C++**
```cpp
    int furthestDistanceFromOrigin(string moves) {
        int res = 0, d = 0;
        for (auto c : moves) {
            if (c == 'L') res--;
            if (c == 'R') res++;
            if (c == '_') d++;
        }
        return abs(res) + d;
    }
```

**Python**
```py
    def furthestDistanceFromOrigin(self, s: str) -> int:
        return abs(s.count('R') - s.count('L')) + s.count('_')
```
