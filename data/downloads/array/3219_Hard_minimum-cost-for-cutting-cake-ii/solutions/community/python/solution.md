# [Java/C++/Python] Greedy

**Author:** lee215
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5473140/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5473140/)

---

# **Intuition**
1. Make the most expensive cut as early as possible, which leads to a greedy solution.
2. The order of `horizontalCut` and `verticalCut` doesn't matter, so we can sort them.
<br>

# **Explanation**
1. Sort cuts
2. Make the most expensive cut, and cut the slice into 1 * 1 cakes.
3. Repeat this.
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

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

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
<br>

# Solution 2: Python 1-Line #
Time `O(mn)`
Space `O(1)`
```py
    def minimumCost(self, m, n, h, v):
        return sum(h) + sum(v) + sum(map(min, product(h, v)))
```
