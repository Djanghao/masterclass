# [Java/C++/Python] Set

**Author:** lee215
**Votes:** 50
**Link:** [https://leetcode.com/problems/card-flipping-game/solutions/125791/](https://leetcode.com/problems/card-flipping-game/solutions/125791/)

---

# **Intuition**
If `fronts[i] == backs[i]`, it means that `fronts[i]` have to appear on the table, no matter how we flap this card.
<br>

# **Explanation**
In case that `fronts[i]` and `backs[i]` are same,
`fronts[i]` become impossible to be the result number,
so I add it to a hash set `same`.

On the other hand,
If `fronts[i] != backs[i]`,
we can always hide either number by flapping it to back.

Then iterate all numbers and return the minimum.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int flipgame(int[] f, int[] b) {
        HashSet<Integer> same = new HashSet<>();
        for (int i = 0; i < f.length; ++i)
            if (f[i] == b[i])
                same.add(f[i]);
        int res = 3000;
        for (int i : f)
            if (!same.contains(i))
                res = Math.min(res, i);
        for (int i : b)
            if (!same.contains(i))
                res = Math.min(res, i);
        return res % 3000;
    }
```

**C++**
```cpp
    int flipgame(vector<int>& f, vector<int>& b) {
        unordered_set<int> same;
        for (int i = 0; i < f.size(); ++i)
            if (f[i] == b[i])
                same.insert(f[i]);
        int res = 3000;
        for (int & i : f)
            if (same.count(i) == 0)
                res = min(res, i);
        for (int & i : b)
            if (same.count(i) == 0)
                res = min(res, i);
        return res % 3000;
    }
```

**Python**
```py
    def flipgame(self, f, b):
        same = {x for x, y in zip(f, b) if x == y}
        return min([i for i in f + b if i not in same] or [0])
```

**JavaScript**
```js
function flipgame(f, b) {
    const same = new Set();
    for (let i = 0; i < f.length; i++)
        if (f[i] === b[i])
            same.add(f[i]);
    let res = 3000;
    for (let x of f)
        if (x < res && !same.has(x))
            res = x;
    for (let x of b)
        if (x < res && !same.has(x))
            res = x;
    return res % 3000;
}
```
