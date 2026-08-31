# Very simple TS

**Author:** camfeghali
**Votes:** 0
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/4527010/](https://leetcode.com/problems/corporate-flight-bookings/solutions/4527010/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Create a result array representing the seats booked for each flight indexes 0 to n -1. Iterate over the bookings, and increment the number of seats in the array by the seat reserverd in the booking.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n)

# Code
```
function corpFlightBookings(bookings: number[][], n: number): number[] {

    const result = Array(n).fill(0);

    for(const booking of bookings) {
        const [first, last, seats] = booking;
        for(let i=first-1; i < last; i++) {
            result[i] += seats;
        }
    }
    return result;
};
```