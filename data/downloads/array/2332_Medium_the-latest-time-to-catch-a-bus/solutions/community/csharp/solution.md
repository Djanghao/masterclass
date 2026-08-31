# Fast solution, tracks best time to avoid lookbacks - with comments

**Author:** hafthor
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/4919867/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/4919867/)

---

# Intuition
I realized that I would either need to merge/sort the two lists and iterate a common 'events' type list, or sort each and iterate one list and do partial iteration inside of the other. It seemed most logical to iterate over the buses and do an inner iteration over the passengers that could've possibly boarded that bus given infinite capacity. Then I would just need to track the remaining capacity of all the buses remaining minus passengers awaiting the next bus.

# Approach
Sort the lists, then iterate through the buses, tracking the best/latest allowed time to arrive so far, and the capacity remaining for the buses remaining minus the enqueued passengers so far, returning early if we run out of remaining capacity.

# Complexity
- Time complexity: O(n log n + m log m) because of sorts. O(n+m) if we didn't have to sort.
- Space complexity: O(1)

# Code
```
public class Solution {
    public int LatestTimeCatchTheBus(int[] buses, int[] passengers, int capacity) {
        Array.Sort(buses);
        Array.Sort(passengers);

        int passengerIndex = 0,
            bestTime = 0, // best/latest time so far to catch the bus
            lastPassengerTime = int.MinValue,
            busesRemaining = buses.Length;
        long remainingCapacity = 1L * capacity * busesRemaining; // remaining capacity of buses minus passengers in queue

        foreach (var busTime in buses) {
            // enqueue remaining passengers that could catch this bus
            for (; passengerIndex < passengers.Length; passengerIndex++) {
                int passengerTime = passengers[passengerIndex];
                if (passengerTime > busTime) break; // skip passengers that can't catch this bus (they will catch the next one)
                if (lastPassengerTime != passengerTime - 1) bestTime = passengerTime - 1; // can't arrive at the same time as the passenger
                if (--remainingCapacity <= 0) return bestTime; // no more capacity, return best time so far
                lastPassengerTime = passengerTime;
            }

            if (lastPassengerTime != busTime) bestTime = busTime; // can't arrive at the same time as the passenger
            remainingCapacity = Math.Min(remainingCapacity, 1L * --busesRemaining * capacity); // reduce remaining capacity
        }

        return bestTime;
    }
}
```