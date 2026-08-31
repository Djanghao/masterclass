# 🔥💯SUPER EASY AND SIMPLE🔥| WITH REAL WORLD EXAMPLE 💪

**Author:** CodeWithSparsh
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/5767255/](https://leetcode.com/problems/find-right-interval/solutions/5767255/)

---

Let's break down the problem with a real-world example to help you understand.

### Problem Breakdown:
- You are given an array of intervals. Each interval consists of a start time and an end time.
- For each interval, you want to find the "right" interval. The "right" interval is the next interval (from the list) that starts **after** or **at the same time** as the current interval ends, and it must have the smallest start time possible.
- If no such interval exists, return `-1` for that interval.

### Real-World Example:
Imagine you are organizing meetings, and each interval represents a meeting. You want to find the next available meeting that starts after or at the same time your current meeting ends. If no such meeting exists, you note down `-1`.

### Example:

Let\u2019s say the intervals you have are:

```
intervals = [[1, 2], [2, 3], [3, 4]]
```

This represents:
- Meeting 1 starts at time `1` and ends at time `2`.
- Meeting 2 starts at time `2` and ends at time `3`.
- Meeting 3 starts at time `3` and ends at time `4`.

For each meeting, we want to find the next meeting that starts at or after the current meeting ends.

#### Step-by-Step:
1. **For Meeting 1 (`[1, 2]`)**:
   - It ends at time `2`.
   - The next meeting should start at `2` or later.
   - The only meeting that starts at `2` or later is Meeting 2 (`[2, 3]`).
   - So, the right interval for Meeting 1 is Meeting 2, which is at index `1`.

2. **For Meeting 2 (`[2, 3]`)**:
   - It ends at time `3`.
   - The next meeting should start at `3` or later.
   - The only meeting that starts at `3` or later is Meeting 3 (`[3, 4]`).
   - So, the right interval for Meeting 2 is Meeting 3, which is at index `2`.

3. **For Meeting 3 (`[3, 4]`)**:
   - It ends at time `4`.
   - There is no meeting that starts at `4` or later.
   - So, the right interval for Meeting 3 is `-1`.

### Final Output:
The array of right interval indices for each interval is:
```
[1, 2, -1]
```

- The first interval's right interval is at index `1`.
- The second interval's right interval is at index `2`.
- The third interval has no right interval, so it gets `-1`.

### Visual Representation:
- Interval 1 (`[1, 2]`) ends at time `2`. The next meeting starts at `2`, so its right interval is Meeting 2 (`[2, 3]`).
- Interval 2 (`[2, 3]`) ends at time `3`. The next meeting starts at `3`, so its right interval is Meeting 3 (`[3, 4]`).
- Interval 3 (`[3, 4]`) ends at time `4`. No meetings start at or after `4`, so its right interval is `-1`.

### Solution Strategy:
- For each interval, you need to search for the interval that starts right after the current one ends.
- Sorting intervals by their start time can help in efficiently finding the right interval.

I hope this real-world analogy helps clarify the problem!

____

## # Intuition
The problem involves finding the closest interval that starts after or at the same time as the end of the current interval. For each interval, we need to find the right interval with the minimum possible start time that satisfies the condition.

## # Approach
1. Traverse through each interval in the list.
2. For each interval, check the end time and search for the closest interval whose start time is greater than or equal to this end time.
3. If such an interval is found, return its index. If not, return `-1`.

## # Complexity
- **Time complexity**: $$O(n^2)$$ because for each interval, we are iterating through all other intervals.
- **Space complexity**: $$O(n)$$ for storing the result.


```dart []
import 'dart:math';

class Solution {
  List<int> findRightInterval(List<List<int>> intervals) {
    List<int> solution = [];
    
    for (int i = 0; i < intervals.length; i++) {
      solution.add(getAnyInterval(i, intervals[i][1], intervals));
    }
    
    return solution;
  }

  int getAnyInterval(int currentIndex, int endTime, List<List<int>> intervals) {
    int? solIndex;
    int? closestStartTime;
    
    for (int i = 0; i < intervals.length; i++) {
      if (i == currentIndex) continue;  // Skip the current interval
      
      int startTime = intervals[i][0];
      
      if (endTime <= startTime) {
        // If this interval can be a "right" interval
        if (closestStartTime == null || startTime < closestStartTime) {
          closestStartTime = startTime;
          solIndex = i;
        }
      }
    }
    
    return solIndex ?? -1;
  }
}
```

```cpp []
#include <vector>
#include <limits.h>
using namespace std;

class Solution {
public:
    vector<int> findRightInterval(vector<vector<int>>& intervals) {
        vector<int> result;
        for(int i = 0; i < intervals.size(); i++) {
            result.push_back(getRightInterval(i, intervals[i][1], intervals));
        }
        return result;
    }

    int getRightInterval(int currentIndex, int endTime, vector<vector<int>>& intervals) {
        int solIndex = -1;
        int closestStartTime = INT_MAX;
        for(int i = 0; i < intervals.size(); i++) {
            if(i == currentIndex) continue;
            int startTime = intervals[i][0];
            if(endTime <= startTime && startTime < closestStartTime) {
                closestStartTime = startTime;
                solIndex = i;
            }
        }
        return solIndex;
    }
};
```


```java []
import java.util.*;

class Solution {
    public int[] findRightInterval(int[][] intervals) {
        int[] result = new int[intervals.length];
        for (int i = 0; i < intervals.length; i++) {
            result[i] = getRightInterval(i, intervals[i][1], intervals);
        }
        return result;
    }

    private int getRightInterval(int currentIndex, int endTime, int[][] intervals) {
        int solIndex = -1;
        int closestStartTime = Integer.MAX_VALUE;
        for (int i = 0; i < intervals.length; i++) {
            if (i == currentIndex) continue;
            int startTime = intervals[i][0];
            if (endTime <= startTime && startTime < closestStartTime) {
                closestStartTime = startTime;
                solIndex = i;
            }
        }
        return solIndex;
    }
}
```


```javascript []
var findRightInterval = function(intervals) {
    const result = [];
    for (let i = 0; i < intervals.length; i++) {
        result.push(getRightInterval(i, intervals[i][1], intervals));
    }
    return result;
};

function getRightInterval(currentIndex, endTime, intervals) {
    let solIndex = -1;
    let closestStartTime = Infinity;
    for (let i = 0; i < intervals.length; i++) {
        if (i === currentIndex) continue;
        const startTime = intervals[i][0];
        if (endTime <= startTime && startTime < closestStartTime) {
            closestStartTime = startTime;
            solIndex = i;
        }
    }
    return solIndex;
}
```


```python []
class Solution:
    def findRightInterval(self, intervals):
        result = []
        for i in range(len(intervals)):
            result.append(self.getRightInterval(i, intervals[i][1], intervals))
        return result
    
    def getRightInterval(self, currentIndex, endTime, intervals):
        solIndex = -1
        closestStartTime = float('inf')
        for i in range(len(intervals)):
            if i == currentIndex:
                continue
            startTime = intervals[i][0]
            if endTime <= startTime and startTime < closestStartTime:
                closestStartTime = startTime
                solIndex = i
        return solIndex
```


```go []
import (
    "math"
)

func findRightInterval(intervals [][]int) []int {
    result := []int{}
    for i := 0; i < len(intervals); i++ {
        result = append(result, getRightInterval(i, intervals[i][1], intervals))
    }
    return result
}

func getRightInterval(currentIndex int, endTime int, intervals [][]int) int {
    solIndex := -1
    closestStartTime := math.MaxInt64
    for i := 0; i < len(intervals); i++ {
        if i == currentIndex {
            continue
        }
        startTime := intervals[i][0]
        if endTime <= startTime && startTime < closestStartTime {
            closestStartTime = startTime
            solIndex = i
        }
    }
    return solIndex
}
```


```typescript []
function findRightInterval(intervals: number[][]): number[] {
    const result: number[] = [];
    for (let i = 0; i < intervals.length; i++) {
        result.push(getRightInterval(i, intervals[i][1], intervals));
    }
    return result;
}

function getRightInterval(currentIndex: number, endTime: number, intervals: number[][]): number {
    let solIndex: number | null = null;
    let closestStartTime: number | null = null;
    
    for (let i = 0; i < intervals.length; i++) {
        if (i === currentIndex) continue;
        const startTime = intervals[i][0];
        
        if (endTime <= startTime) {
            if (closestStartTime === null || startTime < closestStartTime) {
                closestStartTime = startTime;
                solIndex = i;
            }
        }
    }
    
    return solIndex ?? -1;
}
```


```rust []
impl Solution {
    pub fn find_right_interval(intervals: Vec<Vec<i32>>) -> Vec<i32> {
        let mut result = Vec::new();
        for i in 0..intervals.len() {
            result.push(Solution::get_right_interval(i as i32, intervals[i][1], &intervals));
        }
        result
    }

    fn get_right_interval(current_index: i32, end_time: i32, intervals: &Vec<Vec<i32>>) -> i32 {
        let mut sol_index: i32 = -1;
        let mut closest_start_time = i32::MAX;

        for i in 0..intervals.len() {
            if i as i32 == current_index {
                continue;
            }
            let start_time = intervals[i][0];
            if end_time <= start_time && start_time < closest_start_time {
                closest_start_time = start_time;
                sol_index = i as i32;
            }
        }

        sol_index
    }
}
```

