# [Java/C++/Python] Binary Search O(1) Space

**Author:** lee215
**Votes:** 259
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/3143697/](https://leetcode.com/problems/house-robber-iv/solutions/3143697/)

---

# **Intuition**
Hey Robber series,
old school DP problem,
I practiced thousands of times.

Wait, in classical Robber problem,
we usually want to maximize the value to steal.

Here we want to minimize the maximum house we steal.
So it's not a robber-like problem,
it's actually a mini-max problem.

When we mini-max one capacity to do something,
(here is robber `k` houses)
we can use bianry search.

When use binary search,
I suggest you using my template
```
while (left < right) {
    int mid = (left + right) / 2;
    if (condition)
        right = mid;
    else
        left = mid + 1;
}
return left;
```

<br>

# **Explanation**
Binary search the minimum capability of the robber
to steal at least `k` houses.

Given `1 <= A[i] <= 1e9`,
we can initial the binary search range as
`left = 1` and `right = 1e9`.
we can also set `left = min(A)` and `right = max(A)`.

Assume the capability is `mid`,
we iterate the houses `A`,
and greedily take the houses as many as possible,
if `mid > A[i]` and we didn't take `A[i-1]`.

Then we check if we have take `k` houses,
If `take >= k`,
we have big enough capability,
`right = mid`.
If `take < k`,
we don't have big enough capability,
`left = mid + 1`.

Finally we return the binary search result.
<br>

# **Complexity**
Time `O(nlogm)`,
where `m` is the range of A[i]
Space `O(1)`

We can also binary search the value in `sorted(set(A))`,
Time `O(nlogn)`,
Space `O(n)`.
<br>

**Java**
```java
    public int minCapability(int[] A, int k) {
        int left = 1, right = (int)1e9, n = A.length;
        while (left < right) {
            int mid = (left + right) / 2, take = 0;
            for (int i = 0; i < n; ++i)
                if (A[i] <= mid) {
                    take += 1;
                    i++;
                }
            if (take >= k)
                right = mid;
            else
                left = mid + 1;
        }
        return left; //left == right
    }
```

**C++**
```cpp
    int minCapability(vector<int>& A, int k) {
        int left = 1, right = 1e9, n = A.size();
        while (left < right) {
            int mid = (left + right) / 2, take = 0;
            for (int i = 0; i < n; ++i)
                if (A[i] <= mid) {
                    take += 1;
                    i++;
                }
            if (take >= k)
                right = mid;
            else
                left = mid + 1;
        }
        return left; //left == right
    }
```

**Python**
```py
    def minCapability(self, A: List[int], k: int) -> int:
        l, r = min(A), max(A)
        while l < r:
            m = (l + r) // 2
            last = take = 0
            for a in A:
                if last:
                    last = 0
                    continue
                if a <= m:
                    take += 1
                    last = 1
            if take >= k:
                r = m
            else:
                l = m + 1
        return l
```

# More Good Binary Search Problems
Here are some similar binary search problems.
Also find more explanations.
Good luck and have fun.

- 2226. [Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/discuss/1908888/JavaC%2B%2BPython-Binary-Search-with-Explanation)
- 1802. [Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/discuss/1119801/Python-Binary-Search)
- 1539. [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/discuss/779999/JavaC++Python-O(logN))
- 1482. [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/discuss/686316/javacpython-binary-search)
- 1283. [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/discuss/446376/javacpython-bianry-search)
- 1231. [Divide Chocolate](https://leetcode.com/problems/divide-chocolate/discuss/408503/Python-Binary-Search)
- 1011. [Capacity To Ship Packages In N Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/discuss/256729/javacpython-binary-search/)
- 875. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/discuss/152324/C++JavaPython-Binary-Search)
- 774. [Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/discuss/113633/Easy-and-Concise-Solution-using-Binary-Search-C++JavaPython)
- 410. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
<br>
