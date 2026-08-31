# ✅Maximum Sum of Two Non-Overlapping Events Using Binary Search🚀Beats💯

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6126627/](https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6126627/)

---

# Intuition:

To maximize the sum of values of two non-overlapping events, we need to:
1. Identify two events such that their times do not overlap (i.e., the start time of one is after the end time of the other).
2. Leverage the sorted structure of events to efficiently find compatible pairs, maximizing their combined values.

A **binary search** approach is suitable for finding the latest non-overlapping event efficiently.

# Approach:

1. **Sort Events by End Time**:
    - Sorting events by their end time helps to easily determine compatibility using binary search.
2. **Binary Search for Compatibility**:
    - For each event, find the latest event (ending before the current event starts) using binary search.
3. **Precompute Maximum Values**:
    - To optimize the selection of the second event, maintain a prefix array where `maxValues[i]` holds the maximum value of events from the start up to the ith event.
4. **Iterate Over Events**:
    - For each event:
        - Use binary search to find the latest non-overlapping event.
        - Calculate the maximum sum of the current event and the best earlier event.
5. **Result**:    
    - The result is the maximum of the sums computed during the iteration.

# Complexity:

- **Time Complexity**:
    - Sorting: ***O(n log\u2061 n)***
    - Binary search for each event: ***O(n log \u2061n)***
    - Total: ***O(n log \u2061n)***
- **Space Complexity**:
    - ***O(n)*** for storing `maxValues` and sorted events.

# Code:

```typescript
function maxTwoEvents(events: number[][]): number {
    // Sort events by endTime
    events.sort((a, b) => a[1] - b[1]);

    const n = events.length;
    const maxValues = new Array(n).fill(0);

    // Precompute maxValues to store the max value up to each event
    maxValues[0] = events[0][2];
    for (let i = 1; i < n; i++) {
        maxValues[i] = Math.max(maxValues[i - 1], events[i][2]);
    }

    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        const [startTime, endTime, value] = events[i];

        // Binary search to find the last event that ends before startTime
        let low = 0, high = i - 1, lastCompatible = -1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (events[mid][1] < startTime) {
                lastCompatible = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        // If a compatible event exists, calculate the sum
        const currentSum = value + (lastCompatible !== -1 ? maxValues[lastCompatible] : 0);

        // Update the maximum sum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

```

---

### **Example and Explanation Walkthrough**:

#### Example 1:

**Input**:
```typescript
events = [[1,3,2],[4,5,2],[2,4,3]];
```

**Execution**:
1. Sort events: `[[1,3,2], [2,4,3], [4,5,2]]`.
2. Precompute `maxValues`:
    - `maxValues = [2, 3, 3]`.
3. Iterate over events:
    - For event `[1,3,2]`: No previous compatible event. Max sum = `2`.
    - For event `[2,4,3]`: No previous compatible event. Max sum = `3`.
    - For event `[4,5,2]`: Compatible with `[1,3,2]`. Max sum = `2 + 2 = 4`.
4. **Output**: `4`.

#### Example 2:

**Input**:
```typescript
events = [[1,5,3],[1,5,1],[6,6,5]];
```

**Execution**:
1. Sort events: `[[1,5,3], [1,5,1], [6,6,5]]`.
2. Precompute `maxValues`:
    - `maxValues = [3, 3, 5]`.
3. Iterate over events:
    - For event `[1,5,3]`: No previous compatible event. Max sum = `3`.
    - For event `[1,5,1]`: No previous compatible event. Max sum = `3`.
    - For event `[6,6,5]`: Compatible with `[1,5,3]`. Max sum = `3 + 5 = 8`.
4. **Output**: `8`.

---

### **Key Insights**:

- **Binary Search** ensures efficient compatibility checks.
- **Precomputing Maximum Values** allows fast retrieval of the best earlier event's value.
- The approach works well within the constraints.