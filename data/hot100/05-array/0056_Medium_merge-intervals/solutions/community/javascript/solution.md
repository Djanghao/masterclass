# 【Video】Sorting Solution

**Author:** niits
**Votes:** 273
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/5513226/](https://leetcode.com/problems/merge-intervals/solutions/5513226/)

---

# Intuition
Compare starting time and ending time

# Solution Video

https://youtu.be/DAppffTClNQ

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 5,066
Thank you for your support!

---


# Approach

```
Input: intervals = [[1,3],[15,18],[8,10],[2,6]]
```
```
1----3   8----10 15----18
  2----6
```

In this case, we should merge `[1,3]` and `[2,6]`.

---

Question

How can we know two intervales are overlapping?

---

It's simple. **If current starting time is less than ending time in previous interval, they are overlapping.**

For example, if current interval is `[2,6]`,
```
[1,3],[2,6]

if 2 <= 3 \u2192 true
We should merge the two intervals.
``` 
But problem here is there is some distance between `[1,3]` and `[2,6]` because we have `[15,18]` and `[8,10]`.

That's why it's good idea to sort all intervals with starting time before iteration. After sorting, we will have

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
```
Now we just compare current interval and previous interval and merge the two intervals if needed.

Let's see one by one.

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]

prev = [1,3]
merged = []
```
We need previous interval, so initalized `prev` with the first interval. Let's iterate through the input array from index `1`.

```
[[1,3],[2,6],[8,10],[15,18]]
         i

prev = [1,3]
merged = []
```
Let's compare current starting time and previous ending time.
```
current starting time vs previous ending time
2 vs 3
= true
```
If true, we should merge them. After merging, the previous interval should `[1, 6]`. In `prev`, we already had `1` as starting time, so we don't do anything, but previous ending time is now `3` but we need `6` after merging.

---

\u2B50\uFE0F\u3000Points

Compare two ending time and take max number of ending time.

---
In this case,
```
previous ending time vs current ending time
= 3 vs 6
= 6
```
In the end, update `prev[1]` with `6`.

```
prev = [1,6]
```
Let's move next.
```
[[1,3],[2,6],[8,10],[15,18]]
               i

prev = [1,6]
merged = []
```
Current starting time(= `8`) is greater than previous ending time(= `6`), so they are not overlapping. In that case, it's time to add previous interval to `merged list`.

```
[[1,3],[2,6],[8,10],[15,18]]
               i

prev = [1,6]
merged = [[1,6]]
```
`[8,10]` and `[1,6]` are not overlapping, so `[8,10]` will be previous interval next time, so update `prev` with `[8,10]` before we move next.

```
[[1,3],[2,6],[8,10],[15,18]]
                       i

prev = [8,10]
merged = [[1,6]]
```

I'll speed up. Compare `15` vs `10`. They are not overlapping. That's why

```
[[1,3],[2,6],[8,10],[15,18]]
                             i

prev = [15,18]
merged = [[1,6], [8,10]]
```
We stop iteration.

`[15,18]` is one of intervals we should return, so add `[15, 18]` before we return intervals.

```
return [[1,6],[8,10],[15,18]]
```

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!

---

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
Depends on language you use.

```python []
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:        
        merged = []
        intervals.sort(key=lambda x: x[0])

        prev = intervals[0]

        for interval in intervals[1:]:
            if interval[0] <= prev[1]:
                prev[1] = max(prev[1], interval[1])
            else:
                merged.append(prev)
                prev = interval
        
        merged.append(prev)

        return merged
```
```javascript []
var merge = function(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        if (interval[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], interval[1]);
        } else {
            merged.push(prev);
            prev = interval;
        }
    }

    merged.push(prev);
    return merged;    
};
```
```java []
class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        List<int[]> merged = new ArrayList<>();
        int[] prev = intervals[0];

        for (int i = 1; i < intervals.length; i++) {
            int[] interval = intervals[i];
            if (interval[0] <= prev[1]) {
                prev[1] = Math.max(prev[1], interval[1]);
            } else {
                merged.add(prev);
                prev = interval;
            }
        }

        merged.add(prev);

        return merged.toArray(new int[merged.size()][]);         
    }
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {

        sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[0] < b[0];
        });

        vector<vector<int>> merged;
        vector<int> prev = intervals[0];

        for (int i = 1; i < intervals.size(); ++i) {
            vector<int> interval = intervals[i];
            if (interval[0] <= prev[1]) {
                prev[1] = max(prev[1], interval[1]);
            } else {
                merged.push_back(prev);
                prev = interval;
            }
        }

        merged.push_back(prev);
        return merged;        
    }
};
```

# Step by Step Algorithm

##### Step 1: Initialization
```python
merged = []
```
- **Explanation**: Initialize an empty list `merged` to store the merged intervals.

##### Step 2: Sorting the Intervals
```python
intervals.sort(key=lambda x: x[0])
```
- **Explanation**: Sort the intervals based on their start times. The lambda function `lambda x: x[0]` is used to extract the start time of each interval for comparison during sorting.
- **Purpose**: Sorting helps in easily identifying and merging overlapping intervals, as overlapping intervals will be adjacent after sorting.

##### Step 3: Initial Setup
```python
prev = intervals[0]
```
- **Explanation**: Initialize `prev` with the first interval from the sorted list. This `prev` interval will be used to compare and merge subsequent intervals.
- **Purpose**: This sets the baseline for the merging process, starting with the first interval.

##### Step 4: Iterating Through the Intervals
```python
for interval in intervals[1:]:
```
- **Explanation**: Iterate through the sorted intervals starting from the second interval (index 1) to the last interval.
- **Purpose**: To compare each interval with the `prev` interval to check for overlaps and merge them if necessary.

##### Step 5: Checking for Overlap and Merging
```python
if interval[0] <= prev[1]:
    prev[1] = max(prev[1], interval[1])
```
- **Explanation**:
  - **Condition**: `interval[0] <= prev[1]`
    - Check if the start time of the current interval (`interval[0]`) is less than or equal to the end time of the `prev` interval (`prev[1]`).
    - If true, this means the intervals overlap.
  - **Action**: `prev[1] = max(prev[1], interval[1])`
    - Merge the intervals by updating the end time of the `prev` interval to be the maximum end time between `prev` and the current interval.
- **Purpose**: To merge overlapping intervals by extending the end time of the `prev` interval.

##### Step 6: Handling Non-Overlapping Intervals
```python
else:
    merged.append(prev)
    prev = interval
```
- **Explanation**:
  - **Action**: `merged.append(prev)`
    - If the intervals do not overlap (the condition in step 5 is false), add the `prev` interval to the `merged` list as it is.
  - **Action**: `prev = interval`
    - Update `prev` to be the current interval, as this interval does not overlap with the previous one and will be used for further comparisons.
- **Purpose**: To add non-overlapping intervals to the merged list and update the reference for the next set of comparisons.

##### Step 7: Adding the Last Interval
```python
merged.append(prev)
```
- **Explanation**: After the loop ends, add the last `prev` interval to the `merged` list. This step ensures the final interval is included in the merged list.
- **Purpose**: To include the last interval in the result, as the loop does not append the last interval by itself.

##### Step 8: Returning the Result
```python
return merged
```
- **Explanation**: Return the `merged` list containing all merged intervals.
- **Purpose**: To provide the final output of merged intervals.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Previous video solution #724 - Find Pivot Index

https://youtu.be/yAkCq7GnhC0
