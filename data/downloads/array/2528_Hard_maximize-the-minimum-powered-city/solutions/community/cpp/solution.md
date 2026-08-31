# [C++/Python] Binary Search & Sliding Window & Greedy - Clear explanation

**Author:** hiepit
**Votes:** 105
**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3014943/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3014943/)

---

# Intuition
- We can see that:
   - If we **increase** the minimum power among cities, then we need **more** additional power stations (Given that we have up to `k` additional power stations).
   - If we **decrease** the minimum power among cities, then we need **less** additional power stations (Given that we have up to `k` additional power stations).
- So we can **binary search** to find the maximum value of `minimum power among cities` as long as we can use up to `k` additional power stations.
- We need to build a function `isGood(minPowerRequired, additionalStations = k)` to test if it's good if we set the minium power among cities are `minPowerRequired`?
   - We just iterate on each city, calculate its power, test if the power of all cities are at least `minPowerRequired` given that we have `additionalStations` additional power stations.
   - To calculate the power of each city fast, we keep window value to store sum of power stations of cities `[i-r...i+r]`, then just sliding window to calculate for all cities.
   - When calculate power of `ith` city, if it's not enough powers then we need some additional powers. 
      - If `additionalStations` is not enough then `minPowerRequired` is invalid!
      - Else it's better to plant additional power station to `i+r`th city **(GREEDY)**, so it cover as much as cities as possible.

# Complexity
- Time complexity: `O(N * log(SUM_STATION + k))`, where `N <= 10^5` is the number of cities, `SUM_STATION <= 10^10` is sum of stations, `k <= 10^9` is the number of additional power stations.
- Space complexity: `O(N)`

# Code
<iframe src="https://leetcode.com/playground/K2GRasqU/shared" frameBorder="0" width="100%" height="1000"></iframe>