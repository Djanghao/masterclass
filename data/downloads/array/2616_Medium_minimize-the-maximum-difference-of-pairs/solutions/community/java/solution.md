# [Java/C++/Python] Binary Search

**Author:** lee215
**Votes:** 197
**Link:** [https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3395750/](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3395750/)

---

# **Intuition**
To solve mini-max problem,
we can apply binary search.
<br>

# **Explanation**
First we don't care the original order of `A[i]`,
we want to compare the difference,
so we sort them.

The result is in range of `left = 0` and `right = A[n - 1] - A[0]`
each iteration of search,
we assume the minimum maximum differenceis `mid = (left + right) / 2`,
then we check if we can have `p` pairs.

We take pairs `(A[i], A[i - 1])` greedily if `A[i] - A[i - 1] <= mid`.
If we take this pair, we move to next availble pair `(A[i + 2], A[i + 1])`
If not, we move to next availble pair `(A[i + 1], A[i])`

In the end of each iteration,
we check if we can have `p` pairs.
If so, `mid` is big enough, `right = mid`
If not, `mid` is too small, `left = mid + 1`.

Finally we return the binary seach result `left`.
<br>

# **Complexity**
Time `O(nlog(max(A)) + nlogn)`
Space `O(logn)`
<br>

**Java**
```java
    public int minimizeMax(int[] A, int p) {
        Arrays.sort(A);
        int n = A.length, left = 0, right = A[n - 1] - A[0];
        while (left < right) {
            int mid = (left + right) / 2, k = 0;
            for (int i = 1; i < n && k < p; ++i) {
                if (A[i] - A[i - 1] <= mid) {
                    k++;
                    i++;
                }
            }
            if (k >= p)
                right = mid;
            else
                left = mid + 1;
        }
        return left;
    }
```

**C++**
```cpp
    int minimizeMax(vector<int>& A, int p) {
        sort(A.begin(), A.end());
        int n = A.size(), left = 0, right = A[n - 1] - A[0];
        while (left < right) {
            int mid = (left + right) / 2, k = 0;
            for (int i = 1; i < n && k < p; ++i) {
                if (A[i] - A[i - 1] <= mid) {
                    k++;
                    i++;
                }
            }
            if (k >= p)
                right = mid;
            else
                left = mid + 1;
        }
        return left;
    }
```

**Python**
```py
    def minimizeMax(self, A: List[int], p: int) -> int:
        A.sort()
        n = len(A)
        left, right = 0, A[-1] - A[0]
        while left < right:
            mid = (left + right) // 2
            k = 0
            i = 1
            while i < n:
                if A[i] - A[i - 1] <= mid:
                    k += 1
                    i += 1
                i += 1
            if k >= p:
                right = mid
            else:
                left = mid + 1
        return left
```
<br>

# More Good Binary Search Problems
Here are some similar binary search problems.
Also find more explanations.
Good luck and have fun.

- 2616. [Minimize the Maximum Difference of Pairs](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/discuss/3395750/JavaC%2B%2BPython-Binary-Search)
- 2560. [House Robber IV](https://leetcode.com/problems/house-robber-iv/discuss/3143697/JavaC%2B%2BPython-Binary-Search-O(1)-Space)
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

