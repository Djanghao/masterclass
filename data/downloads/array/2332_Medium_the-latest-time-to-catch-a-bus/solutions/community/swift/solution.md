# Easy to understand Swift Solution with inline comments

**Author:** imthath
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/5220240/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/5220240/)

---


# Complexity
### Time Complexity

1. **Sorting**:
   - Sorting the `buses` array takes \\(O(n \\log n)\\), where \\(n\\) is the number of buses.
   - Sorting the `passengers` array takes \\(O(m \\log m)\\), where \\(m\\) is the number of passengers.

2. **Boarding Process**:
   - Iterating through each bus and attempting to board passengers involves a single pass through the `buses` array and potentially the entire `passengers` array. In the worst case, each passenger is considered once, giving us \\(O(n + m)\\).

3. **Adjusting the Latest Arrival Time**:
   - Converting the `passengers` array to a set takes \\(O(m)\\).
   - The while loop to adjust `latestArrivalTime` could, in the worst case, decrement through all possible passenger arrival times. This operation is bounded by the number of passengers, giving us \\(O(m)\\).

Combining these steps, the overall time complexity is dominated by the sorting operations:
\\[ O(n log n + m log m + n + m) = O(n log n + m log m) \\]

### Space Complexity

1. **Sorting**:
   - Sorting the `buses` and `passengers` arrays requires \\(O(n)\\) and \\(O(m)\\) space, respectively, for the sorting operations.

2. **Passenger Set**:
   - Storing the `passengerSet` requires \\(O(m)\\) space.

Other than the space needed for sorting and the set, the additional space used for variables is constant.

Combining these, the overall space complexity is:
\\[ O(n + m) \\]

### Summary

- **Time Complexity**: \\( O(n log n + m log m) \\)
- **Space Complexity**: \\( O(n + m) \\)
- - Time complexity:

# Code
```
/*

*/
class Solution {
    func latestTimeCatchTheBus(_ buses: [Int], _ passengers: [Int], _ capacity: Int) -> Int {
        
        // Step 1: Sort the passengers array
        var sortedPassengers = passengers.sorted()
        var sortedBuses = buses.sorted()
        // Initialize the current index of passengers
        var passengerIndex = 0
        var remainingCapacity = 0
        
        // Step 2: Iterate over each bus's departure time
        for busTime in sortedBuses {
            remainingCapacity = capacity
            // Let passengers board the bus until it's full or there are no more waiting passengers
            while passengerIndex < sortedPassengers.count && sortedPassengers[passengerIndex] <= busTime && remainingCapacity > 0 {
                passengerIndex += 1
                remainingCapacity -= 1
            }
        }
        
        // Step 3: Determine the best time you can arrive
        // If the last bus is not full, the best time is the last bus departure time
        var latestArrivalTime = remainingCapacity > 0 ? sortedBuses.last! : sortedPassengers[passengerIndex - 1]
        // Convert the sorted passengers array to a set for fast lookup
        let passengerSet = Set(sortedPassengers)
        
        // Step 4: Ensure the latest arrival time is not the same as any passenger's arrival time
        while passengerSet.contains(latestArrivalTime) {
            latestArrivalTime -= 1
        }
        
        return latestArrivalTime
    }
}
```