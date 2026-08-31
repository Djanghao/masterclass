# ✅Beat's 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 287
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/3785409/](https://leetcode.com/problems/non-overlapping-intervals/solutions/3785409/)

---

# Intuition:
1. Minimum number of intervals to remove .
2. Which is nothing but maximum number of intervals we can should keep.
3. Then it comes under Maximum Meeting we can attend.

<details>
<summary><strong>In Detail</strong></summary>

1. Removing minimum number of intervals is the same as KEEPING maximum number of intervals.

2. Now, if you look at it as scheduling maximum number of meetings in a room, then you should get it.
For those unfamiliar with the Meeting scheduling problem, it is similar to this problem here, but each interval [start,end] represents the start and end time of a meeting. As there is only one room and we can have only one meeting at a time, we want to find maximum number of meetings we can schedule (in other words reject minimum number of meetings).

3. Again we sort by end times. Why? Because regardless of when a meeting starts, a meeting that ends first leaves more time for other meetings to take place. We do not want a meeting that starts early and ends late, what we really care about is when the meeting ends and how much time it leaves for the other meetings. So, sort by endtimes, remove all overlapping meetings to get maximum meetings or reject minimum meetings. Same logic applies here in this problem.
</details>

# Explanation:
Imagine we have a set of meetings, where each meeting is represented by an interval [start_time, end_time]. The goal is to find the maximum number of non-overlapping meetings we can attend.

1. **Sorting by end times (`cmp` function):**
The function first sorts the intervals based on their end times in ascending order using the custom comparator `cmp`. This sorting is crucial because it allows us to prioritize intervals that finish early, giving us more opportunities to accommodate additional meetings later on.

2. **Initializing variables:**
The function initializes two variables, `prev` and `count`. The `prev` variable is used to keep track of the index of the last processed interval, and `count` is used to store the number of non-overlapping meetings found so far. We start `count` with 1 because the first interval is considered non-overlapping with itself.

3. **Greedy approach:**
The function uses a greedy approach to find the maximum number of non-overlapping meetings. It iterates through the sorted intervals starting from the second interval (index 1) because we've already counted the first interval as non-overlapping. For each interval at index `i`, it checks if the start time of the current interval (`intervals[i][0]`) is greater than or equal to the end time of the previous interval (`intervals[prev][1]`). If this condition is true, it means the current interval does not overlap with the previous one, and we can safely attend this meeting. In that case, we update `prev` to the current index `i` and increment `count` to reflect that we have attended one more meeting.

4. **Return result:**
Finally, the function returns the number of intervals that need to be removed to make the remaining intervals non-overlapping. Since we want to maximize the number of meetings we can attend, this value is calculated as `n - count`, where `n` is the total number of intervals.

# Code
```C++ []
class Solution {
public:
    static bool cmp(vector<int>& a, vector<int>& b){
        return a[1] < b[1];
    }

    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        int n = intervals.size();
        sort(intervals.begin(), intervals.end(), cmp);

        int prev = 0;
        int count = 1;

        for(int i = 1; i < n; i++){
            if(intervals[i][0] >= intervals[prev][1]){
                prev = i;
                count++;
            }
        }
        return n - count;
    }
};
```
```Java []
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        int n = intervals.length;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));

        int prev = 0;
        int count = 1;

        for (int i = 1; i < n; i++) {
            if (intervals[i][0] >= intervals[prev][1]) {
                prev = i;
                count++;
            }
        }
        return n - count;
    }
}
```
```Python3 []
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[1])
        n = len(intervals)

        prev = 0
        count = 1

        for i in range(1, n):
            if intervals[i][0] >= intervals[prev][1]:
                prev = i
                count += 1

        return n - count
```

**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**

