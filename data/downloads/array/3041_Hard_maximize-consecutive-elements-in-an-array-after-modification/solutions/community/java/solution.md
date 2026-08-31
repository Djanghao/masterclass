# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 72
**Link:** [https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4742395/](https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4742395/)

---

# **Intuition**
Sort input `A` first.
<br>

# **Solution 1: DP**

`dp[a]` is the maximum length of consecutive sequence ending with `a`.

Iterates through each `a` in the sorted `A`.
We can use `a` as `a + 1`, so we update `dp[a + 1] = dp[a] + 1`
We can use `a` as `a` itself, so we update `dp[a] = dp[a - 1] + 1`

Finally we return the max length in `dp` values.

Time `O(sort) + O(n)`
Space `O(sort) + O(n)`


**Java**
```java
    public int maxSelectedElements(int[] A) {
        HashMap<Integer, Integer> dp = new HashMap<>();
        Arrays.sort(A);
        int res = 0;
        for (int a : A) {
            dp.put(a + 1, dp.getOrDefault(a, 0) + 1);
            dp.put(a, dp.getOrDefault(a - 1, 0) + 1);
            res = Math.max(res, Math.max(dp.get(a), dp.get(a + 1)));
        }
        return res;
    }
```

**C++**
```cpp
    int maxSelectedElements(vector<int>& A) {
        unordered_map<int, int> dp;
        sort(A.begin(), A.end());
        int res = 0;
        for (int& a : A) {
            res = max(res, dp[a + 1] = dp[a] + 1);
            res = max(res, dp[a] = dp[a - 1] + 1);
        }
        return res;
    }
```

**Python**
```py
    def maxSelectedElements(self, A: List[int]) -> int:
        dp = defaultdict(int)
        A.sort()
        for a in A:
            dp[a + 1] = dp[a] + 1
            dp[a] = dp[a - 1] + 1
        return max(dp.values())
```
<br>

# **Solution 2: O(1) Space**
Same as Solution 1, but save the space of `dp`

**Java**
```java
    public int maxSelectedElements(int[] A) {
        Arrays.sort(A);
        int pre = -10, res = 1, c1 = 1, c2 = 1;
        for (int a : A) {
            if (a == pre) {
                c2 = c1 + 1;
            } else if (a == pre + 1) {
                c1++;
                c2++;
            } else if (a == pre + 2) {
                c1 = c2 + 1;
                c2 = 1;
            } else {
                c1 = c2 = 1;
            }
            res = Math.max(res, Math.max(c1, c2));
            pre = a;
        }
        return res;
    }
```

**C++**
```cpp
    int maxSelectedElements(vector<int>& A) {
        sort(A.begin(), A.end());
        int pre = -10, res = 1, c1 = 1, c2 = 1;
        for (int& a : A) {
            if (a == pre) {
                c2 = c1 + 1;
            } else if (a == pre + 1) {
                c1++;
                c2++;
            } else if (a == pre + 2) {
                c1 = c2 + 1;
                c2 = 1;
            } else {
                c1 = c2 = 1;
            }
            res = max(res, max(c1, c2));
            pre = a;
        }
        return res;
    }
```

**Python**
```py
    def maxSelectedElements(self, A: List[int]) -> int:
        A.sort()
        pre = -10
        res = c1 = c2 = 1
        for a in A:
            if a == pre:
                c2 = c1 + 1
            elif a == pre + 1:
                c1, c2 = c1 + 1, c2 + 1
            elif a == pre + 2:
                c1, c2 = c2 + 1, 1
            else:
                c1 = c2 = 1
            res = max(res, c1, c2)
            pre = a
        return res
```

Time `O(sort) + O(n)`
Space `O(sort) + O(1)`
