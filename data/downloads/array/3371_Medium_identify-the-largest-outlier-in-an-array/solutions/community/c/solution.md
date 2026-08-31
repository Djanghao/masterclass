# [Java/C++/Python] HashMap

**Author:** lee215
**Votes:** 12
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6098878/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6098878/)

---

# **Explanation**
Count elements `total` sum and frequence `count`.
For each `a` as the sum,
we check `outlier = total - a - a`,
if `outlier` exists,
we update `res = max(res, outlier)`.

finally return result `res`.

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

```Java [Java]
    public int getLargestOutlier(int[] A) {
        Map<Integer, Integer> count = new HashMap<>();
        int total = 0, res = Integer.MIN_VALUE;
        for (int a : A) {
            total += a;
            count.put(a, count.getOrDefault(a, 0) + 1);
        }
        for (int a : A) {
            int outlier = total - a - a;
            if (count.getOrDefault(outlier, 0) > (outlier == a ? 1 : 0)) {
                res = Math.max(res, outlier);
            }
        }
        return res;
    }
```

```C++ [C++]
    int getLargestOutlier(vector<int>& A) {
        unordered_map<int, int> count;
        int total = 0, res = INT_MIN;
        for (int a : A) {
            total += a;
            count[a]++;
        }
        for (int a : A) {
            int outlier = total - a - a;
            if (count[outlier] > (outlier == a)) {
                res = max(res, outlier);
            }
        }
        return res;
    }
```

```py [Python3]
    def getLargestOutlier(self, A: List[int]) -> int:
        total = sum(A)
        count = Counter(A)
        res = -inf
        for a in A:
            outlier = total - a - a
            if count[outlier] > (outlier == a):
                res = max(res, outlier)
        return res
```
