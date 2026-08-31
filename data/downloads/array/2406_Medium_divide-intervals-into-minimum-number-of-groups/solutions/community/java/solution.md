# [Java/C++/Python] Meeting Room

**Author:** lee215
**Votes:** 160
**Link:** [https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/2560101/](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/2560101/)

---

# **Intuition**
Exactly same as meeting rooms.
<br>

# **Explanation**
At time point `intervals[i][0]`,
start using a meeting room(group).

At time point `intervals[i][1] + 1`,
end using a meeting room.

Sort all events by time,
and accumulate the number of room(group) used.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Java**
```java
    public int minGroups(int[][] intervals) {
        int res = 0, cur = 0, n = intervals.length, A[][] = new int[n * 2][2];
        for (int i = 0; i < n; ++i) {
            A[i * 2] = new int[]{intervals[i][0], 1};
            A[i * 2 + 1] = new int[]{intervals[i][1] + 1, -1};
        }
        Arrays.sort(A, Comparator.comparingInt(o -> o[0] * 3 + o[1]));
        for (int[] a: A)
            res = Math.max(res, cur += a[1]);
        return res;
    }
```

**C++**
Use verctor.
```cpp
    int minGroups(vector<vector<int>>& intervals) {
        vector<vector<int>> A;
        for (auto& v : intervals) {
            A.push_back({v[0], 1});
            A.push_back({v[1] + 1, -1});
        }
        int res = 0, cur = 0;
        sort(A.begin(), A.end());
        for (auto& v : A)
            res = max(res, cur += v[1]);
        return res;
    }
```
Use map
```cpp
    int minGroups(vector<vector<int>>& intervals) {
        map<int, int> A;
        for (auto& v : intervals)
            A[v[0]]++, A[v[1] + 1]--;
        int res = 0, cur = 0;
        for (auto& v : A)
            res = max(res, cur += v.second);
        return res;
    }
```
**Python**
```py
    def minGroups(self, intervals):
        A = []
        for a,b in intervals:
            A.append([a, 1])
            A.append([b + 1, -1])
        res = cur = 0
        for a, diff in sorted(A):
            cur += diff
            res = max(res, cur)
        return res
```
<br>

# More Sweep Line Problems
Here are some sweep line problems.
I'll make a summary for this method.
Let me know other related problems or my other related posts.
Good luck and have fun.

- [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
- [1094. Car Pooling](https://leetcode.com/problems/car-pooling/discuss/317610/JavaC++Python-Meeting-Rooms-III)
- [1109. Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/discuss/328856/JavaC%2B%2BPython-Straight-Forward-Solution)
<br>


# More Interval Problem
More similar intervals problems
- 252. Meeting Rooms
- [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
- 495. Teemo Attacking
- 616. Add Bold Tag in String
- 759. Employee Free Time
<br>
