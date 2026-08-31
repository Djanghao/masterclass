# 🌱 Easy Solution

**Author:** subroto823
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/4008989/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/4008989/)

---

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []

var latestTimeCatchTheBus = function(buses, passengers, capacity) {
    buses.sort((a, b) => a - b);
    passengers.sort((a, b) => a - b);

    let i = 0, c = 0;

    for (const bTime of buses) {
        c = 0;

        while(i < passengers.length && passengers[i] <= bTime && c < capacity) {
            c++, i++;
        }
    }

    let latest = c !== capacity ? buses[buses.length-1] : passengers[i-1];
    const passengerSet = new Set(passengers);

    while (passengerSet.has(latest)) {
        latest--;
    }

    return latest;
};
```
```python []
class Solution:
    def latestTimeCatchTheBus(self, buses: List[int], passengers: List[int], capacity: int) -> int:
        buses.sort()
        passengers.sort()

        i = 0

        for b_time in buses:
            c = 0
            
            while i < len(passengers) and passengers[i] <= b_time and c < capacity:
                c += 1
                i += 1

        latest = buses[-1] if c != capacity else passengers[i-1]

        while latest in set(passengers):
            latest -= 1
        
        return latest
```