# C# solution with sorting and tracking passenger capacity

**Author:** jISU0pWpIB
**Votes:** 1
**Link:** [https://leetcode.com/problems/car-pooling/solutions/5444028/](https://leetcode.com/problems/car-pooling/solutions/5444028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Initialize an Array:

We initialize an array passengerChanges of length 1001 (assuming the maximum point is 1000 based on problem constraints) to track changes in the number of passengers at each point.
Update the Array:

For each trip, update the array to reflect the change in the number of passengers:
Increase the count at the start location (passengerChanges[start] += numPassengers).
Decrease the count at the end location (passengerChanges[end] -= numPassengers).
Check Capacity:

Iterate through the passengerChanges array to calculate the current number of passengers in the car at each point.
If at any point the number of passengers exceeds the car's capacity, return false.
Return:

If the capacity is never exceeded, return true.
This approach ensures that we efficiently track the number of passengers at each point without sorting, by directly updating and checking the passenger count changes in a linear pass.

# Complexity
- Time complexity:
O(n)


# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public bool CarPooling(int[][] trips, int capacity) {
        // Create a list to store the changes in passenger count at each point.
        List<int[]> events = new List<int[]>();

        foreach (var trip in trips) {
            int numPassengers = trip[0];
            int start = trip[1];
            int end = trip[2];
            events.Add(new int[] { start, numPassengers }); // Adding passengers at start
            events.Add(new int[] { end, -numPassengers });  // Removing passengers at end
        }

        // Sort the events. If two events have the same position, the removal of passengers (-numPassengers)
        // should come before the addition of passengers (numPassengers) to avoid exceeding capacity.
        events.Sort((a, b) => {
            if (a[0] == b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        });

        int currentPassengers = 0;
        foreach (var e in events) {
            currentPassengers += e[1];
            if (currentPassengers > capacity) {
                return false;
            }
        }

        return true;
    }
}

```