# Official Solution

**Link:** [https://leetcode.com/problems/my-calendar-i/solution/](https://leetcode.com/problems/my-calendar-i/solution/)

---

[TOC]

### Overview

The primary challenge in this problem is to find a proper data structure and an efficient algorithm to maintain all valid events, including **querying** potentially conflicting existing events and **inserting** new valid events.

In this solution article, we first start with a straightforward idea of brute force to warm up, then one step forward, we improve the naive approach to keep all existing events in sorted order and reduce the time complexity.

### Approach #1: Brute Force

**Intuition**

When booking a new event `[start, end)`, check if every current event conflicts with the new event. If none of them do, we can book the event.

**Algorithm**

We will maintain a list of interval *events* (not necessarily sorted). Evidently, two events `[s1, e1)` and `[s2, e2)` do *not* conflict if and only if one of them starts after the other one ends: either `e1 <= s2` OR `e2 <= s1`. By De Morgan's laws, this means the events conflict when `s1 < e2` AND `s2 < e1`.

**Implementation**

<iframe src="https://leetcode.com/playground/KWP7poit/shared" frameBorder="0" width="100%" height="344" name="KWP7poit"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of events booked.

* Time Complexity: $$O(N^2)$$. For each new event, we process every previous event to decide whether the new event can be booked. This leads to $$\sum_k^N O(k) = O(N^2)$$ complexity.

* Space Complexity: $$O(N)$$, the size of the `calendar`.

---

### Approach #2: Sorted List + Binary Search

**Intuition**

If we maintained our events in *sorted* order, we could check whether an event could be booked in $$O(\log N)$$ time (where $$N$$ is the number of events already booked) by binary searching for where the event should be placed. We would also have to insert the event in our sorted structure.

**Algorithm**

1. Initialize with an empty sorted list data structure `calendar`.
2. For every new interval`[start, end)` in `book()` invokation, we check if there is a conflict on each side with neighboring intervals.
    1. Lookup the first index `idx`, which maps to an element `[s1,e1)` in `calendar` and `s > start`, and this step can be conducted by binary search (see [this explore card](https://leetcode.com/explore/learn/card/binary-search/)) as we keep `calendar` in sorted order by starting points of intervals. (Notice that there may not be such an `idx` because `start` >= all kept intervals. In this case, we don't need to check the following step)
    2. Check if `end > s1`. If yes, `[start, end)` and `[s1,e1)` must be overlapped, `[start, end)` is illegal, and we should return false for the invokation now.
    3. Roll back to the index `idx-1`, which maps to an element `[s2,e2)` in `calendar` and `s1` is the largest staring points that satisfy `s1 <= start`. (Similarly, notice that there may be no element at `idx-1` because `idx` is the 0-th index. In this case, we don't need to check the following step either)
    4. Check if `e2 > start`. If yes, `[s2,e2)` and `[start, end)` must be overlapped, `[start, end)` is illegal, and we should return false for the invokation now.
    5. If `[start, end)` passes all checkings above, we insert this valid interval at `idx` in `calendar`.

**Implementation**

We need a data structure that keeps elements sorted and supports fast insertion. 
- In Java, a [`TreeMap`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/TreeMap.html) is the perfect candidate. 
- In C++, we can use `set` container and [`lower_bound` method](https://cplusplus.com/reference/set/set/lower_bound/).
- In Python, we can keep a [`SortedList`](https://grantjenks.com/docs/sortedcontainers/sortedlist.html).

<iframe src="https://leetcode.com/playground/c2gTvDNC/shared" frameBorder="0" width="100%" height="446" name="c2gTvDNC"></iframe>


**Complexity Analysis**

Like Approach 1, let $$N$$ be the number of events booked.

* Time Complexity: $$O(N \log N)$$. For each new event, we search that the event is legal in $$O(\log N)$$ time, then insert it in $$O(\log N)$$ time.

* Space Complexity: $$O(N)$$, the size of the data structures used.

> Note: In practice, for Python, if you use `bisect.insort()` or `list.insert()` to add new events to a built-in list as `calendar`, it will result in a time complexity as $$O(N)$$ instead of $$O(\log N)$$ for each insertion operation (see [the docs](https://docs.python.org/3/library/bisect.html#bisect.insort)). However, due to the built-in instruction optimization in `list.insert()` and the constraint of $$N \le 1000$$ in this problem, this $$O(N^2)$$ solution may somehow show a better performance in runtime. But we won't provide this solution code here because the time complexity matters.