# Golang binary search solution

**Author:** anandsuman33
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/3621295/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/3621295/)

---

# Intuition
Thinking in terms of binary search, find a distance between a range for which we can accomodate k+n gas stations.

Determining whether it's possible to accomodate k+n gas station for a distance d, can be done by adding station count needed at each station to have distance d. E.g. station A - 5, station B - 10, to have a distance of 3, we will need (10-5)/3 stations i.e 1

# Approach
Is possible logic
1. Iterate through stations to calculate the distance and divide by desired distance to get the needed number of stations to be inserted between the 2 stations and add it to total count.
2. If count exceeds K, it means it's not possible for that distance and we have to increase the distance to reduce number of needed stations.
3. Else return true

For bounds of binary search, use the max and min posisble values for station i.e. 0 and 10^8

Since our answer is a float with 10^-6 precision, we can check that as the terminal condition for finding the answer.

Binary search
1. If result is not possible, then increase the distance to reduce stations to be added.
2. If result is possible, we can say the answer can be to the left of the search

# Complexity
- Time complexity:
O(klogm) where m is 10^8 * 10^6

- Space complexity:
O(1)

# Code
```
func minmaxGasDist(stations []int, k int) float64 {
    left, right := 0.0, 100000000.0
    for right - left > 0.000001 {
        mid := (left + right) / 2.0
        if isPossible(stations, k, mid) {
            right = mid
        } else {
            left = mid
        }
    }
    return left
}

func isPossible(stations []int, k int, dist float64) bool {
    var stationCount int
    for i:=1; i<len(stations); i++ {
        stationCount += int(float64(stations[i] - stations[i-1]) / dist)
        if stationCount > k {
            return false
        }
    }
    return true
}
```