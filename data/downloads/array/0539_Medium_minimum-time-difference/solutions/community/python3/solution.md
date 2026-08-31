# Python | Sorting & Two Pointers

**Author:** Khosiyat
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/5792282/](https://leetcode.com/problems/minimum-time-difference/solutions/5792282/)

---

[see the Successfully Accepted Submission](https://leetcode.com/problems/minimum-time-difference/submissions/1391568114/?envType=daily-question&envId=2024-09-16)

# Code
```python3 []
class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:
        # Convert time from "HH:MM" to minutes since 00:00
        def timeToMinutes(time: str) -> int:
            hours, minutes = map(int, time.split(':'))
            return hours * 60 + minutes
        
        # Step 1: Convert all times to minutes
        minutes = [timeToMinutes(tp) for tp in timePoints]
        
        # Step 2: Sort the minutes
        minutes.sort()
        
        # Step 3: Calculate the minimum difference between consecutive times
        min_diff = float('inf')  # Initialize to a large number
        
        for i in range(1, len(minutes)):
            min_diff = min(min_diff, minutes[i] - minutes[i - 1])
        
        # Step 4: Check the circular difference between the last and first time points
        circular_diff = 1440 - minutes[-1] + minutes[0]
        min_diff = min(min_diff, circular_diff)
        
        return min_diff

```

## Plan:

1. **Convert time points to minutes**: 
    - For each time point in the list, convert the hours and minutes into total minutes since midnight. 
    - For example:
        - `"23:59"` becomes `23 \xD7 60 + 59 = 1439` minutes.
        - `"00:00"` becomes `0 \xD7 60 + 0 = 0` minutes.

2. **Sort the time points**: 
    - Once we convert the time points into their minute equivalents, we sort the list to make it easier to find the differences between consecutive times.

3. **Handle circular time differences**: 
    - Since the clock wraps around (i.e., 23:59 is close to 00:00), the difference between the first and the last time points (after sorting) also needs to be considered. 
    - Specifically, the difference would be:
        - `1440 (total minutes in a day) \u2212 (last time in minutes) + (first time in minutes)`

4. **Find the minimum difference**: 
    - After sorting, calculate the difference between consecutive times and the circular difference. The smallest of these will be the answer.

---

### To solve the problem of finding the minimum minutes difference between any two time points in a list, we can follow these steps:

1. **Convert time points to minutes**: 
    - For each time point in the list, convert the hours and minutes into total minutes since midnight. 
    - For example:
        - `"23:59"` becomes `23 \xD7 60 + 59 = 1439` minutes.
        - `"00:00"` becomes `0 \xD7 60 + 0 = 0` minutes.

2. **Sort the time points**: 
    - Once we convert the time points into their minute equivalents, we sort the list to make it easier to find the differences between consecutive times.

3. **Handle circular time differences**: 
    - Since the clock wraps around (i.e., 23:59 is close to 00:00), the difference between the first and the last time points (after sorting) also needs to be considered. 
    - Specifically, the difference would be:
        - `1440 (total minutes in a day) \u2212 (last time in minutes) + (first time in minutes)`

4. **Find the minimum difference**: 
    - After sorting, calculate the difference between consecutive times and the circular difference. The smallest of these will be the answer.

---

### Explanation:

- **timeToMinutes function**: 
    - This function takes a time string like `"HH:MM"` and converts it into the total minutes since midnight.
  
- **Conversion and sorting**: 
    - All time points are first converted into minutes and then sorted.

- **Calculating the differences**: 
    - We loop through the sorted list of times and calculate the difference between each consecutive pair of time points. 
    - The circular difference (where the day wraps around) is also considered.

- **Result**: 
    - The minimum of all these differences is returned as the answer.

---

### Time Complexity:

1. **Conversion**: 
    - Converting each time to minutes takes `O(1)` per time point.

2. **Sorting**: 
    - Sorting the list of time points takes `O(n log n)` where `n` is the number of time points.

3. **Difference Calculation**: 
    - This takes `O(n)`, since we only need to calculate differences between consecutive time points and one circular difference.

- Thus, the overall time complexity is `O(n log n)`.

---

### Example Walkthrough:

#### Example 1:
- **Input**: `["23:59","00:00"]`
- **Conversion to minutes**: `[1439, 0]`
- **Sorted minutes**: `[0, 1439]`
- **Differences**:
    - Consecutive difference: `1439 \u2212 0 = 1439`
    - Circular difference: `1440 \u2212 1439 + 0 = 1`
- **Minimum difference**: `1`

#### Example 2:
- **Input**: `["00:00","23:59","00:00"]`
- **Conversion to minutes**: `[0, 1439, 0]`
- **Sorted minutes**: `[0, 0, 1439]`
- **Differences**:
    - Consecutive difference: `0 \u2212 0 = 0`, `1439 \u2212 0 = 1439`
    - Circular difference: `1440 \u2212 1439 + 0 = 1`
- **Minimum difference**: `0`



![image](./images/0.jpeg)