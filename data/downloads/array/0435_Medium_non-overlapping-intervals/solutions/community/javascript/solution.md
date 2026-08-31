# 【Video】Sorting Solution

**Author:** niits
**Votes:** 66
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/5998169/](https://leetcode.com/problems/non-overlapping-intervals/solutions/5998169/)

---

# Intuition
The algorithm sorts intervals based on their end points, then iterates through them, counting overlapping intervals, and returns the count.

---


# Solution Video

https://youtu.be/gJjmZ6VpXRk

##### Please upvote and subscribe to my channel from here.
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

---

# Approach
This is based on Python code. Other might be different a bit.


1. Initialize a variable "res" to keep track of the count of overlapping intervals. Set it to 0 initially.

2. Sort the intervals in ascending order based on their end points using the `sort` method and a lambda function as the key for sorting.

3. Initialize a variable "prev_end" to store the end point of the first interval (since the intervals are sorted).

4. Iterate through the sorted intervals starting from the second one (index 1).

5. Check if the end point of the previous interval (stored in "prev_end") is greater than the start point of the current interval (intervals[i][0]).
   - If true, it means there is an overlap between the previous interval and the current one. Increment the "res" variable to count the overlapping interval.

6. If there is no overlap (i.e., the end point of the previous interval is not greater than the start point of the current interval), update "prev_end" to the end point of the current interval.

7. After processing all intervals, return the count of overlapping intervals ("res") as the final result.

# Complexity
- Time complexity: O(n log n) 
The main operations in this code are sorting the intervals and iterating through the sorted intervals. Sorting the intervals takes O(n log n) time complexity, where n is the number of intervals. The subsequent loop iterates through the sorted intervals once, which takes O(n) time complexity. Therefore, the overall time complexity of this code is O(n log n).

- Space complexity: O(log n) or O(n)
Depends on language you use.

```python []
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        res = 0

        intervals.sort(key=lambda x: x[1])
        prev_end = intervals[0][1]

        for i in range(1, len(intervals)):
            if prev_end > intervals[i][0]:
                res += 1
            else:
                prev_end = intervals[i][1]
        
        return res
```
```javascript []
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let res = 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let prev_end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (prev_end > intervals[i][0]) {
            res++;
        } else {
            prev_end = intervals[i][1];
        }
    }

    return res;    
};
```
```java []
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        int res = 0;

        Arrays.sort(intervals, (a, b) -> a[1] - b[1]);
        int prev_end = intervals[0][1];

        for (int i = 1; i < intervals.length; i++) {
            if (prev_end > intervals[i][0]) {
                res++;
            } else {
                prev_end = intervals[i][1];
            }
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        int res = 0;

        sort(intervals.begin(), intervals.end(), [](const auto& a, const auto& b) {
            return a[1] < b[1];
        });
        int prev_end = intervals[0][1];

        for (int i = 1; i < intervals.size(); i++) {
            if (prev_end > intervals[i][0]) {
                res++;
            } else {
                prev_end = intervals[i][1];
            }
        }

        return res;        
    }
};
```

---

Thank you for reading my post.
Please upvote it and don't forget to subscribe to my channel!

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F Related video
#56 Merge Intervals

https://youtu.be/DAppffTClNQ
