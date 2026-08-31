# Beats 100% TC & SC | Simple and Easy to understand | Python | CPP | Java

**Author:** 4ty7
**Votes:** 81
**Link:** [https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5901109/](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5901109/)

---

# Intuition
We need to group intervals so that no intervals in the same group overlap. By sorting start and end times, we can track how many intervals overlap at any point. If a new interval starts after an earlier one ends, we can reuse that group. Otherwise, we need a new group.

# Approach
1. **Sort start and end times**: Sorting helps track when intervals start and end.
2. **Two pointers**: 

   - `start_ptr` iterates through start times.
   - `end_ptr` tracks the earliest end time. If the current interval starts after the earliest end, reuse a group by incrementing `end_ptr`; otherwise, create a new group.
3. **Result**: The number of active groups after processing all intervals is the minimum number of groups required.
# Complexity
- Time complexity:
$$O(NLogN)$$

- Space complexity:
$$O(N)$$

# Code
```python3 []
class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        start_times = sorted(i[0] for i in intervals)
        end_times = sorted(i[1] for i in intervals)
        end_ptr, group_count = 0, 0

        for start in start_times:
            if start > end_times[end_ptr]:
                end_ptr += 1
            else:
                group_count += 1

        return group_count

```
```cpp []
class Solution {
public:
    int minGroups(vector<vector<int>>& intervals) {
        vector<int> start_times, end_times;

        // Extract start and end times
        for (const auto& interval : intervals) {
            start_times.push_back(interval[0]);
            end_times.push_back(interval[1]);
        }

        // Sort start and end times
        sort(start_times.begin(), start_times.end());
        sort(end_times.begin(), end_times.end());

        int end_ptr = 0, group_count = 0;

        // Traverse through the start times
        for (int start : start_times) {
            if (start > end_times[end_ptr]) {
                end_ptr++;
            } else {
                group_count++;
            }
        }

        return group_count;
    }
};
```
```java []
class Solution {
    public int minGroups(int[][] intervals) {
        int n = intervals.length;
        int[] start_times = new int[n];
        int[] end_times = new int[n];

        // Extract start and end times
        for (int i = 0; i < n; i++) {
            start_times[i] = intervals[i][0];
            end_times[i] = intervals[i][1];
        }

        // Sort start and end times
        Arrays.sort(start_times);
        Arrays.sort(end_times);

        int end_ptr = 0, group_count = 0;

        // Traverse through the start times
        for (int start : start_times) {
            if (start > end_times[end_ptr]) {
                end_ptr++;
            } else {
                group_count++;
            }
        }

        return group_count;
    }
}
```