# Official Solution

**Link:** [https://leetcode.com/problems/count-days-without-meetings/solution/](https://leetcode.com/problems/count-days-without-meetings/solution/)

---

[TOC]

## Solution

---

### Approach 1: Line Sweep

#### Intuition

We need to find the number of available days when no meetings are scheduled. We are given a total number of `days`, representing the maximum number of days an employee can work, and a `2D` array `meetings`, where each meeting `[start, end]` specifies the range of days the meeting occurs (inclusive).

!?!../Documents/3169/slideshow1.json:960,540!?!

A simple approach would be to iterate through each meeting, decreasing `days` whenever a scheduled meeting is found, until every meeting has been explored. However, given the constraints where `meetings` can be as large as `10^5` and `days` can be as large as `10^9`, this approach is too slow. Each meeting might require traversing all possible values of `days`, leading to an impractical time complexity.

To optimize this, we need a more efficient way to apply the ranges of `meetings`. Instead of accessing each element in a meeting range individually, we can take advantage of a difference map. A map is used over an array to avoid allocating up to `10^9` elements based on the size of `days`. This technique allows us to apply a range update in constant time. The key idea is to store the changes at the boundaries of the range rather than updating every element inside it. For a meeting `[start, end]`, we add `1` to `dayMap[start]`, and subtract `1` from `dayMap[end + 1]`. When we later compute the prefix sum of this difference map, it reconstructs the actual values efficiently. This way, instead of updating each element up to `days` individually, we can process all meetings in an optimized manner.

After applying the ranges of each meeting, we can now work on finding the days without scheduled meetings (say `freeDays`). First, we add any days without a meeting before the first meeting (starting at day `1`) to `freeDays`. We then track the prefix sum at each element in `dayMap`. When the prefix sum is ever `0`, we add the difference of the current and previous indices to represent the current range of days without meetings. Finally, we add any days without meetings after the last meeting (up to `days`) to `freeDays` and return the total as our answer.

Here, we can look at how the difference map can be applied to this problem:

!?!../Documents/3169/slideshow2.json:960,540!?!

#### Algorithm

- Initialize:
    - `dayMap` as a map to track the starting and ending times of the meetings.
    - `prefixSum` to `0` to track how many meetings are scheduled for the current day.
    - `freeDays` to `0` to count the number of days with no meeting scheduled.
    - `previousDay` to `days` to track the previous day checked.
- Iterate through `meetings`. For each meeting, `[start, end]`:
    - Increment `dayMap[start]` by `1` to update the start of the range.
    - Decrement `dayMap[end + 1]` to update the end of the range.
    - Set `previousDay` to the minimum of `previousDay` and `start` to update the first day with a meeting.
- Increment `freeDays` by `previousDay - 1` to represent the number of days without a meeting before the first day with a meeting.
- Iterate through `dayMap`. For each key-value pair, `[currentDay, count]`
    - If `prefixSum` equals `0`, increase `freeDays` by `currentDay - previousDay` to add the current gap found with no meeting scheduled.
    - Increment `prefixSum` by `count`.
    - Set `previousDay` to `currentDay`.
- Increment `freeDays` by `days - previousDay + 1` to represent the remaining days without a meeting.
- Return `freeDays`.

#### Implementation

<iframe src="https://leetcode.com/playground/ZqdspZbT/shared" frameBorder="0" width="100%" height="500" name="ZqdspZbT"></iframe>

#### Complexity Analysis

Let $N$ be the size of `meetings`.

* Time Complexity: $O(N \cdot log(N))$

    To begin, we iterate through each element of `meetings`. For each meeting, we insert elements into `dayMap`, which are $O(log n)$ operations on average due to the use of ordered maps. This leads to a time complexity of $O(N \cdot log(N))$ for this step.

    Next, we iterate through the elements in `dayMap`. For each iteration, we perform arithmetic operations in constant time. In the worst case, we iterate up to $2 \cdot N$ times if each meeting inserts two distinct elements into `dayMap`. This leads to a time complexity of $O(2 \cdot N)$, which can be simplified to $O(N)$.

    Combining these time complexities leads to an overall time complexity of $O(N \cdot log(N) + N)$, which can be simplified to $O(N \cdot log(N))$.

* Space Complexity: $O(N)$

    The space complexity is determined by the ordered map `daysMap`. In the worst case, the map has to store $2 \cdot N$ unique elements if there are no repeated starting or ending time points in `meetings`. This leads to an overall space complexity of $O(2 \cdot N)$, which can be simplified to $O(N)$.

---

### Approach 2: Sorting

#### Intuition

In the previous approach, we used a map to efficiently track meeting schedules, but this required additional space to store boundary changes for each meeting. Since each meeting contributes up to two unique entries in the map, the space complexity grows linearly with the number of meetings. To optimize space usage, we need a solution that avoids maintaining an extra data structure for storing these intervals.

A more space efficient approach relies on sorting the `meetings` array based on the starting times of meetings. By doing so, we can process meeting intervals in order and determine gaps where no meetings are scheduled without needing a separate map to track changes. The key observation here is that if meetings are sorted, any gap between the current latest end time and the next meeting’s start time represents a range of free days.

With this in mind, we can maintain a variable `latestEnd`, initialized to `0`, which keeps track of the latest ending time of meetings encountered so far. After sorting the meetings, we iterate through them one by one. For each meeting `[start, end]`, we check if `start > latestEnd + 1`. If this condition holds, it means there is a gap between `latestEnd` and `start`, representing a range of days with no scheduled meetings. We add the length of this gap (`start - latestEnd - 1`) to our count of free days. Since `latestEnd` starts at `0`, this check also accounts for any free days before the first scheduled meeting (starting from day `1`). 

After processing a meeting, we update `latestEnd` to be the maximum of its current value and the `end` of the current meeting, ensuring we always track the furthest scheduled day. Once all meetings have been processed, we add any remaining free days after the last meeting (up to `days`) to our count.

Through this process, we only process the ranges of each meeting while avoiding the use of any data structures dependent on the input size.

#### Algorithm

- Initialize:
    - `freeDays` to 0 to count the number of days with no meeting scheduled.
    - `latestEnd` to 0 to track the latest time a meeting ends.
- Sort `meetings` based on starting times.
- Iterate through `meetings`. For each meeting, `[start, end]`:
    - If `start > latestEnd + 1`, meaning there is a gap where no meeting is scheduled:
        - Increase `freeDays` by `start - latestEnd - 1` to represent the current range of days without a meeting.
    - Update `latestEnd` to the maximum of `latestEnd` and `end`.
- Increase `freeDays` by `days - latestEnd` to represent the remaining days without a meeting.
- Return `freeDays`.

#### Implementation

<iframe src="https://leetcode.com/playground/VN8YytpG/shared" frameBorder="0" width="100%" height="497" name="VN8YytpG"></iframe>

#### Sorting

Let $N$ be the size of `meetings`.

* Time Complexity: $O(N \cdot log(N))$

    To begin, we sort `meetings` chronologically based on starting times. This takes $O(N \cdot log (N))$.

    Next, we iterate through each element of `meetings`. For each iteration, we perform arithmetic operations in constant time. This leads to a time complexity of $O(N)$.

    Combining these time complexities leads to an overall time complexity of $O(N \cdot log(N) + N)$, which can be simplified to $O(N \cdot log(N))$.

* Space complexity: $O(\log⁡⁡ N)$ or $O(N)$.

    No extra space is needed apart from a few variables. However, some space is required for sorting.
    
    The space complexity of the sorting algorithm depends on the implementation of each programming language.
    
    For instance, in Java, the `Arrays.sort()` for primitives is implemented as a variant of the quicksort algorithm whose space complexity is $O(\log⁡⁡ N)$.
    In C++ `sort()` function provided by STL is a hybrid of Quick Sort, Heap Sort, and Insertion Sort and has a worst-case space complexity of $O(\log⁡⁡ N)$.
    In Python, the sort method sorts a list using the Tim Sort algorithm which is a combination of Merge Sort and Insertion Sort and uses $O(N)$ additional space. Thus, the inbuilt `sort()` function might add up to $O(\log⁡⁡ N)$ or $O(N)$ to the space complexity.

---