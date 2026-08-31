# Binary Search || Go

**Author:** DiamondI
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2260829/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2260829/)

---

```go
func binarySearch(array []int, left, target int) int{
    // find the index of the first element 
    // which is strictly greater than target
    // from left
	var mid int
	right := len(array)
    for left < right {
        mid = (right + left) / 2
		if mid >= len(array) {
			return mid
		}
        if array[mid] <= target {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}

func latestTimeCatchTheBus(buses []int, passengers []int, capacity int) int {
    sort.Ints(buses)
    sort.Ints(passengers)
    n, m := len(buses), len(passengers)
    
    occur := make(map[int]bool, m)
    for _, p := range passengers  {
        occur[p] = true
    }
    
    // left, index of last person 
    // who can catch current bus
    // start from -1 since no one
    // catchs any bus in the begining
    left := -1 
    lastBusNotFull := false
    
    // find the index of last person who
    // is able to catch a bus
    // "I" must come early than the last person
    for i, bus := range buses {
        // binary search from index left + 1
        // since every person arrives earlier
        // than left is already leaving
        index := binarySearch(passengers, left + 1, bus)
        newPassengers := index - left - 1
        if newPassengers >= capacity {
            newPassengers = capacity
        } else if i == n - 1 {
            lastBusNotFull = true
        }
        left += newPassengers
    }
    // every bus leaves before the earliest person
    // just return the departure time of the last bus
    if left == -1 {
        return buses[n - 1]
    }
    
    // possible result, try from arrive time 
    // of last person who can catch a bus
    possible := passengers[left] - 1
    if lastBusNotFull {
        // if the last bus leaves with non-zero capacity
        // try from its' departure time
        possible = buses[n - 1]
    }
    
    for {
        _, ok := occur[possible]
        if ok {
            possible--;
        } else {
            break
        }
    }
    return possible
}
```