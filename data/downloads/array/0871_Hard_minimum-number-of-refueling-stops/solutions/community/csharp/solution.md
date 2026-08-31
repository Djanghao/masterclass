# 💥C# | Runtime beats 90.57%, Memory beats 84.91% [EXPLAINED]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/5762896/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/5762896/)

---

# Intuition
You're on a road trip and need to refuel at stations to reach your destination. The goal is to minimize the number of refueling stops by choosing the best stations to refuel based on the amount of fuel they offer.

# Approach
Track Fuel: Move from one station to the next, keeping track of your remaining fuel.

Maximize Fuel: Use a priority queue to always refuel at the station offering the most fuel when needed.

Handle Edge Cases: If you can\u2019t reach any station even after considering all options, return -1.

# Complexity
- Time complexity:
O(n log n).
Iterating through stations and using heap operations (enqueue and dequeue).

- Space complexity:
O(n).
Storing the stations and using a priority queue for refueling decisions.

# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution
{
    public int MinRefuelStops(int target, int startFuel, int[][] stations)
    {
        // Add the target as a final "station" with 0 fuel to simplify the loop.
        var extendedStations = new List<int[]>(stations);
        extendedStations.Add(new int[] { target, 0 });
        
        // Priority Queue (Max-Heap) for fuel available at the stations.
        var maxHeap = new PriorityQueue<int, int>();
        
        int currentFuel = startFuel;
        int previousPosition = 0;
        int refuels = 0;

        foreach (var station in extendedStations)
        {
            int position = station[0];
            int fuel = station[1];

            // Calculate the fuel needed to reach the current station.
            currentFuel -= position - previousPosition;

            // While we can't reach the current station with the remaining fuel,
            // refuel from the best available stations.
            while (currentFuel < 0 && maxHeap.Count > 0)
            {
                // Get the station with the maximum fuel.
                maxHeap.TryDequeue(out int availableFuel, out _);
                currentFuel += availableFuel;
                refuels++;
            }

            // If we can't reach the current station even after refueling, return -1.
            if (currentFuel < 0)
                return -1;

            // Add the current station's fuel to the max-heap.
            maxHeap.Enqueue(fuel, -fuel); // Use negative fuel as priority for max-heap behavior

            // Update previous position to current station's position.
            previousPosition = position;
        }

        return refuels;
    }
}

```