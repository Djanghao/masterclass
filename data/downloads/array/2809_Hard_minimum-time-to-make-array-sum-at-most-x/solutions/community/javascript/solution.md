# Minimum Time to Process Arrays with Constraints Beats 81.20%

**Author:** kumarritul089
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/4878137/](https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/4878137/)

---

# Intuition
The problem seems to involve finding the minimum time required to perform certain operations on two arrays while satisfying certain conditions. 

# Approach
1. We start by calculating the total sums of both arrays, `nums1` and `nums2`, and storing the indices in a separate vector.
2. If the sum of `nums1` is less than or equal to `x`, then we can return 0 as no operations are needed.
3. Otherwise, we sort the indices based on the values of `nums2`.
4. We then utilize dynamic programming to find the minimum time. We iterate over the sorted indices and calculate the time taken for each possible number of elements from `nums2` to be processed, considering the time it takes to process elements from both arrays.
5. We keep track of the minimum time found so far, updating it whenever we find a new minimum time that satisfies the given condition.
6. Finally, we return the minimum time found or -1 if it's not possible to satisfy the condition.

# Complexity
- Time complexity:
  - Sorting the indices based on `nums2` takes O(n*log(n)) time.
  - The dynamic programming approach takes O(n^2) time.
  - Therefore, the overall time complexity is O(n^2).
- Space complexity:
  - We use additional space for the `ind` vector and the `dp` vector, both of size `n`, resulting in a space complexity of O(n).

# Code
``` C++ []
class Solution {
public:
    int minimumTime(vector<int>& nums1, vector<int>& nums2, int x) {
        const int n = nums1.size();
        vector<int> ind(n);
        int s = 0, d = 0;
        for (int i = 0; i < n; ++i) {
            ind[i] = i;
            s += nums1[i];
            d += nums2[i];
        }
        if (s <= x) {
            return 0;
        }
        sort(ind.begin(), ind.end(), [&](const int a, const int b) {
            return nums2[a] < nums2[b];
        });
        vector<int> dp(n + 1);
        int r = n + 1;
        for (int i = 1; i <= n; ++i) {
            for (int j = min(i, r - 1); j; --j) {
                dp[j] = max(dp[j], dp[j - 1] + nums2[ind[i - 1]] * j + nums1[ind[i - 1]]);
                if (s + j * d - dp[j] <= x) {
                    r = j;
                }
            }
        }
        return r <= n ? r : -1;
    }
};
```
```javascript []
function minimumTime(nums1, nums2, x) {
    const n = nums1.length;
    let ind = Array.from({ length: n }, (_, i) => i);
    let s = 0, d = 0;
    
    for (let i = 0; i < n; ++i) {
        s += nums1[i];
        d += nums2[i];
    }
    
    if (s <= x) {
        return 0;
    }
    
    ind.sort((a, b) => nums2[a] - nums2[b]);
    let dp = new Array(n + 1).fill(0);
    let r = n + 1;
    
    for (let i = 1; i <= n; ++i) {
        for (let j = Math.min(i, r - 1); j; --j) {
            dp[j] = Math.max(dp[j], dp[j - 1] + nums2[ind[i - 1]] * j + nums1[ind[i - 1]]);
            if (s + j * d - dp[j] <= x) {
                r = j;
            }
        }
    }
    
    return r <= n ? r : -1;
}

```
```python []
class Solution:
    def minimumTime(self, nums1: List[int], nums2: List[int], x: int) -> int:
        n = len(nums1)
        ind = list(range(n))
        s, d = 0, 0
        for i in range(n):
            s += nums1[i]
            d += nums2[i]
        if s <= x:
            return 0

        # Custom comparator for sorting ind based on nums2 values
        ind.sort(key=lambda i: nums2[i])

        dp = [0] * (n + 1)
        r = n + 1
        for i in range(1, n + 1):
            for j in range(min(i, r - 1), 0, -1):
                dp[j] = max(dp[j], dp[j - 1] + nums2[ind[i - 1]] * j + nums1[ind[i - 1]])
                if s + j * d - dp[j] <= x:
                    r = j
        return r if r <= n else -1
```

