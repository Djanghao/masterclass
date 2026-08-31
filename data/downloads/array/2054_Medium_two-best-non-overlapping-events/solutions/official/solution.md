# Official Solution

**Link:** [https://leetcode.com/problems/two-best-non-overlapping-events/solution/](https://leetcode.com/problems/two-best-non-overlapping-events/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a 2D integer array of events where each event starts at `startTime`, ends at `endTime`, and pays a `value` if attended. Return the maximum profit possible from picking up to 2 non-overlapping events.

> Note: The start time and end time are inclusive: that is, you cannot attend two events where one of them starts and the other ends at the same time.

---

### Approach 1: Top-down Dynamic Programming

#### Intuition   

Observe that for each event, we have two choices: attend the event or skip it. Given this binary decision structure at each step, we can use recursion to solve the problem. At each event, we recursively evaluate both options: attend the event and move to the next valid event (skipping overlapping ones), or skip the current event and move to the next. By combining the results of these subproblems, we can determine the maximum value achievable. However, the problem constraints allow us to solve it in linear or log-linear time complexity.

How many independent subproblems or recursive states do we have in this problem? Assuming for an index `i`, we have `3` possibilities: 0, 1, or 2 events picked. Therefore, the total number of subproblems remains limited to $$n \cdot 3$$. In every recursive iteration, we have three choices. Therefore, for a sequence of `n` iterations, there are a total of `3^n` possible choices. This number is significantly greater than the actual number of unique subproblems, as many calculations are redundant. These redundant calculations can be optimized by caching their results.

To achieve this, we can create a `memo` matrix to store the results of these computations. Specifically, `memo[index][k]` stores the solution to the subproblem where we are at `index` and have picked `k` events so far. This technique is known as [memoization](https://en.wikipedia.org/wiki/Memoization), and it helps us avoid recalculating repeated subproblems.

Once we select an event, we need to identify non-overlapping events that we can move to next.

One way to handle this is by first sorting the array of events based on their starting times. For the current `index` in the recursion, we can efficiently find the next valid event (one whose start time is greater than the current event's end time) by using binary search. Since the array is sorted by `start`, binary search allows us to jump to the next valid event with the smallest starting time just greater than the current event's ending time.

The recursive function should receive the current event index, `idx`, and a count, `cnt`, representing the number of events selected so far.
- If two events have already been selected `(cnt == 2)` or if all events have been processed (`idx` is out of bounds), it returns 0, as no further events can be selected.
- For each event at index `idx`, the function computes two possible outcomes: including the current event in the selection or excluding it.
    - If the current event is included, a binary search is performed to find the next event that starts after the current event's end time. The result of including the event is the sum of the event's value and the recursive result of selecting the next event, incrementing the count of selected events.
    - Otherwise, we exclude the current event and call the recursive function on the next index.
The recurrence chooses the maximum value between including or excluding the current event, which is then stored in the `dp` table to avoid redundant calculations. The result for a given state `(idx, cnt)` is thus the maximum of either selecting or skipping the current event, ensuring optimal selection of up to two non-overlapping events.

#### Algorithm

Main Function
1. Determine `n` as the number of events.
2. Create a 2D array `dp` of size `n x 3`, initialized to -1. `dp[idx][k]` indicates the maximum value attainable when considering the events starting from index `idx`, with `k` events selected so far.
3. Sort the `events` array in ascending order by their start times.
4. Call the function (defined below) with the initial state: `findEvents(events, 0, 0, dp)`

Recursive Function - `findEvents(events, idx, cnt, dp)`
1. If `cnt` equals 2 or `idx` is out of bounds, return 0.
2. If `dp[idx][cnt]` equals `-1`, compute the result:
    - Let `end` be the end time of the current event `(events[idx][1])`.
    - Perform a binary search on `events` to find the first event starting after `end`. Use two pointers, `lo` and `hi`:
    - While `lo < hi`, calculate `mid = lo + ((hi - lo) >> 1)`.
        - If `events[mid][0] > end`, update `hi = mid`; otherwise, update `lo = mid + 1`.
    - Calculate `include` as the sum of the current event value `(events[idx][2])` and the result of recursively calling `findEvents` with `lo` (if the start time of the event at lo is valid) and `cnt + 1`.
    - Calculate `exclude` as the result of recursively calling findEvents with `idx + 1` and `cnt`.
    - Store the maximum of `include` and `exclude` in `dp[idx][cnt]`.
3. Return `dp[idx][cnt]`.

#### Implementation

<iframe src="https://leetcode.com/playground/JVD2SUwP/shared" frameBorder="0" width="100%" height="500" name="JVD2SUwP"></iframe>

#### Complexity Analysis

Let $n$ be the number of events in the `events` array.

- Time Complexity: $O(n \cdot \log n)$

    The algorithm sorts the array of events by their starting times, which takes $O(n \cdot \log n)$ time. Calculating the maximum value for each event index involves solving recursive subproblems. For each of the `n` events, we compute the result for `3` states (0, 1, or 2 elements picked), and finding the next valid event using binary search takes $O(\log n)$ time.

    Memoization ensures that each subproblem is solved only once, avoiding redundant computations. Therefore, the overall time complexity is given by $O(n \cdot \log n)$.

- Space complexity: $O(n)$

    The algorithm requires $O(n)$ space for the `memo` array, which stores the precomputed values of subproblems to avoid redundant calculations during recursion. Also, the recursion depth contributes $O(n)$ stack space.

    Apart from this, the space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and  Insertion Sort and has $O(l)$ additional space, where `l` is the size of the list.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.
    
    Therefore, the total space complexity is given by $O(n)$.

---

### Approach 2: Min-heap

#### Intuition   

In the previous approach, we solved the problem recursively by sorting the events in increasing order of their start times. The key observation is that for every event, we need to calculate the potential maximum sum if it's paired with an earlier event. Since we are processing the list in the sorted order of start times, we'd need to store all end times up to the current index in a sorted order, and find the maximum value where the end time is less than the start time. We can use a priority queue (min-heap) that can help us to efficiently track and remove events that end before the current event starts. A priority queue provides efficient access to the highest or lowest priority element, with $O(\log n)$ insertion and deletion operations while maintaining a heap structure.

A [priority queue (min-heap)](https://leetcode.com/explore/featured/card/heap/) is used to store events as pairs of `(end time, value)` so that we can efficiently manage events that might overlap with the current event. Alongside, a variable `maxVal` tracks the highest value of a single event encountered so far, which is used to calculate the maximum sum when combined with the current event.

As we process each event, we remove all valid events from the priority queue that end before the current event starts, as they are guaranteed not to overlap. While removing these events, we update `maxVal` to store the highest value of these popped events. For the current event, we calculate the maximum possible sum by adding its value to `maxVal`, representing the best event that ended before the current event started, and update the `maxSum` if this sum is greater. The current event is then added to the priority queue to be considered for future combinations.

#### Algorithm

- Create a min-heap (`pq`) to store pairs of event ending times and their corresponding values.
- Sort the `events` array in ascending order by the start times of the events.
- Initialize:
    - `maxVal` as 0 to store the maximum event value encountered so far.
    - `maxSum` as 0 to store the maximum sum of two non-overlapping event values.
- Iterate through the `events` array:
    - For each `event`, while the heap is not empty and the ending time of the event at the top of the heap is less than the current event's start time:
        - Update `maxVal` to the maximum of its current value and the value from the top of the heap.
        - Remove the top element from the heap.
    - Update `maxSum` to the maximum of its current value and the sum of `maxVal` and the current event's value.
    - Push the current event's end time and value as a pair into the heap.
- Return `maxSum` as the result after processing all events.

!?!../Documents/2054/slideshow.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/4PHBYiVc/shared" frameBorder="0" width="100%" height="500" name="4PHBYiVc"></iframe>


#### Complexity Analysis

Let $n$ be the number of events in the `events` array.

- Time Complexity: $O(n \cdot \log n)$

    The algorithm sorts the events by their start times, which takes $O(n \cdot \log n)$. While iterating through the event list, the algorithm performs operations related to the priority queue (min-heap) for each event. Popping from the heap and pushing a new event both take $O(\log n)$, leading to a total of $O(n \cdot \log n)$ for all these operations.

    Combining all steps, the overall time complexity is given by $O(n \cdot \log n)$.

- Space complexity: $O(n)$

    The algorithm requires $O(n)$ space for the priority queue in the worst case.

    Apart from this, the space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(l)$ additional space, where `l` is the size of the list.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

    Therefore, the total space complexity is given by $O(n)$.

---

### Approach 3: Greedy

#### Intuition   

Is there a way to find the maximum sum without using a binary search? The problem with previous approaches is that since we can only sort based on either the start time or the end time, we need to use binary search and dynamic programming to find the most optimal values.

To find the best second element without using binary search, we can combine the start and end times into a single array, with a flag to differentiate between them. After sorting this array, with end times processed before start times in case of ties, we can iterate through it sequentially.

During the iteration, we maintain the maximum value of all events that have ended up to the current point. When we encounter a start time, we calculate the maximum sum by adding the current event's value to the maximum value of the previously ended events. This ensures that we efficiently track the best possible combination of non-overlapping events.

#### Algorithm

1. Initialize a list `times` to store tuples containing the event's `timeValue`, type `(start or end)`, and `value`.
2. Loop through the input events:
    - For each event `(start, end, value)`, add two tuples to `times`:
        - `(start, 1, value)` representing the `start` time of the event.
        - `(end + 1, 0, value)` representing the `end` time of the event.
3. Sort `times` by the time value. If two entries have the same time, prioritize `end` times.
4. Initialize `ans` to track the maximum sum of two non-overlapping events, and `maxValue` to track the maximum event value seen so far.
5. Loop through each element in `times`:
    - If the element's type is `1` (start time):
        - Update `ans` as the maximum of its current value and the sum of the event value and `maxValue`.
    - If the element's type is 0 (end time):
        - Update `maxValue` as the maximum of its current value and the event value.
6. After processing all elements, return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/k66MupZ5/shared" frameBorder="0" width="100%" height="500" name="k66MupZ5"></iframe>


#### Complexity Analysis

Let $n$ be the number of events in the `events` array.

- Time Complexity: $O(n \cdot \log n)$

    For each event, we create two entries (`start` and `end`) in the `times` array. Since there are `n` events, this step takes $O(n)$ time. The `times` array contains `2*n` elements (start and end times for each event). Sorting this array takes $O((2n) \cdot \log 2n) = O(n \cdot \log n)$ time.

    After sorting, we traverse the times array once to compute the result. This step takes $O(2 \cdot n)=O(n)$ time. Combining all steps, the overall time complexity is given by $O(n \cdot \log n)$.

- Space complexity: $O(n)$

    Since there are exactly $2 \cdot n$ values in the `times` array, the algorithm requires $O(2 \cdot n) = O(n)$ space for the `times` array in the worst case.

    Apart from this, the space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and  Insertion Sort and has $O(l)$ additional space, where `l` is the size of the list.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

    Therefore, the total space complexity is given by $O(n)$.

---