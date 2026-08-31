# [Java/C++/Python] One line O(1)

**Author:** lee215
**Votes:** 84
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/3258156/](https://leetcode.com/problems/pass-the-pillow/solutions/3258156/)

---

# **Intuition**
Going forward and back to the original position,
take `n * 2 - 2` steps.
<br>

# **Explanation**
One loop take `n * 2 - 2` steps,
so we can first do `time %= (n * 2 - 2)` to save the `time`.

Now we are still at position `1`
and it takes `n - 1` steps from `1` to `n`.

If `times < n - 1`, not reach `n` yet.
If `times > n - 1`, will go back from `n`.

We calculate the distance from `n`,
which `abs(n - 1 - time)`,
and return `n - abs(n - 1 - time)`.
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public int passThePillow(int n, int time) {
        return n - Math.abs(n - 1 - time % (n * 2 - 2));
    }
```

**C++**
```cpp
    int passThePillow(int n, int time) {
        return n - abs(n - 1 - time % (n * 2 - 2));
    }
```

**Python**
```py
    def passThePillow(self, n, time):
        return n - abs(n - 1 - time % (n * 2 - 2))
```
