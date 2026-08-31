# ✔Simple solution with full explanation JAVA & DART ,Beats 💯 ot Time and Space complexity🔫

**Author:** m3n99
**Votes:** 2
**Link:** [https://leetcode.com/problems/insert-interval/solutions/4887255/](https://leetcode.com/problems/insert-interval/solutions/4887255/)

---

image.png
![image.png](./images/0.png)
image.png
![image.png](./images/1.png)
# Intuition
Initially, we need to iterate through the existing intervals and handle different cases where the new interval may overlap or not overlap with existing intervals.


# Approach
<!-- Describe your approach to solving the problem. -->
We iterate through the intervals and handle three cases:

1. If the end of the new interval is less than the start of the current interval, it means there's no overlap. We add the new interval and the remaining intervals as they are.
Example:
    - Existing intervals: [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
    - New interval: [4, 8]
    - Result after adding the new interval and the remaining intervals: [[3, 10], [12, 16]].

2. If the start of the new interval is greater than the end of the current interval, it also means there's no overlap. We add the current interval as it is.
Example:

    - Existing intervals: [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
    - New interval: [4, 8]
    - Current interval: [1, 2]
    - Result after adding the current interval: [[1, 2]].
    
3. If there's an overlap between the new interval and the current interval, we merge them by updating the start and end values of the new interval to encompass both intervals.
Example:

    - Existing intervals: [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
    - New interval: [4, 8]
    - Current interval: [3, 5]
    - Merged interval: [3, 8]


# Complexity
- Time complexity: **O(n)**, where n is the number of intervals, as we iterate through the intervals once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(n)**, where n is the number of intervals, as we may store the merged intervals in the result list.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![418489166_861230982359514_5675836723312989679_n.jpg](./images/2.jpeg)
# Code
```Dart []
class Solution {
  List<List<int>> insert(List<List<int>> intervals, List<int> newInterval) {
    List<List<int>> res = [];
    for(int i =0 ; i < intervals.length ; i++){
        // Case 1: No overlap, add newInterval and remaining intervals
        if(newInterval[1] < intervals[i][0]){  
            res.add(newInterval);
            res.addAll(intervals.sublist(i));
            return res;
        } else if(newInterval[0] > intervals[i][1]){ // Case 2: No overlap, add the current interval
           res.add(intervals[i]);
        } else {
            // Case 3: Overlap, merge the intervals
            newInterval[0] = min(newInterval[0],intervals[i][0]);
            newInterval[1] = max(newInterval[1],intervals[i][1]);
        }
    }
    res.add(newInterval);
    return res;
  }
}
```
```Java []
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();
        int i = 0;
        
        // Add all intervals that end before newInterval starts
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i]);
            i++;
        }
        
        // Merge overlapping intervals
        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.add(newInterval);
        
        // Add remaining intervals
        while (i < intervals.length) {
            result.add(intervals[i]);
            i++;
        }
        
        return result.toArray(new int[result.size()][]);
    }
}

```


