# Easy to understand || Iterative || O(n) time and O(1) space

**Author:** nezz4r
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-pooling/solutions/5829679/](https://leetcode.com/problems/car-pooling/solutions/5829679/)

---

# Intuition
The idea behind this algorithm is iterate trough each trip, and adding modifier values to a separate array of length 1000 (maximum road size), incrementing the number of passengers on the car at the pickup position and decrementing at the dropoff position

# Approach
1. Define an array `posiitons` of length `1000`, filled with `0`'s
2. Iterate through the trips array:
    2.1. Add the trip `passengers` to the value at `positions[pickup]`
    2.2. Subtract the trip `passengers` amount from `positions[dropoff]`
3. Iterate through the `positions` array, with a `passengerCount` accumulator:
    3.1. Add the value of `passengers` to the accumulator
    3.2. Check if at any point the `passengerCount` than the capacity, if so, return false 
# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```typescript []
function carPooling(trips: number[][], capacity: number): boolean {
    if (trips.length === 0) return true 
    
    const positions = Array(1000).fill(0)
    
    for (let trip of trips) {
        let [passengers, pickup, dropoff] = trip
        positions[pickup] += passengers
        positions[dropoff] -= passengers
    }

    let passengerCount = 0
    for (let passengers of positions) {
        passengerCount += passengers
        if (passengerCount > capacity) return false
    }

    return true 
};
```