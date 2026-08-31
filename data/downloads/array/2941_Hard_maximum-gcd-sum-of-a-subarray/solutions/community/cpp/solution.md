# Binary Search + Sparse Table.

**Author:** cpcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-gcd-sum-of-a-subarray/solutions/4318746/](https://leetcode.com/problems/maximum-gcd-sum-of-a-subarray/solutions/4318746/)

---

# Intuition
The gcd of subarray [i, j + 1] is smaller than the gcd of subarray [i, j]. In addition, the former is a divisor of the latter. It can be shown that, the number of all the gcd values for the subarrays starting with index i is at most log(nums[i]).

# Approach
For each index i, use binary search to find all longest subarrays starting with index i with the same gcd value. However, to get the gcd values of subarray faster, we can use sparseTable. I did try segment tree which has another factor of logn and got TLE.

# Complexity
- Time complexity:
O(nlogn * logV * logV) where V = max(nums[i])
One log V is for the number of different gcds per starting point and one is for the the gcd calculation.

- Space complexity:
O(nlogn)

# Code
```
class Solution {
    int get(const vector<vector<int>> &g, int from, int to) {
        const int ind = log2(to - from + 1);
        return gcd(g[from][ind], g[to - (1 << ind) + 1][ind]);
    }
public:
    long long maxGcdSum(vector<int>& nums, int k) {
        const int n = nums.size();
        vector<vector<int>> g(n, vector<int>(20));
        vector<long long> p(n + 1);
        for (int i = 0; i < n; ++i) {
            p[i + 1] = p[i] + nums[i];
            g[i][0] = nums[i];
        }
        for (int j = 1; j < 20; ++j) {
            for (int i = 0; i + (1 << j) <= n; ++i) {
                g[i][j] = gcd(g[i][j - 1], g[i + (1 << (j - 1))][j - 1]);
            }
        }
        long long r = 0;
        for (int i = 0; i < n; ++i) {
            for (int want = nums[i], left = i + 1; (p[n] - p[i]) * want > r;) {
                int right = n - 1;
                while (left <= right) {
                    const int mid = (left + right) >> 1;
                    if (get(g, i, mid) == want) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
                if (left - i >= k) {
                    r = max(r, (p[left] - p[i]) * want);
                }
                if (left >= n) break;
                want = gcd(want, nums[left]);
            }
        }
        return r;
    }
};
```