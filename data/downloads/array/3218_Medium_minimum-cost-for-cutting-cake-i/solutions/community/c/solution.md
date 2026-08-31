# [Java/C++/Python] Greedy

**Author:** lee215
**Votes:** 59
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5473151/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5473151/)

---

# **Intuition**
1. Make the most expensive cut as early as possible, which leads to a greedy solution.
2. The order of `horizontalCut` and `verticalCut` doesn't matter, so we can sort them.
<br>

# **Explanation**
Compare each pair of `<h,v>` cuts,
we will make the more expensive cut first,
and then the cheaper cut will be make one more time.

And each cut will be made at lease once initilly.

For example,
If we cut horizontal `k` times,
there is `k + 1` parts in vertical direction,
and each vertical cut need to make `k + 1` times,
`k` more times than once.

Time `O(mn)`
Space `O(1)`


**Java**
```java
    public int minimumCost(int m, int n, int[] h, int[] v) {
        int res = Arrays.stream(h).sum() + Arrays.stream(v).sum();
        for (int a : h)
            for (int b : v)
                res += Math.min(a, b);
        return res;
    }
```

**C++**
```cpp
    int minimumCost(int m, int n, vector<int>& h, vector<int>& v) {
        int res = accumulate(h.begin(), h.end(), 0) + accumulate(v.begin(), v.end(), 0);
        for (int a : h)
            for (int b : v)
                res += min(a, b);
        return res;
    }
```

**Python**
```py
    def minimumCost(self, m, n, h, v):
        return sum(h) + sum(v) + sum(map(min, product(h, v)))
```
<br>


# **Prove**
- The order of continuous cuts in same directly,
won't change the total cost.

- Consider the cost `h` and `v` of continuous cuts in difference direction.
If cut in horizontal line first, we will pay one more `v`
If cut in vertical line first, we will pay one more `h`

- Take an example of 2 * 2.
Cut `h` first, total cost is `h + v + v`
Cut `v` first, total cost is `v + h + h`

As a result, we'll cur the more expensive line first.
<br>


# **Solution 2: Sort**

Time `O(sort)`
Space `O(sort)`

See post in [3219. Minimum Cost for Cutting Cake II](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/discuss/5473140/JavaC%2B%2BPython-Greedy)

**Java**
```java
    public long minimumCost(int m, int n, int[] h, int[] v) {
        Arrays.sort(h);
        Arrays.sort(v);
        long sumH = 0, sumV = 0, res = 0;
        for (int x : h) sumH += x;
        for (int x : v) sumV += x;

        int i = h.length - 1, j = v.length - 1;
        while (i >= 0 && j >= 0) {
            if (h[i] > v[j]) {
                res += h[i] + sumV;
                sumH -= h[i--];
            } else {
                res += v[j] + sumH;
                sumV -= v[j--];
            }
        }
        return res + sumH + sumV;
    }
```

**C++**
```cpp
    long long minimumCost(int m, int n, vector<int>& h, vector<int>& v) {
        sort(h.begin(), h.end());
        sort(v.begin(), v.end());
        long long sumH = 0, sumV = 0, res = 0;
        for (int x : h) sumH += x;
        for (int x : v) sumV += x;

        int i = h.size() - 1, j = v.size() - 1;
        while (i >= 0 && j >= 0) {
            if (h[i] > v[j]) {
                res += h[i] + sumV;
                sumH -= h[i--];
            } else {
                res += v[j] + sumH;
                sumV -= v[j--];
            }
        }
        return res + sumH + sumV;
    }
```

**Python**
```py
    def minimumCost(self, m: int, n: int, h: List[int], v: List[int]) -> int:
        h.sort()
        v.sort()
        sumh = sum(h)
        sumv = sum(v)
        res = 0
        while h and v:
            if h[-1] > v[-1]:
                res += h[-1] + sumv
                sumh -= h.pop()
            else:
                res += v[-1] + sumh
                sumv -= v.pop()
        return res + sumh + sumv
```

