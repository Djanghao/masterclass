# Easy C++ Solution; Clean handling of edge cases.

**Author:** hai_mian_bao_bao
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/4582932/](https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/4582932/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Intuitively, this question is asking for the maximum number of overlapping intervals if we view each segment as an interval on the Y-axis. This can be solved by classic sweepline. 

However, special consideration needs to be taken because we cannot double count the endpoints, since they only contribute a single "cross".

Furthermore, its not necessarily the case that an optimal solution occurs at an integer Y-coordinate, which complicates things. 

For example, on the input `Y := {0, 1, 0, 1, 0}`, the optimal solution actually occurs at every Y-coordinate in the (exclusive) interval (0, 1), with 4 total intersections, but you'd never find it using a typical sweep line implementation since this interval doesn't include an integer.

# Approach
<!-- Describe your approach to solving the problem. -->
We use sweep line. To deal with the first issue, we need to ensure no segment has an overlap. To deal with this, I used the convention that each segment starts at `Y[i - 1]` and ends at `Y[i] - 1`, unless it is the last Y-coordinate in the list, in which case it needs to end at `Y[i]`. Notice each endpoint is included exactly once with this setup.

To deal with the second issue, we stretch all the start and endpoints by a factor of 2. This ensures an optimal solution will occur at some integer. In the example I provided above, the `Y` values becomes `{0, 2, 0, 2, 0}`, and an optimal solution occurs in the (exclusive) interval (0, 2). Luckily, this now contains `y = 1`, an integer, which sweepline will find.

# Complexity
- Time complexity:
You can either use a `std::map` or sort a `std::vector` of events (events are starting and ending of segments); either way `O(n log n)`.

- Space complexity:
Our map will contain at most 2 entries for each segment, so `O(n)`.

# Code
```
class Solution {
public:
    int maxIntersectionCount(vector<int>& Y) {
        int n = Y.size();
        map<int, int> events;
        for (int i = 1; i < n; ++i) {
            auto s = 2 * Y[i - 1], e = 2 * Y[i] + (i == n - 1 ? 0 : Y[i] > Y[i - 1] ? -1 : 1);
            ++events[min(s, e)], --events[max(s, e) + 1];
        }
        int count = 0, msf = 0;
        for (const auto& [y, c] : events) {
            msf = max(msf, count += c);
        }
        return msf;
    }
};
```