# [C++||Java||Python3] Binary search + sliding window, with comment

**Author:** RealFan
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3014952/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3014952/)

---

> **I know almost nothing about English, pointing out the mistakes in my article would be much appreciated.**

> **In addition, I'm too weak, please be critical of my ideas.**
---

# Intuition
1. Notice "Maximize the Minimum", obviously binary searching on the value domain should be considered.
2. When checking, traverse from $0$ to $n-1$ and count how many power stations are missing for each city.
3. Obviously, if a city is found to lack a power station, it should be greedily placed in the rightmost city which can heat it.

# Approach
1. Binary search for result. Notice the maximum possible value will not exceed $k+\\sum_{i=0}^{n-1}stations[i]$, binary search in this range. Each time, check if $k$ is sufficient.
2. Use a sliding window to maintain the number of power stations the current city has.
3. Each time, city $i+r$ may be added, while city $i-r-1$ may be removed. 

**Additional, I found that the same Python code accepted in [LeetCode CN](https://leetcode.cn/problems/maximize-the-minimum-powered-city/submissions/393714497/), but TLE in [LeetCode US](https://leetcode.com/contest/biweekly-contest-95/submissions/detail/873396839/).** 

**Interesting.**

# Complexity
- Time complexity: $O(n \\log (k+\\sum_{i=0}^{n-1}stations[i]))$
- Space complexity: $O(n)$

# Code
``` C++ []
class Solution {
public:
    long long maxPower(vector<int>& stations, int r, int k) {
        int n = stations.size();
        long long left = 0;
        long long right = k + accumulate(stations.begin(), stations.end(), 0ll);
        // v is the stations after adding
        vector<long long> v(n);
        while (left <= right) {
            long long x = (left + right) / 2;
            for (int i = 0; i < n; ++i) v[i] = stations[i];
            long long use = 0;
            // s maintains the power of city i
            // at first, it record the sum of v[0,r)
            long long s = accumulate(stations.begin(), stations.begin() + r, 0ll);
            for (int i = 0; i < n; ++i) {
                // add to t if needed
                int t = min(n - 1, i + r);
                // update s
                // find a city should be added
                if (i + r < n) s += v[i + r];
                // find a city should be removed
                if (i - r > 0) s -= v[i - r - 1];
                // mising power stations
                long long diff = max(0ll, x - s);
                v[t] += diff;
                s += diff;
                use += diff;
            }
            if (use <= k) left = x + 1;
            else right = x - 1;
        }
        return right;
    }
};
```
``` Java []
class Solution {
    public long maxPower(int[] stations, int r, int k) {
        int n = stations.length;
        long left = 0, right = k;
        for (int x: stations)
            right += x;
        // v is the stations after adding
        long []v = new long[n];
        while (left <= right) {
            long x = (left + right) / 2;
            for (int i = 0; i < n; ++i) 
                v[i] = stations[i];
            // s means the power of city i
            // at first, it record the sum of v[0,r)
            long s = 0, use = 0;
            for (int i = 0; i < r; ++i) 
                s += v[i];
            for (int i = 0; i < n; ++i) {
                // add to t if needed
                int t = Math.min(n - 1, i + r);
                // update s
                // find a city should be added
                if (i + r < n) s += v[i + r];
                // find a city should be removed
                if (i - r > 0) s -= v[i - r - 1];
                // mising power stations
                long diff = Math.max(0, x - s);
                v[t] += diff;
                s += diff;
                use += diff;
            }
            if (use <= k) left = x + 1;
            else right = x - 1;
        }
        return right;
    }
}
```
``` Python3 []
class Solution:
    def maxPower(self, stations: List[int], r: int, k: int) -> int:
        n = len(stations)
        left, right = 0, k + sum(stations)
        while left <= right:
            x = (left + right) // 2
            use = 0
            # v is the stations after adding
            v = stations.copy()
            # s means the power of city i
            # at first, it record the sum of v[0,r)
            s = sum(stations[0: r])
            for i in range(n):
                # add to t if needed
                t = n - 1 if n - 1 < i + r else i + r
                # update s
                # find a city should be added
                if i + r < n: s += v[i+r]
                # find a city should be removed
                if i - r > 0: s -= v[i-r-1]
                # mising power stations
                diff = x - s if x - s > 0 else 0 
                v[t] += diff
                s += diff
                use += diff
            
            if use <= k:
                left = x + 1
            else:
                right = x - 1
        return right
```