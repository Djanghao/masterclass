# Official Solution

**Link:** [https://leetcode.com/problems/my-calendar-ii/solution/](https://leetcode.com/problems/my-calendar-ii/solution/)

---

## Solution

---

### Approach 1: Using Overlapped Intervals

#### Intuition

We are given a set of bookings in the form `[start, end)`, where `start` is included, but `end` is excluded, meaning the booking spans from `start` to `end - 1`. The function `book(start, end)` returns `true` if the booking can be added without causing a triple booking, and `false` otherwise. A triple booking occurs when three bookings overlap, such as `[[1, 5], [2, 4], [3, 4]]`, which all intersect between `[3, 4]`. The booking is only added if the function returns `true`.

The key problem is preventing a new booking from overlapping with two existing overlapping bookings, which would create a triple booking. For example, in the list `[[3, 10], [4, 8], [10, 15], [20, 25]]`, no triple booking occurs despite overlaps. However, adding `[5, 7]` would overlap with both `[[3, 10], [4, 8]]`, leading to a triple booking.

To handle this, we track double-overlapping bookings. When `book(start, end)` is called, we check if the new booking overlaps with any double-overlapped bookings. If it does, we return `false`; otherwise, we return `true`, add the booking, and update the double-overlapped list if necessary.

Checking for overlap between two bookings `(start1, end1)` and `(start2, end2)` is done by verifying if `max(start1, start2) < min(end1, end2)`. This condition excludes endpoint overlaps, as the intervals are half-open. If they overlap, the overlap interval is `(max(start1, start2), min(end1, end2))`, also half-open. This can also be observed in the below figure:

![fig](../Figures/731/731_overlapped_intervals.png)


#### Algorithm

1. Class `MyCalendarTwo` will have two data members, `bookings` which is the list of all bookings we will get, and `overlapBookings` a list of double overlapping bookings in the previous list. Initialize both as an empty list.
2. Define the function `doesOverlap(start1, end1, start2, end2)` which will return `true` if bookings `(start1, end1)` and `(start2, end2)` have an overlap.
3. Define the function `getOverlapped(start1, end1, start2, end2)` which will return the overlapping part of the bookings `(start1, end1)` and `(start2, end2)`.
4. Implement the function `book(start, end)` as follows:

    - Check if the bookings `(start, end)` overlap with any booking in the list `overlapBookings`, if yes we can return `false` from here.
    - Iterate over the list `bookings` and check if `(start, end)` overlaps with any booking in it. If yes, add the overlapped part in the list `overlapBookings`.
    - Add the booking `(start, end)` to the list `booking`.
    - If we reach here, we can return `true` as no triple booking happened.


#### Implementation

<iframe src="https://leetcode.com/playground/EgFDqNK4/shared" frameBorder="0" width="100%" height="500" name="EgFDqNK4"></iframe>

#### Complexity Analysis

Here, $N$ is the size of the list of `bookings`.

- Time complexity: $O(N)$

  The time complexity for the `book(start, end)` function is $O(N)$ because we iterate through the `bookings` list to check for overlaps and possibly add a new booking. Additionally, we check the `overlapBookings` list, which tracks overlaps. Since the size of `overlapBookings` is always smaller than or equal to the size of `bookings`, the overall time complexity remains $O(N)$.

- Space complexity: $O(N)$

  We maintain two lists: `bookings` for all the bookings and `overlapBookings` for the overlapping intervals. The size of `overlapBookings` can never exceed the size of `bookings`, so the total space complexity is $O(N)$.
---

### Approach 2: Line Sweep

#### Intuition

The previous approach works well for the given problem, where we need to avoid triple bookings. However, if the requirements change such as checking for four overlapping bookings, the method becomes less flexible. We'd need to introduce additional lists, for example, to track triple bookings, making the solution harder to maintain and extend.

To address this, we can use a more flexible and standard solution: the **Line Sweep** algorithm. This approach is common for interval-related problems and can easily handle changes, such as checking for four or more overlapping bookings.

The Line Sweep algorithm works by marking when bookings start and end. For each booking `(start, end)`, we mark the `start` point by increasing its count by `1` (indicating a booking begins), and we mark the `end` point by decreasing its count by `1` (indicating a booking ends). These marks are stored in a map, which keeps track of the number of bookings starting or ending at each point.

Once all bookings are processed, we compute the prefix sum over the map. The prefix sum at any point tells us how many active bookings overlap at that moment. If the sum at any point exceeds `2`, it means we have a triple booking. At this point, the function should return `false` to prevent adding a new booking. If no triple booking is found, the function returns `true`, and the booking is allowed.

This approach is easily extendible. If we wanted to check for four or more bookings instead of three, we would simply adjust the threshold from `2` to `3` when calculating the prefix sum. This flexibility makes the Line Sweep method a more robust solution for variations of the problem.

![fig](../Figures/731/731_line_sweep.png)

#### Algorithm

1. Class `MyCalendarTwo` will have two data members, `maxOverlappedBooking` which is the maximum number of concurrent bookings possible at a time, and `bookingCount` which is a map from integer to integer with the time point as the key and number of bookings as the value.
2. Initialize `maxOverlappedBooking` as `2`, as we need to check for triple booking.
3. Define the function `book(start, end)` as:

    - Increase the number of bookings for the time `start` and decrease the number of bookings for `end` by `1` in the map `bookingCount`.
    - Iterate over each key-value pair in the map in ascending order of keys to find the prefix sum. Add the value in the map to the count `overlappedBooking`.
    - If `overlappedBooking` is more than two, it implies that this is triple booking. Hence, we should return false. Also, we need to revert the changes in the map as this booking shouldn't be added.
    - If we reach here, it implies no triple booking and hence returns `true`.

> Note: In the provided CPP solution, numbers are erased from a map after insertion if they are deemed unnecessary. However, instead of using `iterator erase(iterator first, iterator last)`, which operates in $O(1)$ time, we opt for `size_type erase(const Key& key)`, resulting in $O(log n)$ complexity. A micro optimization would be to obtain iterator positions from the insertion, allowing for direct erasure in constant time. 

#### Implementation

<iframe src="https://leetcode.com/playground/MGcDSKpz/shared" frameBorder="0" width="100%" height="500" name="MGcDSKpz"></iframe>

#### Complexity Analysis

Here, $N$ is the size of the list of `bookings`.

- Time complexity: $O(N)$

  The time complexity for the `book(start, end)` function is $O(N)$. This is because, we iterate over the bookings entries in the map and find the prefix sum. The number of entries would be $O(N)$ and for each of these we can have $3$ operations with $O(\log N)$ complexity. Because once we find out the triple booking, we return from there and hence no more iteration is required. Hence the time complexity for the function `book(start, end)` becomes $O(N)$.

- Space complexity: $O(N)$

  The space complexity is $O(N)$ because we store the start and end points of each booking in the map. Each booking requires two entries in the map, so for $N$ bookings, we store $2N$ entries. Therefore, the space complexity is proportional to $N$.

---