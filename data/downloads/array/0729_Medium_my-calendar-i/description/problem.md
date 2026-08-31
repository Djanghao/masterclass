# [729. My Calendar I](https://leetcode.com/problems/my-calendar-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4784 | 135 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`design`](https://leetcode.com/tag/design), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `uber`, `amazon`, `google`, `tiktok`, `flexport`, `bloomberg`, `oracle`

## Description

You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a **double booking**.

A **double booking** happens when two events have some non-empty intersection (i.e., some moment is common to both events.).

The event can be represented as a pair of integers `startTime` and `endTime` that represents a booking on the half-open interval `[startTime, endTime)`, the range of real numbers `x` such that `startTime <= x < endTime`.

Implement the `MyCalendar` class:

	- `MyCalendar()` Initializes the calendar object.

	- `boolean book(int startTime, int endTime)` Returns `true` if the event can be added to the calendar successfully without causing a **double booking**. Otherwise, return `false` and do not add the event to the calendar.

 

**Example 1:**

```

Input
[&quot;MyCalendar&quot;, &quot;book&quot;, &quot;book&quot;, &quot;book&quot;]
[[], [10, 20], [15, 25], [20, 30]]
Output
[null, true, false, true]

Explanation
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
```

 

**Constraints:**

	- `0 <= start < end <= 10^9`

	- At most `1000` calls will be made to `book`.

---

**Links:** [Submissions](https://leetcode.com/problems/my-calendar-i/) | [Solutions](https://leetcode.com/problems/my-calendar-i/)
