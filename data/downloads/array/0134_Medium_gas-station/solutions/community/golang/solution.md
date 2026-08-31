# Golang | O(N)

**Author:** tw13
**Votes:** 18
**Link:** [https://leetcode.com/problems/gas-station/solutions/3011223/](https://leetcode.com/problems/gas-station/solutions/3011223/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

Brute force will require O(N^2) Time.

To achieve O(N) time, we need to be aware of 2 ideas:
1. If we start at station `start` and the first station that is not reachable is station `i`, then for all stations in `[start, i)`, starting at those stations will not be able to reach `i`. 

2. If total `gas` >= total `cost`, then there is a starting station that can reach all stations.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func canCompleteCircuit(gas []int, cost []int) int {
    n := len(gas)
    fuelLeft, globalFuelLeft, start := 0, 0, 0
    for i := 0; i < n; i++ {
        globalFuelLeft += gas[i] - cost[i]
        fuelLeft += gas[i] - cost[i]
        if fuelLeft < 0 {
            start = i + 1
            fuelLeft = 0
        }
    }

    if globalFuelLeft < 0 {
        return -1
    }
    return start
}
```