# [Java/C++/Python] Binary Search with Explanation

**Author:** lee215
**Votes:** 290
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/1908888/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/1908888/)

---

# **Intuition**
Binary search
<br>

# **Explanation**
Assume we want give each child `m` candies, for each pile of `candies[i]`,
we can divide out at most `candies[i] / m` sub piles with each pile `m` candies.

We can sum up all the sub piles we can divide out, then compare with the `k` children.

If `k > sum`, 
we don't allocate to every child, 
since the pile of `m` candidies it too big,
so we assign `right = m - 1`.

If `k <= sum`, 
we are able to allocate to every child, 
since the pile of `m` candidies is small enough
so we assign `left = m`.

We repeatly do this until `left == right`, and that's the maximum number of candies each child can get.
<br>

# **Tips**
Tip1.  `left < right` Vs `left <= right`

Check all my solution, I keep using `left < right`.
The easy but important approach: 
follow and upvote my codes,
try to do the same.
you'll find all binary search is similar,
never bother thinking it anymore.

Tip2. `mid = (left + right + 1) / 2` Vs `mid = (left + right) / 2`

`mid = (left + right) / 2` to find **first** element valid
`mid = (left + right + 1) / 2 `to find **last** element valid
<br>

# **Complexity**
Time `O(nlog10000000)`
Space `O(1)`
<br>

**Java**
```java
    public int maximumCandies(int[] A, long k) {
        int left = 0, right = 10_000_000;
        while (left < right) {
            long sum = 0;
            int mid = (left + right + 1) / 2;
            for (int a : A) {
                sum += a / mid;
            }
            if (k > sum)
                right = mid - 1;
            else
                left = mid;
        }
        return left;
    }
```

**C++**
```cpp
    int maximumCandies(vector<int>& A, long long k) {
        int left = 0, right = 1e7;
        while (left < right) {
            long sum = 0, mid = (left + right + 1) / 2;
            for (int& a : A) {
                sum += a / mid;
            }
            if (k > sum)
                right = mid - 1;
            else
                left = mid;
        }
        return left;
    }
```

**Python**
```py
    def maximumCandies(self, A, k):
        left, right = 0, sum(A) / k
        while left < right:
            mid = (left + right + 1) / 2
            if k > sum(a / mid for a in A):
                right = mid - 1
            else:
                left = mid
        return left
```
<br>

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
