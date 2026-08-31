# Simple DP in C++, java & Python

**Author:** cpcs
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3868304/](https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3868304/)

---

# Intuition

Some conclusions:
1. Each number will be cleared to 0 at most once. Since if we clear a number twice, we can skip the first time setting to make everything earlier.
2. The numbers with larger increasing rates (nums2[.]) should be cleared to 0 later than the numbers with smaller rates.

So if the numbers are sorted by the rates (nums2[.]), we need to select (at most) n numbers to clear in order.

However, the difficulty is some numbers (with smaller rates) may not be selected when the sum matches the requriment.

# Approach
Create a matrix with n rows and n columns. (To make it simpler, let indices start from 1 here).
The ith row and jth column is nums1[i] + nums2[i] * j, which is the value each number will be after j seconds. 

The question changes into select j rows from the first j columns (one row per column), let the sum be s, we want sum(matrix[.][j]) - s <= x.
Here sum(matrix[.][j]) is the sum of all the values in jth column which is a constant = nums1[0..n - 1] + nums2[0..n - 1] * j and x is also a constant. So our goal is to make s as large as possible.

In general to select one column in each row can be solved by graph matching, but this question's constraints are too large to a graph matching algorithm.

We can use dyanmaic programming.

dp[i][j] means the maximum sum to select j columns from the first i rows (note j <= i).
dp[i][j] = max(dp[i - 1][j], dp[i][j - 1] + nums1[i] + j * nums2[i])
which is basically select the jth column or not.


# Complexity
- Time complexity:
O(n ^ 2)

- Space complexity:
O(n) if we do some optimizations on DP.

# Code
C++
```
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

Java
```
public class Solution {
    public int minimumTime(List<Integer> nums1, List<Integer> nums2, int x) {
        int n = nums1.size();
        Integer[] ind = new Integer[n]; // Using Integer array instead of int[]
        int s = 0, d = 0;
        for (int i = 0; i < n; ++i) {
            ind[i] = i;
            s += nums1.get(i);
            d += nums2.get(i);
        }
        if (s <= x) {
            return 0;
        }
        Arrays.sort(ind, (a, b) -> nums2.get(a) - nums2.get(b)); // Custom comparator
        int[] dp = new int[n + 1];
        int r = n + 1;
        for (int i = 1; i <= n; ++i) {
            for (int j = Math.min(i, r - 1); j > 0; --j) {
                dp[j] = Math.max(dp[j], dp[j - 1] + nums2.get(ind[i - 1]) * j + nums1.get(ind[i - 1]));
                if (s + j * d - dp[j] <= x) {
                    r = j;
                }
            }
        }
        return r <= n ? r : -1;
    }
}
```
Python:
```
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