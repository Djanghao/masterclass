# 🚀 [3 Approach]: Detailed Commented Code: From Sets [Brute Force] to Maps (Binary Search)! 🗓️

**Author:** AlgoArtisan
**Votes:** 86
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/5834347/](https://leetcode.com/problems/my-calendar-i/solutions/5834347/)

---

# Approach 1 : Brute Force Booking with Unordered Set \uD83D\uDED1 [TLE]

# Intuition
The idea is to track each time point between the start and end of each booking interval using an unordered set. This approach checks if any time point in the new interval is already booked, ensuring no overlap with existing bookings.

# Complexity
- Time Complexity: O(n), where n=(end\u2212start). We iterate over each time point in the interval.
- Space Complexity: O(S+n), where S is the total number of stored time points and 
n is the length of the current interval. This approach is inefficient for large intervals.

# Code
```cpp []
class MyCalendar {
public:
    unordered_set<int> m; // Stores individual time points

    MyCalendar() {}

    bool book(int start, int end) {
        unordered_set<int> subset; // Temporary set to store current interval
        for (int i = start; i < end; i++) {
            if (m.count(i) > 0) { // Check if any point is already booked
                return false;
            }
            subset.insert(i);
        }
        for (auto x : subset) { // Insert current interval points into main set
            m.insert(x);
        }
        return true;
    }
};
/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar* obj = new MyCalendar();
 * bool param_1 = obj->book(start,end);
 */
```

# Approach 2 : Brute Force Booking with pair [Optimized][Accepted]

# Complexity
- Time Complexity: O(k) (where k is the number of booked intervals)
- Space Complexity: O(k) (for storing booked intervals in the ranges vector)

# Code
```cpp []
class MyCalendar {
public:
    vector<pair<int, int>> ranges;
    MyCalendar() {}
    bool book(int start, int end) {
        for (auto const& pair : ranges) {
            int r_start = pair.first;
            int r_end = pair.second;
            if (start < r_end && end > r_start)
                return false;
        }
        ranges.push_back(make_pair(start, end));
        return true;
    }
};
```


# Approach 3: Efficient Booking with Binary Search in Maps \uD83D\uDD0D\uD83D\uDCC5 [Optimized][Accepted]

# Intuition
Instead of storing every time point, we can store the intervals themselves. Using a balanced data structure like map, we can efficiently check for overlaps by comparing the new interval against the boundaries of adjacent intervals.

# Complexity
- Time Complexity: O(logk), where k is the number of booked intervals.
- Space Complexity: O(k), as only the start and end points of each interval are stored.

# Code
```cpp []
class MyCalendar {
    map<int, int> intervals; // Stores intervals with start as key and end as value
public:
    MyCalendar() {}

    bool book(int start, int end) {
        auto next = intervals.lower_bound(start); // Find next interval
        if (next != intervals.end() && next->first < end) {
            return false; // Overlaps with next interval
        }
        if (next != intervals.begin() && prev(next)->second > start) {
            return false; // Overlaps with previous interval
        }
        intervals[start] = end; // No overlap, add interval
        return true;
    }
};
These exp
/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar* obj = new MyCalendar();
 * bool param_1 = obj->book(start,end);
 */
```

![image.png](./images/0.png)

