# [Java/C++/Python] Easy Math O(1)

**Author:** lee215
**Votes:** 17
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3934958/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3934958/)

---

Notice so many `O(n)` soluitons,
some also `O(n)` space.
Added my solution here:

# **Intuition**
[1, k - 1], [2, k - 2] ..
We can pick at most one number from each pair.
<br>

# **Explanation**
Take the example 1:
`n = 5, k = 4`

First part:
We pick `1,2` from `[1,3],[2,4]`

Second part:
Then we complete `n` elements starting by picking `4,5,6..`.

There are `a = min(k // 2, n)` elements in the first part:
`1 + 2 + 3 + ... + a = (1 + a) * a / 2`

There are `b = n - a` elements in the second part:
`k + (k + 1) + ... + (k + b - 1) = (k + k + b - 1) * b // 2`

Finally return the sum of two parts
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public int minimumSum(int n, int k) {
        int a = Math.min(k / 2, n), b = n - a;
        return (1 + a) * a / 2 + (k + k + b - 1) * b / 2;
    }
```

**C++**
```cpp
    int minimumSum(int n, int k) {
        int a = min(k / 2, n), b = n - a;
        return (1 + a) * a / 2 + (k + k + b - 1) * b / 2;
    }
```

**Python**
```py
    def minimumSum(self, n: int, k: int) -> int:
        a = min(k // 2, n)
        b = n - a
        return (1 + a) * a // 2 + (k + k + b - 1) * b // 2
```
