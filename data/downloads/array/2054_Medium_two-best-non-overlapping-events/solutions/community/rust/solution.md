# 100% Beats Simple Binary Search

**Author:** Sumeet_Sharma-1
**Votes:** 117
**Link:** [https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6124334/](https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6124334/)

---

# Solution Explanation: Maximizing the Sum of Two Non-overlapping Events \uD83C\uDF1F

## Intuition \uD83D\uDCA1
The problem asks us to select at most two non-overlapping events such that the sum of their values is maximized. The key challenge is ensuring that the two selected events do not overlap. We need an approach that allows us to efficiently find the best combination of two events.

### Thought Process \uD83E\uDDE0:
1. **Event Structure**: Each event is represented by three values: the **start time**, the **end time**, and the **value**. The goal is to choose two events where one starts strictly after the other ends. The more valuable the event, the better, so we want to maximize the sum of their values.
   
2. **Sorting by Start Time** \uD83D\uDCC5: One of the first things we can do to organize the events is to sort them by their start time. This makes it easier to look ahead at events that may be a valid candidate for pairing.

3. **Avoid Redundancy with a Suffix Array** \uD83D\uDD04: Instead of searching for the best second event for every single event, we can create a **suffix array** that stores the maximum possible value for non-overlapping events that occur after a given event. This allows us to quickly get the best possible event for pairing, saving us from redundant checks.

4. **Efficient Searching with Binary Search** \uD83D\uDD0D: After sorting the events, we can use **binary search** to find the next valid event that starts after the current event ends. This ensures that we can efficiently check for valid pairs without having to iterate over all subsequent events.

---

## Approach \uD83D\uDD27

### 1. Sort Events by Start Time \uD83D\uDCCA
The first step is to sort the events based on their **start time**. This way, we process each event in chronological order, making it easy to find the subsequent event that starts after the current event ends. Sorting ensures that we can quickly identify events that may or may not overlap with the current one.

### 2. Create a Suffix Array \uD83D\uDDC2
We create a **suffix array** to keep track of the maximum possible value of non-overlapping events from the current event to the last event. The idea behind the suffix array is simple:
- Start by initializing the last event\u2019s value as the maximum value.
- Then, working backwards through the list of events, update the suffix array with the highest event value encountered so far.
- This array allows us to quickly access the best possible future event without needing to repeatedly check all future events.

### 3. Binary Search for Non-overlapping Events \uD83D\uDD0D
For each event, we need to find the first event that starts after the current event ends. Since the events are sorted by start time, we can use **binary search** to efficiently find this next valid event. If no such event exists, we just move on to the next one. If a valid event is found, we can easily retrieve its value from the suffix array and calculate the total value.

### 4. Maximize the Total Value \uD83D\uDCB8
For each event:
- First, we check if attending only this event yields a higher value than the current maximum sum.
- Then, if a valid second event is found (using the binary search), we calculate the sum of the current event\u2019s value and the best possible future event value (from the suffix array).
- We update the maximum sum accordingly, ensuring that we track the best combination of non-overlapping events.

---

## Complexity \uD83D\uDCC8

- **Time Complexity** \u23F1\uFE0F:
    - **Sorting** the events by their start time takes \\(O(n \\log n)\\).
    - For each event, **binary search** is used to find the next event that starts after the current event ends, which takes \\(O(\\log n)\\).
    - Therefore, the overall time complexity is \\(O(n \\log n)\\), where \\(n\\) is the number of events.

- **Space Complexity** \uD83D\uDCE6:
    - We use an array of size \\(n\\) to store the **suffix maximum values**. This space is necessary to store the maximum values of non-overlapping events starting from each index.
    - Therefore, the space complexity is \\(O(n)\\).
![Screenshot 2024-12-08 075554.png](./images/0.png)


---

## Key Insights \u2728

### Sorting by Start Time \uD83D\uDDD3\uFE0F
By sorting the events by their start time, we ensure that we can efficiently look ahead for the next valid event. This helps us structure the problem in a way that allows for efficient searching and avoids unnecessary checks.

### Binary Search for Next Event \uD83D\uDD0D
Binary search helps us find the first event that starts after the current event ends in **logarithmic time**. This ensures that we are not wasting time checking each event one by one.

### Suffix Array for Max Values \uD83D\uDC8E
The suffix array provides a quick way to access the best possible non-overlapping event from the current event onward. It allows us to avoid recalculating the maximum for every event, which saves time and makes the solution efficient.

### Efficient Pairing of Events \uD83D\uDD17
The combination of sorting, binary search, and the suffix array makes the solution very efficient in finding the best pair of non-overlapping events. It allows us to maximize the sum of the values in \\(O(n \\log n)\\) time, which is optimal for this problem.

---

This approach efficiently solves the problem while ensuring that we minimize unnecessary computations. The use of sorting, binary search, and the suffix array ensures that the solution is both time-efficient and easy to understand. \uD83C\uDF89

# Code
```C++ []
class Solution {
public:
    int maxTwoEvents(vector<vector<int>>& events) {
        int n = events.size();
        
        sort(events.begin(), events.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[0] < b[0];
        });
        
        vector<int> suffixMax(n);
        suffixMax[n - 1] = events[n - 1][2];
        
        for (int i = n - 2; i >= 0; --i) {
            suffixMax[i] = max(events[i][2], suffixMax[i + 1]);
        }
        
        int maxSum = 0;
        
        for (int i = 0; i < n; ++i) {
            int left = i + 1, right = n - 1;
            int nextEventIndex = -1;
            
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (events[mid][0] > events[i][1]) {
                    nextEventIndex = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            
            if (nextEventIndex != -1) {
                maxSum = max(maxSum, events[i][2] + suffixMax[nextEventIndex]);
            }
            
            maxSum = max(maxSum, events[i][2]);
        }
        
        return maxSum;
    }
};

```
```Python3 []
from typing import List

class Solution:
    def maxTwoEvents(self, events: List[List[int]]) -> int:
        n = len(events)
        
        # Step 1: Sort the events by their start time
        events.sort(key=lambda x: x[0])
        
        # Step 2: Create the suffix array for the maximum event value from each event onward
        suffixMax = [0] * n
        suffixMax[n - 1] = events[n - 1][2]  # Initialize the last event's value
        
        # Populate the suffixMax array
        for i in range(n - 2, -1, -1):
            suffixMax[i] = max(events[i][2], suffixMax[i + 1])
        
        # Step 3: For each event, find the next event that starts after it ends
        maxSum = 0
        
        for i in range(n):
            left, right = i + 1, n - 1
            nextEventIndex = -1
            
            # Perform binary search to find the next non-overlapping event
            while left <= right:
                mid = left + (right - left) // 2
                if events[mid][0] > events[i][1]:
                    nextEventIndex = mid
                    right = mid - 1
                else:
                    left = mid + 1
            
            # If a valid next event is found, update the max sum
            if nextEventIndex != -1:
                maxSum = max(maxSum, events[i][2] + suffixMax[nextEventIndex])
            
            # Also consider the case where we take only the current event
            maxSum = max(maxSum, events[i][2])
        
        return maxSum

```
```Java []
import java.util.*;

class Solution {
    public int maxTwoEvents(int[][] events) {
        int n = events.length;
        
        // Step 1: Sort the events by their start time
        Arrays.sort(events, (a, b) -> a[0] - b[0]);
        
        // Step 2: Create the suffix array for the maximum event value from each event onward
        int[] suffixMax = new int[n];
        suffixMax[n - 1] = events[n - 1][2];  // Initialize the last event's value
        
        // Populate the suffixMax array
        for (int i = n - 2; i >= 0; --i) {
            suffixMax[i] = Math.max(events[i][2], suffixMax[i + 1]);
        }
        
        // Step 3: For each event, find the next event that starts after it ends
        int maxSum = 0;
        
        for (int i = 0; i < n; ++i) {
            int left = i + 1, right = n - 1;
            int nextEventIndex = -1;
            
            // Perform binary search to find the next non-overlapping event
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (events[mid][0] > events[i][1]) {
                    nextEventIndex = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            
            // If a valid next event is found, update the max sum
            if (nextEventIndex != -1) {
                maxSum = Math.max(maxSum, events[i][2] + suffixMax[nextEventIndex]);
            }
            
            // Also consider the case where we take only the current event
            maxSum = Math.max(maxSum, events[i][2]);
        }
        
        return maxSum;
    }
}

```
```C# []
public class Solution {
    public int MaxTwoEvents(int[][] events) {
        int n = events.Length;
        
        // Step 1: Sort the events by their start time
        Array.Sort(events, (a, b) => a[0].CompareTo(b[0]));
        
        // Step 2: Create the suffix array for the maximum event value from each event onward
        int[] suffixMax = new int[n];
        suffixMax[n - 1] = events[n - 1][2];  // Initialize the last event's value
        
        // Populate the suffixMax array
        for (int i = n - 2; i >= 0; i--) {
            suffixMax[i] = Math.Max(events[i][2], suffixMax[i + 1]);
        }
        
        // Step 3: For each event, find the next event that starts after it ends
        int maxSum = 0;
        
        for (int i = 0; i < n; i++) {
            int left = i + 1, right = n - 1;
            int nextEventIndex = -1;
            
            // Perform binary search to find the next non-overlapping event
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (events[mid][0] > events[i][1]) {
                    nextEventIndex = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            
            // If a valid next event is found, update the max sum
            if (nextEventIndex != -1) {
                maxSum = Math.Max(maxSum, events[i][2] + suffixMax[nextEventIndex]);
            }
            
            // Also consider the case where we take only the current event
            maxSum = Math.Max(maxSum, events[i][2]);
        }
        
        return maxSum;
    }
}

```
```Ruby []
# @param {Integer[][]} events
# @return {Integer}
def max_two_events(events)
    # Step 1: Sort the events by their start time
    events.sort_by! { |event| event[0] }

    # Step 2: Create the suffix array for the maximum event value from each event onward
    n = events.length
    suffix_max = Array.new(n)
    suffix_max[n - 1] = events[n - 1][2]  # Initialize the last event's value

    # Populate the suffix_max array
    (n - 2).downto(0) do |i|
        suffix_max[i] = [events[i][2], suffix_max[i + 1]].max
    end

    # Step 3: For each event, find the next event that starts after it ends
    max_sum = 0

    (0...n).each do |i|
        left, right = i + 1, n - 1
        next_event_index = -1

        # Perform binary search to find the next non-overlapping event
        while left <= right
            mid = left + (right - left) / 2
            if events[mid][0] > events[i][1]
                next_event_index = mid
                right = mid - 1
            else
                left = mid + 1
            end
        end

        # If a valid next event is found, update max_sum
        if next_event_index != -1
            max_sum = [max_sum, events[i][2] + suffix_max[next_event_index]].max
        end

        # Also consider the case where we take only the current event
        max_sum = [max_sum, events[i][2]].max
    end

    max_sum
end
```
```javascript []
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    const n = events.length;
    
    // Step 1: Sort the events by their start time
    events.sort((a, b) => a[0] - b[0]);
    
    // Step 2: Create the suffix array for the maximum event value from each event onward
    let suffixMax = new Array(n);
    suffixMax[n - 1] = events[n - 1][2];  // Initialize the last event's value
    
    // Populate the suffixMax array
    for (let i = n - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(events[i][2], suffixMax[i + 1]);
    }
    
    // Step 3: For each event, find the next event that starts after it ends
    let maxSum = 0;
    
    for (let i = 0; i < n; i++) {
        let left = i + 1, right = n - 1;
        let nextEventIndex = -1;
        
        // Perform binary search to find the next non-overlapping event
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (events[mid][0] > events[i][1]) {
                nextEventIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        // If a valid next event is found, update the max sum
        if (nextEventIndex !== -1) {
            maxSum = Math.max(maxSum, events[i][2] + suffixMax[nextEventIndex]);
        }
        
        // Also consider the case where we take only the current event
        maxSum = Math.max(maxSum, events[i][2]);
    }
    
    return maxSum;
};
```
```Rust []
impl Solution {
    pub fn max_two_events(events: Vec<Vec<i32>>) -> i32 {
        let n = events.len();

        // Step 1: Sort the events by their start time
        let mut events = events;
        events.sort_by(|a, b| a[0].cmp(&b[0]));

        // Step 2: Create the suffix array for the maximum event value from each event onward
        let mut suffix_max = vec![0; n];
        suffix_max[n - 1] = events[n - 1][2];  // Initialize the last event's value
        
        // Populate the suffix_max array
        for i in (0..n - 1).rev() {
            suffix_max[i] = suffix_max[i + 1].max(events[i][2]);
        }

        // Step 3: For each event, find the next event that starts after it ends
        let mut max_sum = 0;

        for i in 0..n {
            let mut left = i + 1;
            let mut right = n - 1;
            let mut next_event_index = -1;

            // Perform binary search to find the next non-overlapping event
            while left <= right {
                let mid = left + (right - left) / 2;
                if events[mid][0] > events[i][1] {
                    next_event_index = mid as i32;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            // If a valid next event is found, update max_sum
            if next_event_index != -1 {
                let next_event_index = next_event_index as usize;
                max_sum = max_sum.max(events[i][2] + suffix_max[next_event_index]);
            }

            // Also consider the case where we take only the current event
            max_sum = max_sum.max(events[i][2]);
        }

        max_sum
    }
}

```