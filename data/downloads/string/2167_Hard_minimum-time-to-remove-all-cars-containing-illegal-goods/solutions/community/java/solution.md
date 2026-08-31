# [Java/C++/Python] Short One-Pass, O(1) Space

**Author:** lee215
**Votes:** 241
**Link:** [https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1748704/](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1748704/)

---

# **Explanation**
One pass from left to right.
`left` counts the cost to clear all illegal goods from `s[0]` to `s[i]`
`right` counts the cost to clear all illegal goods from `s[i+1]` to `s[n-1]`

If `s[i] == 1`, then update `left` value,
we take the minimum of these 2 options:
1) `i + 1`, by removing all left cars, `i + 1`
2) `left + 2`, previously remove cose + removing the current `s[i]`

`right = n - 1 - i`, be removing all right cars.
<br>

# **Q&A**
Question:
- Right is not the minimum, it can be less than that `n - 1 - i`
Answer:
- Yes, that's true.
Imagine in best case, `s[i+1]` to `s[n-1]` is removed as the right part.
The cost for this case can be calculated when we iterate `s[i]`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int minimumTime(String s) {
        int n = s.length(), left = 0, res = n;
        for (int i = 0; i < n; ++i) {   
            left = Math.min(left + (s.charAt(i) - '0') * 2, i + 1);
            res = Math.min(res, left + n - 1 - i);
        }
        return res;
    }
```

**C++**
```cpp
    int minimumTime(string s) {
        int n = s.size(), left = 0, res = n;
        for (int i = 0; i < n; ++i) {   
            left = min(left + (s[i] - '0') * 2, i + 1);
            res = min(res, left + n - 1 - i);
        }
        return res;
    }
```

**Python**
```py
    def minimumTime(self, s):
        left, res, n = 0, len(s), len(s)
        for i,c in enumerate(s):
            left = min(left + (c == '1') * 2, i + 1)
            res = min(res, left + n - 1 - i)
        return res
```

